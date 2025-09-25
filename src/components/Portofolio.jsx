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
      className="relative bg-gradient-to-br from-[#1e1e24] via-[#23232b] to-[#2d2d35] py-20 px-6 md:px-20 min-h-screen overflow-hidden"
    >
      <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-500 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-yellow-400 opacity-20 blur-[150px] rounded-full"></div>

      <div className="text-center mb-16 relative z-10">
        <div className="flex justify-center text-5xl gap-5">
          <h2 className="text-5xl font-extrabold tracking-tight leading-[1.2] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6 pt-2">
            My Projects
          </h2>
          <span className="pt-3">🚀</span>
        </div>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Berikut beberapa hasil project dan sertifikat yang telah saya raih 🚀
        </p>
      </div>

      <div className="mb-10 flex px-14 gap-10 text-lg font-semibold justify-center">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "projects"
              ? "bg-amber-400 text-black shadow-lg"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Project
        </button>
        <button
          onClick={() => setActiveTab("certificates")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "certificates"
              ? "bg-amber-400 text-black shadow-lg"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Sertifikat
        </button>
      </div>

      {activeTab === "projects" ? (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-500"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-[260px]">
                <h3 className="text-2xl font-bold text-amber-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/10 text-amber-300 rounded-full border border-amber-300/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                    >
                      {project.source.includes("github.com") ? (
                        <FaGithub className="text-xl" />
                      ) : project.source.includes("figma.com") ? (
                        <SiFigma className="text-xl" />
                      ) : (
                        <FaLink className="text-xl" />
                      )}
                      <span>Source</span>
                    </a>
                  )}

                  {project.linkDemo && (
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-transform ${
                        project.source
                          ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:scale-105"
                          : "bg-amber-400 text-black hover:scale-105"
                      }`}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 via-yellow-500/0 to-amber-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      ) : (
        <Certificates />
      )}
    </section>
  );
}

export default Portofolio;
