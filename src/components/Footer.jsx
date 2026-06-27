import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-14 md:px-10 lg:px-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl rounded-[30px] border border-cyan-400/15 bg-[#08101f]/80 p-8 backdrop-blur-2xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <span className="text-2xl font-bold">P</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">Phoenix Nexus</h3>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  AIML Club
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Phoenix Nexus is the official AIML club platform built to help
              students learn, collaborate, contribute, and grow through
              technical exploration, creative work, events, and community
              initiatives.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">
                Community
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built for second-year AIML students to learn, work together, and
                contribute through meaningful club experiences.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5">
              <div className="flex items-center gap-2 text-purple-300">
                <Sparkles size={18} />
                <p className="text-sm uppercase tracking-[0.22em]">
                  Phoenix Vision
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                To create a future-ready AIML student ecosystem powered by
                innovation, collaboration, and growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-500">
          © 2026 Phoenix Nexus • AIML Club • Built with innovation, teamwork,
          and creativity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;