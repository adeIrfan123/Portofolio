import { dataCertificates as certificates } from "../data/dataCertificates";

function Certificates() {
  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-l border-black/20 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map((cert, index) => (
        <article
          key={index}
          className="group border-b border-r border-black/20 bg-[#f5f3ed] p-5 transition-colors duration-300 hover:bg-white"
        >
          <div className="overflow-hidden border border-black/10">
            <img
              src={cert.image}
              alt={cert.title}
              className="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </div>

          <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-3">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              Certificate {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              {cert.date}
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-black leading-tight text-black">
            {cert.title}
          </h3>

          <p className="mt-2 font-serif text-sm italic text-black/50">
            Issued by {cert.issuer}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-black/30">
              Professional Record
            </span>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] font-black uppercase tracking-widest text-black underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-600"
            >
              View Certificate →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Certificates;
