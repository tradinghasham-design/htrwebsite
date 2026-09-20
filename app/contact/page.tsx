"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase.from("messages").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject || null,
      message: formData.message,
      status: "unread",
    });

    if (dbError) {
      setError(dbError.message);
      setSubmitting(false);
      return;
    }

    // Send email notification
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });
    } catch (emailError) {
      console.error("Email send failed:", emailError);
      // Don't fail submission if email fails
    }

    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="bg-slate-50 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="bg-white rounded-2xl border border-green-200 p-10 text-center max-w-lg shadow-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 size={44} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-3">
            Message Sent!
          </h1>
          <p className="text-slate-600 mb-2">
            Thank you for contacting us, <strong>{formData.name}</strong>.
          </p>
          <p className="text-sm text-slate-400 mb-6">
            A confirmation email has been sent to your address. We'll get back to you within 24 business hours.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm"
          >
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-5">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-3xl">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* LEFT: INFO (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Whether you need a website, mobile app, or custom software solution — our team is ready to help.
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Our Office
                  </div>
                  <div className="text-sm text-slate-800 leading-relaxed">
                    I-9 Industrial Area,
                    <br />
                    Islamabad, Pakistan
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+923090649180"
                    className="text-sm text-slate-800 hover:text-blue-500 transition-colors"
                  >
                    +92 309 0649180
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:info@softtech.com"
                    className="text-sm text-slate-800 hover:text-blue-500 transition-colors"
                  >
                    info@softtech.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Business Hours
                  </div>
                  <div className="text-sm text-slate-800">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM (3/5) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                  Send us a Message
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Fill the form below and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Subject
                      </label>
                      <div className="relative">
                        <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Project inquiry"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-4 top-3.5 text-slate-400" />
                      <textarea
                        required
                        rows={6}
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-red-600">{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}