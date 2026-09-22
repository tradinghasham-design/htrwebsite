import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  Mail,
  Phone,
  MessageSquare,
  User,
  Clock,
  Eye,
  Trash2,
  MailOpen,
  Users,
  Calendar,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  const allMessages = messages || [];

  const totalMsgs = allMessages.length;
  const unread = allMessages.filter((m: any) => m.status === "unread").length;
  const read = allMessages.filter((m: any) => m.status === "read").length;
  const thisWeek = allMessages.filter((m: any) => {
    const created = new Date(m.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return created > weekAgo;
  }).length;

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

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Messages</h1>
        <p className="text-slate-500 text-sm">
          Manage contact form submissions
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <MessageSquare size={20} className="text-blue-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Total
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{totalMsgs}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
              <MailOpen size={20} className="text-yellow-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Unread
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{unread}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Eye size={20} className="text-green-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              Read
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{read}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <Calendar size={20} className="text-purple-500" />
            </div>
            <div className="text-xs text-slate-500 uppercase font-semibold">
              This Week
            </div>
          </div>
          <div className="text-2xl font-bold text-[#1e3a5f]">{thisWeek}</div>
        </div>
      </div>

      {/* MESSAGES LIST */}
      {allMessages.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-50 flex items-center justify-center">
            <Mail size={40} className="text-slate-400" />
          </div>
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">
            No messages yet
          </h2>
          <p className="text-slate-500 text-sm">
            When visitors submit the contact form, messages will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {allMessages.map((msg: any) => (
            <div
              key={msg.id}
              className={`bg-white border rounded-2xl p-6 hover:shadow-lg transition-all ${
                msg.status === "unread"
                  ? "border-blue-300 bg-blue-50/30"
                  : "border-slate-200"
              }`}
            >
              <div className="flex flex-wrap items-start gap-4">

                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {msg.name?.charAt(0).toUpperCase() || "?"}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-[300px]">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#1e3a5f]">
                      {msg.name}
                    </h3>
                    {msg.status === "unread" && (
                      <span className="px-2.5 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase">
                        New
                      </span>
                    )}
                  </div>

                  {msg.subject && (
                    <div className="text-sm font-medium text-slate-700 mb-2">
                      <strong>Subject:</strong> {msg.subject}
                    </div>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {msg.message}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <a
                      href={`mailto:${msg.email}`}
                      className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
                    >
                      <Mail size={12} />
                      {msg.email}
                    </a>
                    {msg.phone && (
                      <a
                        href={`tel:${msg.phone}`}
                        className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
                      >
                        <Phone size={12} />
                        {msg.phone}
                      </a>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {formatDate(msg.created_at)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${msg.email}?subject=Re: ${msg.subject || "Your message"}`}
                    className="w-9 h-9 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 transition-all"
                    title="Reply via email"
                  >
                    <Mail size={16} />
                  </a>
                  <button className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-all">
                    <Eye size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center text-red-600 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
