"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  Save,
  AlertCircle,
  CheckCircle2,
  Briefcase,
  Clock,
  Code2,
} from "lucide-react";

export default function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    department: "Engineering",
    location: "",
    type: "Full-time",
    experience: "",
    salary: "",
    vacancies: 1,
    deadline: "",
    description: "",
    responsibilities: "",
    requirements: "",
    nice_to_have: "",
    benefits: "",
    icon: "💼",
    color: "from-blue-600 via-cyan-600 to-teal-600",
    is_active: true,
  });

  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) {
        setError("Job not found");
        setLoading(false);
        return;
      }

      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        department: data.department || "Engineering",
        location: data.location || "",
        type: data.type || "Full-time",
        experience: data.experience || "",
        salary: data.salary || "",
        vacancies: data.vacancies || 1,
        deadline: data.deadline || "",
        description: data.description || "",
        responsibilities: (data.responsibilities || []).join("\n"),
        requirements: (data.requirements || []).join("\n"),
        nice_to_have: (data.nice_to_have || []).join("\n"),
        benefits: (data.benefits || []).join("\n"),
        icon: data.icon || "💼",
        color: data.color || "from-blue-600 via-cyan-600 to-teal-600",
        is_active: data.is_active ?? true,
      });
      setLoading(false);
    };

    fetchJob();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const parseList = (str: string) =>
      str
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);

    const { error: dbError } = await supabase
      .from("jobs")
      .update({
        slug: formData.slug,
        title: formData.title,
        department: formData.department,
        location: formData.location,
        type: formData.type,
        experience: formData.experience,
        salary: formData.salary,
        vacancies: parseInt(formData.vacancies.toString()),
        deadline: formData.deadline,
        description: formData.description,
        responsibilities: parseList(formData.responsibilities),
        requirements: parseList(formData.requirements),
        nice_to_have: parseList(formData.nice_to_have),
        benefits: parseList(formData.benefits),
        icon: formData.icon,
        color: formData.color,
        is_active: formData.is_active,
      })
      .eq("id", id);

    if (dbError) {
      setError(dbError.message);
      setSaving(false);
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      router.push("/admin/jobs");
      router.refresh();
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <Link
          href="/admin/jobs"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] mb-4 text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Jobs
        </Link>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Edit Job</h1>
        <p className="text-slate-500 text-sm">
          Update the job posting details
        </p>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-xl">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm text-red-600 font-medium">{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-start gap-2 p-4 bg-green-50 border border-green-200 rounded-xl">
          <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm text-green-600 font-medium">
            Job updated successfully! Redirecting...
          </span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Active Toggle */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1e3a5f]">Job Status</h3>
              <p className="text-sm text-slate-500 mt-1">
                {formData.is_active
                  ? "Active - Visible on website"
                  : "Inactive - Hidden from website"}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setFormData({ ...formData, is_active: !formData.is_active })
              }
              className={`relative w-14 h-8 rounded-full transition-all ${
                formData.is_active ? "bg-green-500" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-all ${
                  formData.is_active ? "left-7" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
            <Briefcase size={18} className="text-blue-500" />
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Job Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                URL Slug
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              >
                <option>Engineering</option>
                <option>AI & Data</option>
                <option>Design</option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>HR</option>
                <option>Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* JOB DETAILS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
            <Clock size={18} className="text-blue-500" />
            Job Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Job Type
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Experience
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Salary
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Vacancies
              </label>
              <input
                type="number"
                min="1"
                value={formData.vacancies}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    vacancies: parseInt(e.target.value) || 1,
                  })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Deadline
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-5">
            Description & Lists
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Short Description
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Responsibilities (one per line)
              </label>
              <textarea
                rows={4}
                value={formData.responsibilities}
                onChange={(e) =>
                  setFormData({ ...formData, responsibilities: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Requirements (one per line)
              </label>
              <textarea
                rows={4}
                value={formData.requirements}
                onChange={(e) =>
                  setFormData({ ...formData, requirements: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Nice to Have (one per line)
              </label>
              <textarea
                rows={3}
                value={formData.nice_to_have}
                onChange={(e) =>
                  setFormData({ ...formData, nice_to_have: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Benefits (one per line)
              </label>
              <textarea
                rows={4}
                value={formData.benefits}
                onChange={(e) =>
                  setFormData({ ...formData, benefits: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>
        </div>

        {/* APPEARANCE */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
            <Code2 size={18} className="text-blue-500" />
            Appearance
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Icon (Emoji)
              </label>
              <input
                type="text"
                maxLength={4}
                value={formData.icon}
                onChange={(e) =>
                  setFormData({ ...formData, icon: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-2xl text-center focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Gradient Color
              </label>
              <select
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              >
                <option value="from-blue-600 via-cyan-600 to-teal-600">Blue → Cyan</option>
                <option value="from-purple-600 via-violet-600 to-indigo-700">Purple → Indigo</option>
                <option value="from-pink-500 via-rose-500 to-red-600">Pink → Red</option>
                <option value="from-green-500 via-emerald-500 to-teal-600">Green → Teal</option>
                <option value="from-amber-500 via-orange-500 to-red-600">Orange → Red</option>
                <option value="from-sky-500 via-cyan-500 to-blue-600">Sky → Blue</option>
                <option value="from-lime-500 via-green-500 to-emerald-600">Lime → Green</option>
              </select>
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex gap-3">
          <Link
            href="/admin/jobs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg font-semibold transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving || success}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg font-bold transition-all shadow-lg"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : success ? (
              <>
                <CheckCircle2 size={18} />
                Saved!
              </>
            ) : (
              <>
                <Save size={18} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}