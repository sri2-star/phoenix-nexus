const benefits = [
  {
    title: "Skill Development",
    desc: "Gain practical exposure through workshops, projects, events, and collaborative tasks that help you grow beyond academics.",
  },
  {
    title: "Real Team Experience",
    desc: "Work with peers in a structured club environment where you contribute to actual tasks, ideas, planning, and execution.",
  },
  {
    title: "Creative & Technical Exposure",
    desc: "Whether you love coding, AI, design, content, or event planning, Phoenix Nexus gives you space to explore and improve.",
  },
  {
    title: "Leadership Opportunities",
    desc: "Take initiative, own responsibilities, coordinate with teams, and build confidence through meaningful club roles.",
  },
];

const WhyJoin = () => {
  return (
    <section className="relative px-6 py-20 md:px-10 lg:px-16">
      {/* background glows */}
      <div className="absolute left-12 top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            Why Join Phoenix
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Join a club that helps you learn, create, lead, and grow with purpose.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Phoenix Nexus is designed to give students more than a title or
            membership — it offers a space to actively contribute, explore new
            domains, gain experience, and become part of a team that builds real
            value for the department.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Whether you want to improve technical skills, work on creative
            tasks, organize events, or simply become more involved in the AIML
            community, Phoenix gives you a platform to do it with guidance and
            collaboration.
          </p>

          {/* quote box */}
          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-white/5 to-purple-400/10 p-6 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              Phoenix Mindset
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Learn deeply. Build confidently. Lead meaningfully.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              The goal is not just participation — it is transformation through
              experience, collaboration, and ownership.
            </p>
          </div>
        </div>

        {/* RIGHT BENEFIT CARDS */}
        <div className="relative z-10 grid gap-5 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 font-semibold text-cyan-300">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {item.desc}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-cyan-300 to-purple-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;