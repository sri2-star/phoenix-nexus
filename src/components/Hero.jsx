import heroBg from "../assets/images/ai image.avif";
import {
  Users,
  CalendarDays,
  Sparkles,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    number: "35",
    label: "Active Members",
    desc: "A growing AIML community contributing across multiple domains.",
    icon: Users,
    theme: "cyan",
  },
  {
    number: "8",
    label: "Events Conducted",
    desc: "Workshops, activities, and events designed to engage students.",
    icon: CalendarDays,
    theme: "purple",
  },
  {
    number: "6",
    label: "Core Domains",
    desc: "Active domains driving innovation, creativity, and the impact.      ",
    icon: Sparkles,
    theme: "cyan",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 lg:px-16 lg:pt-16"
    >
      {/* DARK BASE */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* BIG GLOWS */}
      <div className="absolute left-[-80px] top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-[-80px] top-24 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* FLOATING GLOW DOTS */}
      <div className="absolute left-[8%] top-[28%] h-3 w-3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
      <div className="absolute right-[18%] top-[18%] h-2.5 w-2.5 animate-pulse rounded-full bg-purple-300 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
      <div className="absolute left-[42%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
      <div className="absolute right-[10%] bottom-[18%] h-3 w-3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT SIDE */}
        <div>
          {/* badge */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] sm:text-sm">
            <BrainCircuit size={16} />
            Official AIML Club
          </p>

          {/* heading */}
          <h1 className="max-w-4xl text-[2.4rem] font-bold leading-[1.12] text-white sm:text-[3rem] lg:text-[3.7rem]">
            Phoenix Nexus —
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
              the official AIML club focused on innovation, collaboration, and
              growth.
            </span>
          </h1>

          {/* paragraph */}
          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-[1.05rem]">
            Phoenix Nexus is a student-driven platform for second-year AIML
            students to learn, contribute, and grow through technical projects,
            creative initiatives, workshops, events, and collaborative club
            experiences.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            From AI/ML and web development to design, content, events, and
            outreach, Phoenix creates opportunities for students to build
            skills, work in teams, and actively shape the AIML community.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#join"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#050816] shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_38px_rgba(34,211,238,0.55)]"
            >
              Apply for Recruitment
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              Explore Phoenix
            </a>
          </div>

          {/* STATS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;
              const isPurple = item.theme === "purple";

              return (
                <div
                  key={item.label}
                  className={`group relative overflow-hidden rounded-[24px] border p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:scale-[1.03] ${
                    isPurple
                      ? "border-purple-400/30 bg-purple-500/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.22)]"
                      : "border-cyan-400/25 bg-white/5 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                  }`}
                >
                  {/* top line glow */}
                  <div
                    className={`absolute left-0 top-0 h-[2px] w-full ${
                      isPurple
                        ? "bg-gradient-to-r from-transparent via-purple-300 to-transparent"
                        : "bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                    }`}
                  />

                  {/* glow blob */}
                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-3xl ${
                      isPurple ? "bg-purple-400/20" : "bg-cyan-400/20"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start justify-between">
                      <div>
                        <p
                          className={`text-4xl font-bold ${
                            isPurple ? "text-purple-300" : "text-cyan-300"
                          }`}
                        >
                          {item.number}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">
                          {item.label}
                        </p>
                      </div>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 ${
                          isPurple
                            ? "border-purple-400/40 bg-purple-400/10 text-purple-300"
                            : "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-400">
                      {item.desc}
                    </p>

                    {/* bottom indicator */}
                    <div className="mt-5 flex items-center gap-2">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          isPurple ? "bg-purple-300" : "bg-cyan-300"
                        } shadow-[0_0_12px_currentColor]`}
                      />
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative">
          {/* OUTER GLOW */}
          <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/25 bg-white/5 p-4 backdrop-blur-2xl shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10">
              {/* background image */}
              <img
                src={heroBg}
                alt="AI futuristic background"
                className="h-[590px] w-full object-cover opacity-40"
              />

              {/* overlays */}
              <div className="absolute inset-0 bg-[#050816]/72" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/12 via-transparent to-purple-500/12" />

              {/* floating UI lines */}
              <div className="absolute left-6 top-6 h-12 w-32 rounded-full border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-md" />
              <div className="absolute right-6 top-10 h-3 w-24 rounded-full bg-purple-400/25" />
              <div className="absolute bottom-24 left-6 h-[1px] w-40 bg-cyan-300/30" />
              <div className="absolute bottom-20 left-6 h-[1px] w-28 bg-cyan-300/20" />

              {/* CONTENT */}
              <div className="absolute inset-0 z-10 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Phoenix Nexus
                </p>

                <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-[2rem]">
                  A club platform built for learning, leadership, and meaningful
                  contribution.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
                  Phoenix Nexus brings together technical exploration, creative
                  execution, event coordination, and student collaboration under
                  one AIML club ecosystem.
                </p>

                {/* mini cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-400/20 bg-[#08101f]/70 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                    <p className="text-sm text-slate-400">Recruitment</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      Open for 2nd Year AIML
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-[#08101f]/70 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-300/40">
                    <p className="text-sm text-slate-400">Focus</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      Innovation & Growth
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-[#08101f]/70 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                    <p className="text-sm text-slate-400">Domains</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      6 Active Areas
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-[#08101f]/70 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-300/40">
                    <p className="text-sm text-slate-400">Community</p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      AIML Student Network
                    </h4>
                  </div>
                </div>

                {/* vision strip */}
                <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-[#08101f]/70 to-purple-400/10 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                    Club Vision
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                    To create a student community where AIML learners can
                    explore, build, collaborate, and grow through meaningful
                    club experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;