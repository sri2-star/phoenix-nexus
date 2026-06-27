import { CalendarDays, Sparkles, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";

const events = [
  {
    title: "Workshops & Learning Sessions",
    desc: "Hands-on sessions, guided learning, and technical discussions that help students build practical understanding.",
    icon: Sparkles,
    color: "cyan",
  },
  {
    title: "Club Events & Activities",
    desc: "Interactive club programs, student engagement activities, and coordinated experiences that strengthen the AIML community.",
    icon: CalendarDays,
    color: "purple",
  },
  {
    title: "Collaborative Initiatives",
    desc: "Team-based efforts where members contribute ideas, planning, execution, and creative support across club initiatives.",
    icon: Users,
    color: "cyan",
  },
];

const Events = () => {
  return (
    <section
      id="events"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          badge="Events & Activities"
          title="Workshops, sessions, and initiatives that make"
          highlight="Phoenix an active student community."
          align="center"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-slate-400 sm:text-lg">
          Phoenix Nexus is not limited to one kind of activity. The club is
          designed to keep students engaged through learning experiences,
          collaborative programs, and community-building events.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon;
            const isPurple = event.color === "purple";

            return (
              <div
                key={event.title}
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

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {event.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-[#08101f]/80 to-purple-400/10 p-6 backdrop-blur-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Event Culture
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
            Phoenix events are built to combine learning, execution, teamwork,
            and student participation. Whether it is a workshop, technical
            session, or club initiative, the goal is to create meaningful
            experiences that help AIML students stay involved and grow together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;