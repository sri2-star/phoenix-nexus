import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const JoinUs = () => {
  return (
    <section
      id="join"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-60px] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-60px] bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionTitle
          badge="Join Phoenix"
          title="Become a part of the AIML club and"
          highlight="start contributing with Phoenix Nexus."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* LEFT PANEL */}
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-2xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                <Sparkles size={16} />
                Recruitment Open
              </div>

              <h3 className="mt-6 text-3xl font-semibold leading-tight text-white">
                Phoenix Nexus is recruiting second-year AIML students.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                If you want to explore AI/ML, web development, UI/UX, content,
                events, or outreach while working with an active AIML club,
                Phoenix Nexus is a space where you can learn, contribute, and
                grow through real club experiences.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                Fill out the recruitment form carefully, share your interests,
                and take the first step towards becoming a part of Phoenix.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://docs.google.com/forms/d/1EnAg4xAFalqJTwV9f4NvkmfCrZ8awKMwl8feFCjWpLM/edit"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(34,211,238,0.45)]"
                >
                  Apply Now
                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="https://docs.google.com/forms/d/1EnAg4xAFalqJTwV9f4NvkmfCrZ8awKMwl8feFCjWpLM/edit"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  Open Form
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT INFO PANEL */}
          <div className="grid gap-5">
            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Eligibility
              </p>
              <h4 className="mt-3 text-2xl font-semibold text-white">
                Only 2nd Year AIML Students
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Recruitment is currently intended for second-year AIML students
                who want to actively participate in Phoenix Nexus.
              </p>
            </div>

            <div className="rounded-[28px] border border-purple-400/20 bg-purple-400/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]">
              <p className="text-sm uppercase tracking-[0.24em] text-purple-300/80">
                Contribution Areas
              </p>
              <h4 className="mt-3 text-2xl font-semibold text-white">
                6 Core Domains
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Students can contribute through AI/ML, Web Development, UI/UX,
                Content, Events, and PR / Outreach.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#08101f]/80 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
                Note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Fill in the form carefully with accurate details. This
                recruitment form is part of the selection process, so your
                responses should reflect your genuine interest and enthusiasm to
                join Phoenix Nexus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;