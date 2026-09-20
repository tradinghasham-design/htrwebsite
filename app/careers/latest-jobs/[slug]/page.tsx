import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  Briefcase,
  Building2,
  Heart,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";
import { getJobBySlug, getJobs } from "@/lib/jobs";
import ApplyForm from "@/components/ApplyForm";

export const dynamic = "force-dynamic";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const allJobs = await getJobs();
  const relatedJobs = allJobs
    .filter((j) => j.department === job.department && j.id !== job.id)
    .slice(0, 3);

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HERO BANNER */}
      <section className={`relative bg-gradient-to-br ${job.color} pt-10 pb-24 md:pt-14 md:pb-32 overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/careers/latest-jobs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to All Jobs
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {job.department}
                </span>
                <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full">
                  Actively Hiring
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{job.experience}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={16} className="text-white" />
                  <span className="text-white text-sm font-semibold">
                    Save this job
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 h-10 rounded-lg bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="flex-1 h-10 rounded-lg bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button className="flex-1 h-10 rounded-lg bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="flex-1 h-10 rounded-lg bg-white/20 hover:bg-white/30 border border-white/20 flex items-center justify-center text-white">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* META CARDS */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          <div className="p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center">
              <DollarSign size={18} className="text-blue-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
              Salary
            </div>
            <div className="font-bold text-[#1e3a5f]">{job.salary}</div>
          </div>
          <div className="p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-purple-50 flex items-center justify-center">
              <Users size={18} className="text-purple-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
              Vacancies
            </div>
            <div className="font-bold text-[#1e3a5f]">{job.vacancies}</div>
          </div>
          <div className="p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-orange-50 flex items-center justify-center">
              <Calendar size={18} className="text-orange-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
              Apply By
            </div>
            <div className="font-bold text-[#1e3a5f] text-sm">
              {formatDate(job.deadline)}
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-green-50 flex items-center justify-center">
              <Briefcase size={18} className="text-green-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
              Job Type
            </div>
            <div className="font-bold text-[#1e3a5f]">{job.type}</div>
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5 flex items-center gap-3">
                  <Sparkles size={22} className="text-blue-500" />
                  About This Role
                </h2>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {job.description}
                </p>
              </div>

              {(job.responsibilities || []).length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-blue-500" />
                    Key Responsibilities
                  </h2>
                  <ul className="space-y-3.5">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(job.requirements || []).length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <Award size={22} className="text-blue-500" />
                    Requirements
                  </h2>
                  <ul className="space-y-3.5">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(job.nice_to_have || []).length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <TrendingUp size={22} className="text-blue-500" />
                    Nice to Have
                  </h2>
                  <ul className="space-y-3.5">
                    {job.nice_to_have.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(job.benefits || []).length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
                    <Heart size={22} className="text-blue-500" />
                    Benefits & Perks
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {job.benefits.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                      >
                        <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* APPLY FORM */}
              <div id="apply">
                <ApplyForm jobId={job.id} jobTitle={job.title} />
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-5">
                  Job Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Building2 size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Department</div>
                      <div className="text-sm font-semibold text-[#1e3a5f]">{job.department}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Location</div>
                      <div className="text-sm font-semibold text-[#1e3a5f]">{job.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Experience</div>
                      <div className="text-sm font-semibold text-[#1e3a5f]">{job.experience}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Globe size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Job Type</div>
                      <div className="text-sm font-semibold text-[#1e3a5f]">{job.type}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a
                    href="#apply"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all"
                  >
                    Apply for this Job
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">
                  About SoftTech
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  We're a modern software company delivering AI-driven solutions from Islamabad, Pakistan.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <div className="font-bold text-[#1e3a5f]">10+</div>
                    <div className="text-xs text-slate-500">Team</div>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">8+</div>
                    <div className="text-xs text-slate-500">Countries</div>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">5★</div>
                    <div className="text-xs text-slate-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED JOBS */}
      {relatedJobs.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-10">
              Similar Jobs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedJobs.map((rj) => (
                <Link
                  key={rj.id}
                  href={`/careers/latest-jobs/${rj.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`relative p-6 bg-gradient-to-br ${rj.color}`}>
                    <div className="text-4xl">{rj.icon}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wider text-blue-500 font-bold mb-2">
                      {rj.department}
                    </div>
                    <h3 className="font-bold text-[#1e3a5f] mb-3 group-hover:text-blue-500">
                      {rj.title}
                    </h3>
                    <div className="space-y-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {rj.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign size={12} />
                        {rj.salary}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}