"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Trash2, AlertCircle } from "lucide-react";

export default function DeleteJobButton({
  jobId,
  jobTitle,
}: {
  jobId: number;
  jobTitle: string;
}) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);

    const { error } = await supabase.from("jobs").delete().eq("id", jobId);

    if (error) {
      alert("Error deleting job: " + error.message);
      setDeleting(false);
      return;
    }

    setShowConfirm(false);
    setDeleting(false);
    router.refresh();
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="w-9 h-9 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 flex items-center justify-center text-red-600 transition-all"
        title="Delete job"
      >
        <Trash2 size={16} />
      </button>

      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4 mx-auto">
              <AlertCircle size={28} className="text-red-500" />
            </div>

            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 text-center">
              Delete Job?
            </h3>
            <p className="text-sm text-slate-600 text-center mb-6">
              Are you sure you want to delete{" "}
              <strong className="text-slate-900">{jobTitle}</strong>? This
              action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 hover:border-slate-300 text-slate-700 rounded-lg font-semibold text-sm transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-lg font-semibold text-sm transition-all"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
