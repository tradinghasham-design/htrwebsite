import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Flame,
} from "lucide-react";
import { getJobs } from "@/lib/jobs";

export const dynamic = "force-dynamic";

export default async function LatestJobsPage() {
  const jobs = (await getJobs()) || [];
  const totalVacancies = jobs.reduce((sum, j) => sum + j.vacancies, 0);

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] mb-6 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-5">
            Latest Jobs
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-6 max-w-3xl">
            Explore our current openings and find the perfect role for you.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
            <Link href="/" className="text-slate-500 hover:text-[#1e3a5f]">
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link href="/careers" className="text-slate-500 hover:text-[#1e3a5f]">
              Careers
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium">Latest Jobs</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {jobs.length === 0 ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-3xl p-12 md:p-16 text-center shadow-sm">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Briefcase size={40} className="text-[#1e3a5f]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                  No job openings available at the moment.
                </h2>
                <p className="text-slate-500 text-base md:text-lg mb-8">
                  Check back soon or explore our other opportunities!
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm"
                >
                  Back to Careers <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-50 border border-blue-100">
                  <Flame size={14} className="text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">
                    We're Hiring
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-3">
                  Current Openings
                </h2>
                <p className="text-slate-500">
                  <span className="font-bold text-[#1e3a5f]">{totalVacancies}</span> vacancies across{" "}
                  <span className="font-bold text-[#1e3a5f]">{jobs.length}</span> open positions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/careers/latest-jobs/${job.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className={`relative p-6 bg-gradient-to-br ${job.color} overflow-hidden`}>
                      <div className="relative flex items-start justify-between">
                        <div className="text-5xl">{job.icon}</div>
                        <div className="px-3 py-1 bg-white/20 backdrop-blur border border-white/30 rounded-full">
                          <span className="text-white text-xs font-bold uppercase">
                            {job.department}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-blue-500">
                        {job.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin size={14} className="text-blue-500" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock size={14} className="text-blue-500" />
                          <span>{job.type} • {job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <DollarSign size={14} className="text-blue-500" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar size={14} className="text-blue-500" />
                          <span>Apply by <strong>{job.deadline}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Users size={14} className="text-blue-500" />
                          <span><strong>{job.vacancies}</strong> vacancies</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold">
                        Apply Now <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}