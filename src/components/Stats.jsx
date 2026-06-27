import { Users, CalendarDays, FolderKanban, Layers3 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const stats = [
  {
    number: "35",
    label: "Active Members",
    icon: Users,
    color: "cyan",
  },
  {
    number: "8",
    label: "Events Conducted",
    icon: CalendarDays,
    color: "purple",
  },
  {
    number: "4",
    label: "Projects",
    icon: FolderKanban,
    color: "cyan",
  },
  {
    number: "5",
    label: "Core Teams",
    icon: Layers3,
    color: "purple",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          badge="Phoenix In Numbers"
          title="A quick snapshot of the scale and activity of"
          highlight="Phoenix Nexus."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            const isPurple = item.color === "purple";

            return (
              <div
                key={item.label}
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

                  <p
                    className={`mt-6 text-4xl font-bold ${
                      isPurple ? "text-purple-300" : "text-cyan-300"
                    }`}
                  >
                    {item.number}
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;