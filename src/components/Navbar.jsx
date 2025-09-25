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
        if (window.scrollY >= sectionTop)
          current = sec.toLowerCase().replace(" ", "-");
      }
    });
    setActive(current);
  };

  const handleScroll = () => {
    setScroll(window.scrollY > 0);
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
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 py-4 flex items-center justify-between px-10 lg:px-35 transition-shadow duration-300 ${
        scroll ? "shadow-lg bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <nav className="text-2xl font-semibold text-white cursor-pointer">
          Irfan
        </nav>
      </div>

      <ul className="hidden md:flex items-center text-lg gap-8 text-gray-400">
        {sections.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleClick(item.toLowerCase().replace(" ", "-"))}
              className={`hover:text-amber-300 ${
                active === item.toLowerCase().replace(" ", "-")
                  ? "text-amber-300 font-semibold"
                  : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={24} className="text-white" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={24} className="text-white" />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center py-6 gap-6 md:hidden">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item.toLowerCase().replace(" ", "-"))}
              className={`text-lg hover:text-amber-300 ${
                active === item.toLowerCase().replace(" ", "-")
                  ? "text-amber-300 font-semibold"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.linkedin.com/in/muhamad-irfan01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com/adeIrfan123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
