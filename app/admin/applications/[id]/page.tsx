import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  User,
  FileText,
  Download,
  Building2,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import StatusUpdater from "@/components/StatusUpdater";

export const dynamic = "force-dynamic";

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: application, error } = await supabase
    .from("applications")
    .select(
      `
      *,
      jobs (
        id,
        title,
        department,
        location,
        salary,
        type
      )
    `
    )
    .eq("id", id)
    .single();

  if (error || !application) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-16">

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/admin/applications"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] mb-4 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Applications
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
            Application Details
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">

        {/* APPLICANT CARD */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex flex-wrap items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-3xl shrink-0">
              {application.full_name?.charAt(0).toUpperCase() || "?"}
            </div>
            <div className="flex-1 min-w-[250px]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-2">
                {application.full_name}
              </h2>
              <div className="flex items-center gap-2 text-slate-600 mb-4">
                <Briefcase size={16} className="text-blue-500" />
                <span className="text-sm">
                  Applied for:{" "}
                  <strong>{application.jobs?.title || "Unknown Position"}</strong>
                </span>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href={`mailto:${application.email}`}
                  className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail size={16} className="text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">Email</div>
                    <div className="text-xs font-semibold text-slate-800 truncate">
                      {application.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${application.phone}`}
                  className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Phone size={16} className="text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">Phone</div>
                    <div className="text-xs font-semibold text-slate-800 truncate">
                      {application.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                  <Calendar size={16} className="text-blue-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">Applied On</div>
                    <div className="text-xs font-semibold text-slate-800">
                      {formatDate(application.created_at)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOB INFO */}
        {application.jobs && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <Building2 size={18} className="text-blue-500" />
              Job Information
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Position
                </div>
                <div className="font-semibold text-[#1e3a5f]">
                  {application.jobs.title}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Department
                </div>
                <div className="font-semibold text-[#1e3a5f]">
                  {application.jobs.department}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="font-semibold text-[#1e3a5f]">
                  {application.jobs.location}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STATUS UPDATER */}
        <StatusUpdater
          applicationId={application.id}
          currentStatus={application.status || "pending"}
          currentNotes={application.notes || ""}
        />

        {/* RESUME */}
        {application.resume_url && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <FileText size={18} className="text-blue-500" />
              Resume / CV
            </h3>
            <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-[#1e3a5f] text-sm">
                    Resume.pdf
                  </div>
                  <div className="text-xs text-slate-500">
                    Uploaded by applicant
                  </div>
                </div>
              </div>
              <a
                href={application.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        )}

        {/* COVER LETTER / MESSAGE */}
        {application.message && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
              <FileText size={18} className="text-blue-500" />
              Cover Letter
            </h3>
            <div className="p-5 bg-slate-50 rounded-xl">
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-sm">
                {application.message}
              </p>
            </div>
          </div>
        )}

        {/* LINKEDIN */}
        {application.linkedin_url && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 flex items-center gap-2">
              <User size={18} className="text-blue-500" />
              LinkedIn Profile
            </h3>
            <a
              href={application.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 font-medium text-sm break-all"
            >
              {application.linkedin_url}
            </a>
          </div>
        )}

      </div>
    </main>
  );
}