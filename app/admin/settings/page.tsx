import { Settings, User, Bell, Shield, Code2 } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Settings</h1>
        <p className="text-slate-500 text-sm">
          Manage your admin panel preferences
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <User size={24} className="text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a5f]">Profile</h3>
              <p className="text-sm text-slate-500">Account settings</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                defaultValue="Admin"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                defaultValue="admin@softtech.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm mt-1"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <Bell size={24} className="text-purple-500" />
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a5f]">Notifications</h3>
              <p className="text-sm text-slate-500">Email preferences</p>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer">
              <span className="text-sm text-slate-700">New applications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
            <label className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer">
              <span className="text-sm text-slate-700">Weekly summary</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <Shield size={24} className="text-red-500" />
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a5f]">Security</h3>
              <p className="text-sm text-slate-500">Password & security</p>
            </div>
          </div>
          <button className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
            Change Password
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <Code2 size={24} className="text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-[#1e3a5f]">System Info</h3>
              <p className="text-sm text-slate-500">Version details</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 space-y-1">
            <div>Version: 1.0.0</div>
            <div>Environment: Development</div>
          </div>
        </div>
      </div>
    </div>
  );
}
