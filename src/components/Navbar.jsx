import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Domains", href: "#domains" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Join", href: "#join" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let currentSection = "home";

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 md:px-6 lg:px-8 ${
          scrolled
            ? "border-cyan-400/20 bg-[#050816]/75 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-cyan-400/15 bg-[#050816]/55 backdrop-blur-xl"
        }`}
      >
        {/* LEFT LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            <span className="text-2xl font-bold text-cyan-300">P</span>
          </div>

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-white sm:text-2xl">
              Phoenix Nexus
            </h1>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300 sm:text-sm">
              AIML CLUB
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}

                {/* active underline glow */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300 ${
                    isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* desktop button */}
          <a
            href="#join"
            className="hidden rounded-full border border-cyan-400/35 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-cyan-400 hover:text-[#050816] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] lg:inline-flex"
          >
            Join Phoenix
          </a>

          {/* mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 text-cyan-300 backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#050816]/90 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-[#050816] shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]"
          >
            Join Phoenix
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;