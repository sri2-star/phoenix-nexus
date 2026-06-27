import { useEffect, useRef, useState } from "react";

const SectionTitle = ({ badge, title, highlight, align = "left" }) => {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={titleRef}
      className={`relative z-10 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <p
          className={`inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-8 opacity-0 blur-sm"
          }`}
        >
          {badge}
        </p>
      )}

      <div
        className={`absolute ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
        } top-10 h-24 w-64 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-1000 ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      />

      <h2
        className={`relative mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl transition-all duration-1000 ${
          visible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-10 opacity-0 blur-sm"
        } ${align === "center" ? "mx-auto" : ""}`}
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      <div
        className={`mt-5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 transition-all duration-1000 ${
          visible ? "w-32 opacity-100" : "w-0 opacity-0"
        } ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
};

export default SectionTitle;