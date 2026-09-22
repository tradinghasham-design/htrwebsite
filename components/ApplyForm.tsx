"use client";

import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  AlertCircle,
  Upload,
  X,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Award,
  Clock,
  Building2,
  Sparkles,
} from "lucide-react";

export default function ApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: number;
  jobTitle: string;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    cover_letter: "",
    current_company: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be under 5 MB");
      return;
    }
    setResumeFile(file);
    setError("");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileChange(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const nextStep = () => {
    if (!formData.full_name || !formData.email || !formData.phone) {
      setError("Please fill all required fields");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      let resumeUrl = null;

      // Upload resume if provided
      if (resumeFile) {
        const fileName = `${Date.now()}-${formData.email.replace(
          /[^a-z0-9]/gi,
          "-"
        )}.pdf`;

        const { error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(fileName, resumeFile);

        if (uploadError) {
          setError("Upload failed: " + uploadError.message);
          setSubmitting(false);
          return;
        }

        const { data: urlData } = supabase.storage
          .from("resumes")
          .getPublicUrl(fileName);
        resumeUrl = urlData.publicUrl;
      }

      // Save application to database
      const { error: dbError } = await supabase.from("applications").insert({
        job_id: jobId,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        linkedin_url: formData.linkedin_url || null,
        message: formData.cover_letter || null,
        resume_url: resumeUrl,
        status: "pending",
      });

      if (dbError) {
        setError(dbError.message);
        setSubmitting(false);
        return;
      }

      // Send email notifications
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "application",
            data: {
              full_name: formData.full_name,
              email: formData.email,
              phone: formData.phone,
              jobTitle: jobTitle,
              resume_url: resumeUrl,
              message: formData.cover_letter,
            },
          }),
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
        // Don't fail the submission if email fails
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  // SUCCESS STATE
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-center">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <CheckCircle2 size={44} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Application Submitted!
          </h3>
          <p className="text-white/90 text-sm">
            Your application has been received successfully
          </p>
        </div>

        <div className="p-8">
          <div className="bg-slate-50 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-blue-500" />
              <h4 className="font-bold text-[#1e3a5f]">Application Details</h4>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Briefcase size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Position</div>
                  <div className="font-semibold text-slate-800">{jobTitle}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Applicant</div>
                  <div className="font-semibold text-slate-800">
                    {formData.full_name}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={14} className="text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-semibold text-slate-800">
                    {formData.email}
                  </div>
                </div>
              </div>
              {resumeFile && (
                <div className="flex items-start gap-3">
                  <FileText size={14} className="text-slate-400 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500">Resume</div>
                    <div className="font-semibold text-slate-800">
                      {resumeFile.name}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <Clock size={16} className="text-blue-500 shrink-0 mt-0.5" />
            <div className="text-sm">
              <div className="font-semibold text-[#1e3a5f] mb-1">
                What happens next?
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                A confirmation email has been sent to your email address. Our HR
                team will review your application and contact you within 3-5
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FORM STATE
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4d7a] p-6 md:p-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider">
          <FileText size={12} />
          Application Form
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Apply for {jobTitle}
        </h2>
        <p className="text-white/80 text-sm">
          Fill in your details below to submit your application.
        </p>

        {/* Progress */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 1 ? "bg-white text-[#1e3a5f]" : "bg-white/20 text-white/60"
              }`}
            >
              1
            </div>
            <span className="text-sm text-white/90 font-medium hidden sm:inline">
              Personal Info
            </span>
          </div>
          <div className="w-8 h-[2px] bg-white/30" />
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= 2 ? "bg-white text-[#1e3a5f]" : "bg-white/20 text-white/60"
              }`}
            >
              2
            </div>
            <span className="text-sm text-white/90 font-medium hidden sm:inline">
              Resume & Submit
            </span>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        {error && (
          <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
            <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-red-600 font-medium">{error}</span>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-1 flex items-center gap-2">
                <User size={18} className="text-blue-500" />
                Personal Information
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Tell us about yourself
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmed Khan"
                      value={formData.full_name}
                      onChange={(e) =>
                        setFormData({ ...formData, full_name: e.target.value })
                      }
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    LinkedIn Profile
                  </label>
                  <div className="relative">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <input
                      type="url"
                      placeholder="linkedin.com/in/yourprofile"
                      value={formData.linkedin_url}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          linkedin_url: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Current Company
                  </label>
                  <div className="relative">
                    <Building2
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="e.g. Tech Corp"
                      value={formData.current_company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          current_company: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={nextStep}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              >
                Continue to Next Step
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-1 flex items-center gap-2">
                <FileText size={18} className="text-blue-500" />
                Resume / CV
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Upload your resume (PDF format, max 5 MB)
              </p>

              {!resumeFile ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${
                    isDragging
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Upload size={28} className="text-blue-500" />
                  </div>
                  <div className="font-bold text-[#1e3a5f] mb-1">
                    Drop your resume here, or click to browse
                  </div>
                  <div className="text-xs text-slate-500">
                    PDF format • Max 5 MB
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <FileText size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">
                        {resumeFile.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        {(resumeFile.size / 1024).toFixed(0)} KB • Ready to submit
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    className="w-9 h-9 rounded-full bg-white hover:bg-red-50 border border-green-200 flex items-center justify-center text-slate-500 hover:text-red-500 transition-all"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileChange(file);
                }}
                className="hidden"
              />
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-1 flex items-center gap-2">
                <MessageSquare size={18} className="text-blue-500" />
                Cover Letter
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Optional - Tell us why you're a great fit
              </p>

              <textarea
                rows={6}
                placeholder="I'm excited about this opportunity because..."
                value={formData.cover_letter}
                onChange={(e) =>
                  setFormData({ ...formData, cover_letter: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
              />
            </div>

            <div className="pt-6 border-t border-slate-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600 leading-relaxed">
                  I confirm that the information provided is accurate and I
                  agree to the terms and conditions of HTR Systems.
                </span>
              </label>
            </div>

            <div className="flex gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg font-semibold transition-all"
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* FOOTER */}
      <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
          <Award size={12} className="text-blue-500" />
          Your data is secure and encrypted
        </div>
      </div>
    </div>
  );
}
