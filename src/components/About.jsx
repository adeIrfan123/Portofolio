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
    { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-500" },
    { icon: <FaReact />, name: "React.js", color: "text-cyan-500" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-500" },
    { icon: <FaLaravel />, name: "Laravel", color: "text-red-500" },
  ];

  return (
    <section id="about" className="bg-[#f5f3ed] px-6 py-24 text-black lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between border-b-4 border-black pb-5">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-black/50">
              Section 01
            </span>

            <h2 className="mt-2 font-serif text-6xl font-black tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              About Me
            </h2>
          </div>

          <span className="hidden font-serif text-5xl italic text-black/20 md:block">
            01
          </span>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-black lg:border-r lg:pr-12">
            <div
              className="group relative aspect-[4/3] cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center border border-black/20 bg-black text-white [backface-visibility:hidden]">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-amber-300">
                    Personal Profile
                  </span>

                  <h3 className="mt-4 font-serif text-5xl font-black">
                    Who Am I?
                  </h3>

                  <p className="mt-4 font-sans text-xs text-white/50">
                    Click to read
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center border border-black/20 bg-[#111111] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-amber-300">
                      About Me
                    </span>

                    <p className="mt-5 font-serif text-lg leading-relaxed text-white/80">
                      Hai! Saya{" "}
                      <span className="text-amber-300">Muhamad Irfan</span>,
                      seorang Front-End Web Developer yang berfokus pada
                      pembuatan antarmuka modern menggunakan React.js dan
                      teknologi web modern.
                    </p>

                    <p className="mt-5 font-sans text-[10px] uppercase tracking-widest text-white/30">
                      Click to return
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="max-w-4xl font-serif text-3xl font-bold leading-tight lg:text-5xl">
              “Saya percaya sebuah website bukan hanya tentang bagaimana
              tampilannya, tetapi bagaimana seseorang merasakan dan
              menggunakannya.”
            </p>

            <div className="mt-10 grid gap-8 border-t border-black/20 pt-8 md:grid-cols-2">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Philosophy
                </span>

                <p className="mt-3 font-serif leading-relaxed text-black/70">
                  Membuat interface yang sederhana, jelas, responsif, dan tetap
                  memiliki karakter visual yang kuat.
                </p>
              </div>

              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Current Focus
                </span>

                <p className="mt-3 font-serif leading-relaxed text-black/70">
                  Front-End development, React ecosystem, UI/UX, dan modern web
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black pt-8">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-serif text-3xl font-black">Technology</h3>

            <span className="font-sans text-[10px] uppercase tracking-widest text-black/40">
              Tools I use
            </span>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-black/20 sm:grid-cols-3 lg:grid-cols-6">
            {techStacks.map((stack, i) => (
              <div
                key={i}
                className="border-b border-r border-black/20 p-6 transition-colors hover:bg-black hover:text-white"
              >
                <div className={`mb-5 text-4xl ${stack.color}`}>
                  {stack.icon}
                </div>

                <p className="font-sans text-xs font-bold uppercase tracking-widest">
                  {stack.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
