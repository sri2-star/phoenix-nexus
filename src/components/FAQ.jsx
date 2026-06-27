import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";

const faqData = [
  {
    question: "Who can apply for Phoenix Nexus recruitment?",
    answer:
      "Currently, recruitment is open only for second-year AIML students who are interested in contributing to Phoenix Nexus.",
  },
  {
    question: "What domains can I join in Phoenix Nexus?",
    answer:
      "You can contribute in AI/ML, Web Development, UI/UX, Content, Events, and PR / Outreach based on your interests and strengths.",
  },
  {
    question: "Is technical knowledge mandatory to join?",
    answer:
      "No. Interest, willingness to learn, consistency, and contribution mindset matter a lot. Different domains require different skill sets, and Phoenix is a place to learn as well.",
  },
  {
    question: "What is the recruitment process?",
    answer:
      "Students need to fill out the recruitment form carefully. Based on the responses and the club’s process, further interaction or selection steps may follow.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Everything you may want to know before"
          highlight="joining Phoenix Nexus."
          align="center"
        />

        <div className="mt-12 space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-8 text-slate-400 sm:text-base">
                      {item.answer}
                    </p>
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

export default FAQ;