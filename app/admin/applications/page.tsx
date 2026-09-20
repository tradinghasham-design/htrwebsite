import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  FileText,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Eye,
  Download,
  Users,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminApplicationsPage() {
  const { data: applications, error } = await supabase
    .from("applications")
    .select(
      `
      *,
      jobs (
        id,
        title,
        department
      )
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error:", error);
  }

  const apps = applications || [];

  const totalApps = apps.length;
  const pending = apps.filter((a: any) => a.status === "pending").length;
  const shortlisted = apps.filter(
    (a: any) => a.status === "shortlisted"
  ).length;
  const hired = apps.filter((a: any) => a.status === "hired").length;

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "shortlisted":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "hired":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-2">
                Applications
              </h1>
              <p className="text-slate-500 text-sm">
                Manage all job applications in one place
              </p>
            </div>
            <Link
              href="/careers/latest-jobs"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all"
            >
              View Public Site
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users size={20} className="text-blue-500" />
                </div>
                <div className="text-xs text-slate-500 uppercase font-semibold">
                  Total
                </div>
              </div>
              <div className="text-2xl font-bold text-[#1e3a5f]">
                {totalApps}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                  <Calendar size={20} className="text-yellow-500" />
                </div>
                <div className="text-xs text-slate-500 uppercase font-semibold">
                  Pending
                </div>
              </div>
              <div className="text-2xl font-bold text-[#1e3a5f]">{pending}</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Eye size={20} className="text-blue-500" />
                </div>
                <div className="text-xs text-slate-500 uppercase font-semibold">
                  Shortlisted
                </div>
              </div>
              <div className="text-2xl font-bold text-[#1e3a5f]">
                {shortlisted}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Briefcase size={20} className="text-green-500" />
                </div>
                <div className="text-xs text-slate-500 uppercase font-semibold">
                  Hired
                </div>
              </div>
              <div className="text-2xl font-bold text-[#1e3a5f]">{hired}</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS LIST */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {apps.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-50 flex items-center justify-center">
                <FileText size={40} className="text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">
                No applications yet
              </h2>
              <p className="text-slate-500 text-sm">
                When candidates apply, their applications will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {apps.map((app: any) => (
                <div
                  key={app.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-[300px]">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                          {app.full_name?.charAt(0).toUpperCase() || "?"}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">
                            {app.full_name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase size={14} className="text-slate-400" />
                            <span className="text-sm text-slate-600">
                              Applied for:{" "}
                              <strong>
                                {app.jobs?.title || "Unknown Position"}
                              </strong>
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Mail size={12} />
                              {app.email}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Phone size={12} />
                              {app.phone}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              {formatDate(app.created_at)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${getStatusColor(
                          app.status
                        )}`}
                      >
                        {app.status}
                      </span>

                      {app.resume_url && (
                        <a
                          href={app.resume_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 transition-all"
                        >
                          <Download size={14} />
                          Resume
                        </a>
                      )}

                      <Link
                        href={`/admin/applications/${app.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-all"
                      >
                        <Eye size={14} />
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}