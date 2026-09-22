import Link from "next/link";
import { supabase } from "@/lib/supabase";
import DeleteJobButton from "@/components/DeleteJobButton";
import {
  Briefcase,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Plus,
  Edit,
  Eye,
  Trash2,
  Calendar,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminJobsPage() {
  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false });

  const allJobs = jobs || [];

  const { count: totalApps } = await supabase
    .from("applications")
    .select("*", { count: "exact", head: true });

  return (
    <div className="space-y-6">

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">
            Jobs Management
          </h1>
          <p className="text-slate-500 text-sm">
            Create, edit, and manage all job postings
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all"
        >
          <Plus size={16} />
          Post New Job
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Briefcase size={20} className="text-blue-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Total Jobs
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{allJobs.length}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Calendar size={20} className="text-green-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Active
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">
            {allJobs.filter((j: any) => j.is_active).length}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
              <Briefcase size={20} className="text-slate-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Inactive
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">
            {allJobs.filter((j: any) => !j.is_active).length}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Users size={20} className="text-purple-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Applications
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{totalApps || 0}</div>
        </div>
      </div>

      {allJobs.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Briefcase size={40} className="text-slate-400" />
          </div>
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">
            No jobs posted yet
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Create your first job posting to start receiving applications.
          </p>
          <Link
            href="/admin/jobs/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm"
          >
            <Plus size={16} />
            Post First Job
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-[#1e3a5f]">
              All Jobs ({allJobs.length})
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {allJobs.map((job: any) => (
              <div
                key={job.id}
                className="p-6 flex flex-wrap items-center gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl shrink-0">
                  {job.icon || "💼"}
                </div>

                <div className="flex-1 min-w-[250px]">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#1e3a5f]">{job.title}</h3>
                    {job.is_active ? (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 border border-green-200 rounded-full text-[10px] font-bold uppercase">
                        Active
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full text-[10px] font-bold uppercase">
                        Inactive
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {job.vacancies} vacancies
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/careers/latest-jobs/${job.slug}`}
                    target="_blank"
                    className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-all"
                    title="View on site"
                  >
                    <Eye size={16} />
                  </Link>
                  <Link
                    href={`/admin/jobs/${job.id}/edit`}
                    className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-all"
                    title="Edit job"
                  >
                    <Edit size={16} />
                  </Link>
                  <DeleteJobButton jobId={job.id} jobTitle={job.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
