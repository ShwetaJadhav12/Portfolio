import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoAnimate, setLogoAnimate] = useState(false);

  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "coding",
    "experience",
    "contact",
  ];

  /* ================= SCROLL BACKGROUND ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SCROLL SPY ================= */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ================= LOGO CLICK ================= */
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLogoAnimate(true);
    setTimeout(() => setLogoAnimate(false), 700);
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 px-6 py-4
        transition-all duration-500
        ${
          scrolled
            ? "bg-[#0e0e0e]/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* ================= LOGO (UPDATED ONLY HERE) ================= */}
        <button
          onClick={handleLogoClick}
          className={`
            flex items-center gap-1
            font-mono font-bold text-2xl
            transition-all duration-500
            ${logoAnimate ? "scale-110" : "hover:scale-105"}
          `}
        >
          {/* < */}
          <span
            className={`
              transition-all duration-500
              ${
                logoAnimate
                  ? "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,1)]"
                  : "text-purple-400/80"
              }
            `}
          >
            &lt;
          </span>

          {/* Shweta */}
          <span
            className={`
              transition-all duration-500
              ${logoAnimate ? "text-purple-400" : "text-white"}
            `}
          >
            Shweta
          </span>

          {/* /> */}
          <span
            className={`
              transition-all duration-500
              ${
                logoAnimate
                  ? "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,1)]"
                  : "text-purple-400/80"
              }
            `}
          >
            /&gt;
          </span>
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => {
            const isActive = activeSection === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                className={`
                  relative group capitalize transition duration-300
                  ${
                    isActive
                      ? "text-purple-400"
                      : "text-white/80 hover:text-purple-400"
                  }
                `}
              >
                {item}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px]
                    bg-purple-400
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "w-full shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                        : "w-0"
                    }
                    group-hover:w-full
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* ================= HAMBURGER ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden p-2
            border border-purple-400/40
            rounded-lg
            text-white text-xl
            transition
            hover:scale-110
            hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          overflow-hidden transition-all duration-500
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-[#0e0e0e]/80 backdrop-blur-xl
          border-b border-white/10
        `}
      >
        <div className="flex flex-col px-6 py-6 space-y-6 text-white/90">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`capitalize transition ${
                activeSection === item
                  ? "text-purple-400"
                  : "hover:text-purple-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
