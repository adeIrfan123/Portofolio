import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white text-2xl font-bold">Irfan</div>

        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-gray-300 text-lg">
          {["Home", "About", "My Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-amber-300 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          ></a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Muhamad Irfan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
