import { Users, Mail, Plus } from "lucide-react";

export default function AdminTeamPage() {
  const team = [
    {
      name: "Muhammad Ahmad",
      role: "CEO & Founder",
      email: "ahmad@softtech.com",
      initial: "M",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Admin",
      role: "HR Manager",
      email: "admin@softtech.com",
      initial: "A",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">
            Team Members
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your organization's team
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all">
          <Plus size={16} />
          Add Member
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-2xl`}
              >
                {member.initial}
              </div>
              <div>
                <h3 className="font-bold text-[#1e3a5f]">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            </div>

            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500 transition-colors"
            >
              <Mail size={14} />
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
