import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  Users,
  FileText,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  // Fetch data
  const { data: applications } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true);

  const { count: totalApps } = await supabase
    .from("applications")
    .select("*", { count: "exact", head: true });

  const { count: totalJobs } = await supabase
    .from("jobs")
    .select("*", { count: "exact", head: true })
    .eq("is_active", true);

  const apps = applications || [];
  const activeJobs = jobs || [];

  // Stats
  const stats = [
    {
      label: "Total Applications",
      value: totalApps || 0,
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      label: "Active Jobs",
      value: totalJobs || 0,
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
    {
      label: "Pending Review",
      value: apps.filter((a: any) => a.status === "pending").length,
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-50",
      text: "text-yellow-600",
    },
    {
      label: "Shortlisted",
      value: apps.filter((a: any) => a.status === "shortlisted").length,
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-600",
    },
  ];

  const formatDate = (dateStr: string) => {
    try {
      const now = new Date();
      const date = new Date(dateStr);
      const diffHours = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60 * 60)
      );
      if (diffHours < 1) return "Just now";
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      if (diffDays < 7) return `${diffDays}d ago`;
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-6">

      {/* WELCOME */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4d7a] rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="relative">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, Admin 👋
          </h1>
          <p className="text-blue-100/80 text-sm mb-6">
            Here's what's happening with your recruitment today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/applications"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1e3a5f] rounded-lg font-semibold text-sm hover:bg-blue-50 transition-all"
            >
              View Applications
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/careers/latest-jobs"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur border border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all"
            >
              View Public Site
            </Link>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}
                >
                  <Icon size={24} className={stat.text} />
                </div>
                <TrendingUp size={16} className="text-green-500" />
              </div>
              <div className="text-3xl font-bold text-[#1e3a5f] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* RECENT + QUICK ACTIONS */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* RECENT APPLICATIONS */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#1e3a5f]">
                Recent Applications
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Latest 5 applications
              </p>
            </div>
            <Link
              href="/admin/applications"
              className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-semibold"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {apps.length === 0 ? (
              <div className="p-12 text-center">
                <FileText size={40} className="text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">
                  No applications yet
                </p>
              </div>
            ) : (
              apps.map((app: any) => (
                <div
                  key={app.id}
                  className="p-5 flex items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shrink-0">
                    {app.full_name?.charAt(0).toUpperCase() || "?"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#1e3a5f] truncate">
                      {app.full_name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {app.email}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {formatDate(app.created_at)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-2xl border border-slate-200">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-[#1e3a5f]">
              Quick Actions
            </h2>
            <p className="text-sm text-slate-500 mt-1">Common tasks</p>
          </div>

          <div className="p-4 space-y-2">
            <Link
              href="/admin/applications"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <FileText size={18} className="text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f] text-sm">
                  Review Applications
                </div>
                <div className="text-xs text-slate-500">
                  Check new candidates
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
              />
            </Link>

            <Link
              href="/careers/latest-jobs"
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <Users size={18} className="text-green-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#1e3a5f] text-sm">
                  View Public Site
                </div>
                <div className="text-xs text-slate-500">
                  See live jobs page
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ACTIVE JOBS */}
      <div className="bg-white rounded-2xl border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#1e3a5f]">Active Jobs</h2>
            <p className="text-sm text-slate-500 mt-1">
              Currently open positions
            </p>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeJobs.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <Briefcase size={40} className="text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm">
                No active jobs. Create your first job posting!
              </p>
            </div>
          ) : (
            activeJobs.map((job: any) => (
              <div
                key={job.id}
                className="p-5 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{job.icon || "💼"}</div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 border border-green-200 rounded-full text-[10px] font-bold uppercase">
                    Active
                  </span>
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-1 text-sm">
                  {job.title}
                </h3>
                <div className="text-xs text-slate-500 mb-3">
                  {job.department} • {job.location}
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-slate-500">
                    <Users size={12} />
                    {job.vacancies} vacancies
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
