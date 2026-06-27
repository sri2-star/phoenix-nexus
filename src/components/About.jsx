import { BrainCircuit, Users, Rocket, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    title: "Innovation Driven",
    text: "Phoenix Nexus encourages AIML students to explore ideas, build projects, and work on practical technical initiatives beyond the classroom.",
    icon: BrainCircuit,
    color: "cyan",
  },
  {
    title: "Collaborative Culture",
    text: "From technical domains to events and outreach, members learn to work in teams, share responsibilities, and grow together as a student community.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Growth & Leadership",
    text: "The club creates opportunities for students to lead, organize, contribute, and strengthen both technical and communication skills.",
    icon: Rocket,
    color: "cyan",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-80px] bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT VISUAL */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-cyan-400/15 via-transparent to-purple-400/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-2xl">
            <div className="rounded-3xl border border-cyan-400/20 bg-[#08101f]/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                About Phoenix Nexus
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                A student-powered AIML club built for learning, creativity,
                teamwork, and meaningful contribution.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Phoenix Nexus is more than a club — it is a collaborative space
                where second-year AIML students can explore technology, build
                skills, organize initiatives, and contribute to a stronger AIML
                student community.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                  Club Identity
                </p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Official AIML Club
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  A platform that connects AIML students through learning,
                  projects, events, and creative collaboration.
                </p>
              </div>

              <div className="rounded-3xl border border-purple-400/20 bg-purple-400/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]">
                <p className="text-sm uppercase tracking-[0.22em] text-purple-300/80">
                  Recruitment
                </p>
                <h4 className="mt-3 text-xl font-semibold text-white">
                  Open for 2nd Year AIML
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Phoenix gives students a chance to contribute across technical,
                  design, event, and outreach domains.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-[#08101f]/80 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <Sparkles size={22} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                    Club Mission
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                    To create a future-ready student ecosystem where AIML
                    learners can build technical depth, develop leadership,
                    collaborate with peers, and make meaningful contributions
                    through club activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <SectionTitle
            badge="Why Phoenix Nexus"
            title="A club ecosystem designed to help AIML students"
            highlight="learn, build, collaborate, and grow."
          />

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Phoenix Nexus brings together technical exploration, creativity,
            event execution, outreach, and teamwork under one AIML club
            platform. It is built to help students go beyond academics and gain
            real experience through contribution and collaboration.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Whether it is AI/ML, web development, UI/UX, content creation,
            events, or public relations, Phoenix gives students a space to take
            initiative, improve skills, and become part of a strong student
            network.
          </p>

          <div className="mt-10 grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              const isPurple = item.color === "purple";

              return (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[24px] border p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${
                    isPurple
                      ? "border-purple-400/25 bg-purple-500/10 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                      : "border-cyan-400/20 bg-white/5 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
                  }`}
                >
                  <div
                    className={`absolute -right-6 -top-6 h-24 w-24 rounded-full blur-3xl ${
                      isPurple ? "bg-purple-400/15" : "bg-cyan-400/15"
                    }`}
                  />

                  <div className="relative z-10 flex gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition duration-300 group-hover:scale-110 ${
                        isPurple
                          ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                          : "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;