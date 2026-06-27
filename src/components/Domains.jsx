import {
  BrainCircuit,
  Globe,
  Palette,
  PenTool,
  CalendarDays,
  Megaphone,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const domains = [
  {
    title: "AI / ML",
    desc: "Explore artificial intelligence, machine learning concepts, mini-projects, and practical technical learning experiences.",
    icon: BrainCircuit,
    color: "cyan",
  },
  {
    title: "Web Development",
    desc: "Build websites, club pages, and digital products while learning frontend and web development fundamentals.",
    icon: Globe,
    color: "purple",
  },
  {
    title: "UI / UX",
    desc: "Design user interfaces, improve user experience, and create visually appealing digital interactions for club projects.",
    icon: Palette,
    color: "cyan",
  },
  {
    title: "Content",
    desc: "Create announcements, promotional content, written communication, and branding material for club initiatives.",
    icon: PenTool,
    color: "purple",
  },
  {
    title: "Events",
    desc: "Plan, organize, coordinate, and execute workshops, activities, and student engagement programs.",
    icon: CalendarDays,
    color: "cyan",
  },
  {
    title: "PR / Outreach",
    desc: "Handle communication, outreach, visibility, and collaborations to strengthen the club’s external presence.",
    icon: Megaphone,
    color: "purple",
  },
];

const Domains = () => {
  return (
    <section
      id="domains"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          badge="Club Domains"
          title="Explore the core areas where Phoenix Nexus"
          highlight="creates opportunities to learn and contribute."
          align="center"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-slate-400 sm:text-lg">
          Phoenix Nexus is structured around multiple domains so students can
          contribute based on their interests, strengths, and learning goals.
          Each domain plays an important role in shaping the club ecosystem.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isPurple = domain.color === "purple";

            return (
              <div
                key={domain.title}
                className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:scale-[1.01] ${
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
                    {domain.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {domain.desc}
                  </p>

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

export default Domains;