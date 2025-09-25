import React from "react";
import { dataCertificates as certificates } from "../data/dataCertificates";

function Certificates() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg hover:scale-[1.03] transition-all duration-500"
        >
          <div className="overflow-hidden h-56">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-amber-300 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-400 mb-2">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Lihat Sertifikat
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificates;
