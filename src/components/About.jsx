import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function About() {
  const [flipped, setFlipped] = useState(false);

  const techStacks = [
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, name: "React.js", color: "text-cyan-400" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
    { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
  ];

  return (
    <section
      id="about"
      className="relative mt-40 md:mt-0 bg-gradient-to-br from-[#1e1e24] via-[#23232b] to-[#2d2d35] min-h-screen px-6 md:px-20 py-20 text-white flex flex-col items-center overflow-hidden"
    >
      <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-500 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-yellow-400 opacity-20 blur-[150px] rounded-full"></div>

      <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-20 text-center">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl w-full z-10">
        <div className="flex justify-center items-center">
          <div
            className="relative w-full h-[450px] cursor-pointer perspective"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`flip-card ${
                flipped ? "flipped" : ""
              } relative w-full h-full`}
            >
              <div className="flip-card-side absolute w-full h-140 md:h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-center">
                <h3 className="text-4xl font-extrabold text-amber-300">
                  Who Am I?
                </h3>
                <p className="mt-4 text-gray-400 text-lg">
                  (Klik untuk melihat profil saya 👆)
                </p>
              </div>

              <div className="flip-card-side flip-card-back absolute w-full h-140 md:h-full backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold mb-6 text-amber-300 text-center">
                  About Me ✨
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  Hai! Saya{" "}
                  <span className="text-amber-300 font-semibold">
                    Muhamad Irfan
                  </span>
                  , seorang{" "}
                  <span className="font-semibold text-white">
                    Front-End Web Developer
                  </span>{" "}
                  yang berfokus pada pengembangan antarmuka modern menggunakan{" "}
                  <span className="text-amber-400 font-semibold">React.js</span>
                  .
                  <br />
                  <br />
                  Saya memiliki semangat besar untuk menciptakan pengalaman
                  pengguna yang{" "}
                  <span className="text-amber-300">interaktif</span>,{" "}
                  <span className="text-amber-300">responsif</span>, dan{" "}
                  <span className="text-amber-300">estetis</span>. Saya selalu
                  bersemangat untuk belajar dan berkembang dalam industri
                  teknologi serta siap berkontribusi menciptakan{" "}
                  <span className="text-amber-400 font-semibold">
                    solusi digital inovatif
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-18 md:mt-0 justify-center">
          <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent text-center lg:text-left">
            Tech Stack I Use
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStacks.map((stack, i) => (
              <div
                key={i}
                className="relative group bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 hover:shadow-amber-300/30 transition-all duration-300 flex flex-col items-center backdrop-blur-lg"
              >
                <div
                  className={`text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 ${stack.color}`}
                >
                  {stack.icon}
                </div>
                <p className="text-lg font-semibold group-hover:text-amber-300 transition-colors">
                  {stack.name}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-300/0 to-yellow-400/0 opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
