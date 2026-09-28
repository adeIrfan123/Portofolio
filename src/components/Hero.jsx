import React from "react";
import irfanJpg from "../assets/MuhamadIrfan.png";
import DownloadCV from "./DownloadCv";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#111111] px-6 pb-20 pt-28 text-white lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col justify-between gap-3 border-b border-white/20 pb-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 sm:flex-row">
          <span>Portfolio — Personal Edition</span>

          <span>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="border-b-4 border-white py-5 text-center">
          <h1 className="font-serif text-6xl font-black tracking-[-0.07em] sm:text-8xl lg:text-[11rem] lg:leading-[0.8]">
            IRFAN
          </h1>
        </div>

        <div className="grid border-b border-white/30 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-white/20 lg:border-r lg:pr-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber-400" />

              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Front-End Developer
              </span>
            </div>

            <h2 className="max-w-5xl font-serif text-5xl font-black leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
              Designing the
              <br />
              <span className="text-amber-300">digital experience.</span>
            </h2>

            <p className="mt-8 max-w-2xl font-serif text-lg leading-relaxed text-white/60 lg:text-xl">
              Saya membangun antarmuka web yang interaktif, responsif, dan
              modern menggunakan teknologi web masa kini.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border border-white/30 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest">
                React.js
              </span>

              <span className="border border-white/30 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest">
                Next.js
              </span>

              <span className="border border-white/30 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest">
                UI/UX
              </span>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:pl-12">
            <div className="relative">
              <img
                src={irfanJpg}
                alt="Muhamad Irfan"
                className="mx-auto aspect-[4/6] w-full max-w-md object-cover "
              />

              <div className="absolute bottom-4 left-4 bg-amber-300 px-4 py-2 text-black">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest">
                  Profile / 2026
                </span>
              </div>
            </div>

            <p className="mt-4 font-serif text-sm italic text-white/40">
              Muhamad Irfan — Front-End Web Developer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 md:grid-cols-4">
          <div>
            <span className="block text-white/20">Focus</span>
            Web Development
          </div>

          <div>
            <span className="block text-white/20">Specialty</span>
            Front-End
          </div>

          <div>
            <span className="block text-white/20">Based</span>
            Indonesia
          </div>

          <div>
            <span className="block text-white/20">Available</span>
            Open to Work
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
