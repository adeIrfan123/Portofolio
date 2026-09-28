import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Linkedin as LinkedinIcon,
  GitHub as GitHubIcon,
  Menu,
  X,
} from "react-feather";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = ["home", "about", "my projects", "contact"];

  const handleActive = () => {
    let current = "home";

    sections.forEach((sec) => {
      const section = document.getElementById(sec.replace(" ", "-"));

      if (section) {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
          current = sec.toLowerCase().replace(" ", "-");
        }
      }
    });

    setActive(current);
  };

  const handleScroll = () => {
    setScroll(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActive);
    };
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scroll ? "bg-[#f5f3ed]/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <div
          className={`flex items-center justify-between border-b py-4 transition-colors ${
            scroll ? "border-black/20" : "border-white/20"
          }`}
        >
          <button
            onClick={() => handleClick("home")}
            className={`font-serif text-3xl font-black tracking-[-0.05em] ${
              scroll ? "text-black" : "text-white"
            }`}
          >
            IRFAN
          </button>

          <nav className="hidden md:block">
            <ul
              className={`flex items-center gap-7 text-xs font-bold uppercase tracking-[0.16em] ${
                scroll ? "text-black/60" : "text-white/70"
              }`}
            >
              {sections.map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                const isActive = active === id;

                return (
                  <li key={item}>
                    <button
                      onClick={() => handleClick(id)}
                      className={`relative py-2 transition-colors ${
                        isActive
                          ? scroll
                            ? "text-black"
                            : "text-white"
                          : "hover:text-amber-500"
                      }`}
                    >
                      {item}

                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-amber-400" />
                      )}
                    </button>
                  </li>
                );
              })}

              <li
                className={`mx-1 h-5 w-px ${
                  scroll ? "bg-black/20" : "bg-white/30"
                }`}
              />

              <li>
                <a
                  href="https://www.linkedin.com/in/muhamad-irfan01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-500"
                >
                  <LinkedinIcon size={19} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/adeIrfan123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-500"
                >
                  <GitHubIcon size={19} />
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${scroll ? "text-black" : "text-white"}`}
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-b border-black/20 bg-[#f5f3ed] py-6 md:hidden">
            <div className="flex flex-col">
              {sections.map((item) => {
                const id = item.toLowerCase().replace(" ", "-");

                return (
                  <button
                    key={item}
                    onClick={() => handleClick(id)}
                    className="border-b border-black/10 py-4 text-left font-serif text-xl font-bold uppercase"
                  >
                    {item}
                  </button>
                );
              })}

              <div className="flex gap-5 pt-5 text-black">
                <a
                  href="https://www.linkedin.com/in/muhamad-irfan01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={22} />
                </a>

                <a
                  href="https://github.com/adeIrfan123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
