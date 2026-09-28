import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f5f3ed] px-6 py-10 text-black lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="border-y-2 border-black py-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <h2 className="font-serif text-5xl font-black tracking-[-0.05em]">
                IRFAN
              </h2>

              <p className="mt-2 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Front-End Web Developer
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-5 font-sans text-[9px] font-bold uppercase tracking-widest text-black/50">
                {["Home", "About", "My Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-amber-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex justify-end gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-600"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-amber-600"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-5 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-black/30 md:flex-row">
          <span>© {new Date().getFullYear()} Muhamad Irfan</span>

          <span>Designed & Developed with React.js</span>

          <span>Indonesia</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
