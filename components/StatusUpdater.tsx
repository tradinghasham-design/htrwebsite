"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Save,
  MessageSquare,
} from "lucide-react";

const statusOptions = [
  {
    value: "pending",
    label: "Pending Review",
    icon: Clock,
    color: "yellow",
  },
  {
    value: "shortlisted",
    label: "Shortlisted",
    icon: CheckCircle2,
    color: "blue",
  },
  {
    value: "interview",
    label: "Interview",
    icon: AlertCircle,
    color: "purple",
  },
  {
    value: "hired",
    label: "Hired",
    icon: CheckCircle2,
    color: "green",
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: XCircle,
    color: "red",
  },
];

export default function StatusUpdater({
  applicationId,
  currentStatus,
  currentNotes,
}: {
  applicationId: number;
  currentStatus: string;
  currentNotes: string;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [notes, setNotes] = useState(currentNotes);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSaved(false);

    const { error: dbError } = await supabase
      .from("applications")
      .update({ status, notes })
      .eq("id", applicationId);

    if (dbError) {
      setError(dbError.message);
      setSaving(false);
      return;
    }

    setSaved(true);
    setSaving(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
        <CheckCircle2 size={18} className="text-blue-500" />
        Application Status & Notes
      </h3>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Update Status
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {statusOptions.map((option) => {
            const Icon = option.icon;
            const isActive = status === option.value;
            const colorClasses: Record<string, string> = {
              yellow: isActive
                ? "bg-yellow-500 text-white border-yellow-500"
                : "border-slate-200 hover:border-yellow-300 text-slate-600",
              blue: isActive
                ? "bg-blue-500 text-white border-blue-500"
                : "border-slate-200 hover:border-blue-300 text-slate-600",
              purple: isActive
                ? "bg-purple-500 text-white border-purple-500"
                : "border-slate-200 hover:border-purple-300 text-slate-600",
              green: isActive
                ? "bg-green-500 text-white border-green-500"
                : "border-slate-200 hover:border-green-300 text-slate-600",
              red: isActive
                ? "bg-red-500 text-white border-red-500"
                : "border-slate-200 hover:border-red-300 text-slate-600",
            };
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setStatus(option.value)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${colorClasses[option.color]}`}
              >
                <Icon size={18} />
                <span className="text-xs font-semibold text-center leading-tight">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
          <MessageSquare size={14} className="text-blue-500" />
          Internal Notes
        </label>
        <textarea
          rows={4}
          placeholder="Add notes about this candidate..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm text-red-600">{error}</span>
        </div>
      )}

      {saved && (
        <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
          <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm text-green-600">Saved successfully!</span>
        </div>
      )}

      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg font-bold transition-all"
      >
        {saving ? (
          "Saving..."
        ) : (
          <>
            <Save size={16} />
            Save Changes
          </>
        )}
      </button>
    </div>
  );
}
