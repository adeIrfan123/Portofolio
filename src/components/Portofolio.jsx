import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { dataProjects as projects } from "../data/dataProjects";
import Certificates from "./Certificates";
import { SiFigma } from "react-icons/si";

function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="my-projects"
      className="bg-[#f5f3ed] px-6 py-24 text-black lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between border-b-4 border-black pb-5">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-black/50">
              Section 02
            </span>

            <h2 className="mt-2 font-serif text-6xl font-black tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              Projects
            </h2>
          </div>

          <span className="hidden font-serif text-5xl italic text-black/20 md:block">
            02
          </span>
        </div>

        <div className="flex items-center justify-between border-b border-black/20 py-5">
          <p className="font-serif text-lg text-black/60">
            Selected works & digital experiments
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest ${
                activeTab === "projects"
                  ? "bg-black text-white"
                  : "border border-black/20"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest ${
                activeTab === "certificates"
                  ? "bg-black text-white"
                  : "border border-black/20"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {activeTab === "projects" ? (
          <div className="grid gap-0 border-l border-black/20 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group border-b border-r border-black/20 p-5 transition-colors hover:bg-white"
              >
                <div className="overflow-hidden border border-black/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <div className="mt-5 flex justify-between font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                  <span>Project {String(index + 1).padStart(2, "0")}</span>

                  <span>2026</span>
                </div>

                <h3 className="mt-3 font-serif text-3xl font-black leading-tight">
                  {project.title}
                </h3>

                <p className="mt-3 font-serif text-sm leading-relaxed text-black/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="border border-black/20 px-2 py-1 font-sans text-[8px] font-bold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                  {project.source ? (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[10px] font-bold uppercase tracking-widest hover:text-amber-600"
                    >
                      View Source →
                    </a>
                  ) : (
                    <span />
                  )}

                  {project.linkDemo && (
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-300 px-3 py-2 font-sans text-[9px] font-black uppercase tracking-widest text-black hover:bg-black hover:text-white"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-10">
            <Certificates />
          </div>
        )}
      </div>
    </section>
  );
}
export default Portofolio;
