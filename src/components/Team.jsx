import { GraduationCap, Crown, Shield, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const teamMembers = [
  {
    role: "Faculty Coordinator",
    name: "KANNAN",
    icon: GraduationCap,
    color: "cyan",
  },
  {
    role: "President",
    name: "RADHA",
    icon: Crown,
    color: "purple",
  },
  {
    role: "Vice President",
    name: "SRINITHI",
    icon: Crown,
    color: "cyan",
  },
  {
    role: "Technical Lead",
    name: "DEEPIKA",
    icon: Shield,
    color: "purple",
  },
  {
    role: "Design Lead",
    name: "KAVIYA",
    icon: Sparkles,
    color: "cyan",
  },
  {
    role: "Event Lead",
    name: "MONISH",
    icon: Shield,
    color: "purple",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-50px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-50px] bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          badge="Leadership Team"
          title="Meet the people guiding"
          highlight="Phoenix Nexus forward."
          align="center"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-slate-400 sm:text-lg">
          Phoenix Nexus is led by a team that supports learning, collaboration,
          execution, and student growth across the club ecosystem.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => {
            const Icon = member.icon;
            const isPurple = member.color === "purple";

            return (
              <div
                key={member.role}
                className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-3 ${
                  isPurple
                    ? "border-purple-400/25 bg-purple-500/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
                    : "border-cyan-400/20 bg-white/5 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]"
                }`}
              >
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl ${
                    isPurple ? "bg-purple-400/15" : "bg-cyan-400/15"
                  }`}
                />

                <div className="relative z-10">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300 group-hover:scale-110 ${
                      isPurple
                        ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                        : "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <p className="mt-6 text-sm uppercase tracking-[0.24em] text-slate-400">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {member.name}
                  </h3>

                  <div className="mt-6 flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        isPurple ? "bg-purple-300" : "bg-cyan-300"
                      } shadow-[0_0_14px_currentColor]`}
                    />
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;