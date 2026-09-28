import React, { useState } from "react";
import emailjs from "emailjs-com";

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(emailJsServiceId, emailJsTemplateId, formData, emailJsPublicKey)
      .then(
        () => {
          setStatus("Pesan berhasil dikirim!");

          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Gagal mengirim pesan, coba lagi.");
          console.error(error);
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#111111] px-6 py-24 text-white lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="flex items-end justify-between border-b-4 border-white pb-5">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Section 03
            </span>

            <h2 className="mt-2 font-serif text-6xl font-black tracking-[-0.05em] sm:text-7xl lg:text-9xl">
              Contact
            </h2>
          </div>

          <span className="hidden font-serif text-5xl italic text-white/10 md:block">
            03
          </span>
        </div>

        <div className="grid gap-14 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Contact Desk
            </span>

            <h3 className="mt-6 font-serif text-5xl font-black leading-[0.95] lg:text-7xl">
              Let's create something
              <span className="text-amber-300"> meaningful.</span>
            </h3>

            <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-white/50">
              Punya project, ide, atau sekadar ingin berdiskusi? Kirimkan pesan
              melalui form di samping.
            </p>

            <div className="mt-10 border-t border-white/20 pt-6">
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">
                Status
              </span>

              <p className="mt-2 font-serif text-xl">Open for opportunities</p>
            </div>
          </div>

          <form onSubmit={sendEmail} className="border-t border-white/20">
            {[
              {
                name: "name",
                label: "Nama",
                type: "text",
                placeholder: "Nama Anda",
                required: true,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "email@example.com",
                required: true,
              },
              {
                name: "company",
                label: "Perusahaan",
                type: "text",
                placeholder: "Nama perusahaan",
              },
              {
                name: "phone",
                label: "Nomor Telepon",
                type: "tel",
                placeholder: "+62...",
              },
            ].map((field) => (
              <div key={field.name} className="border-b border-white/20 py-5">
                <label className="mb-2 block font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {field.label}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full bg-transparent font-serif text-xl text-white outline-none placeholder:text-white/20"
                />
              </div>
            ))}

            <div className="border-b border-white/20 py-5">
              <label className="mb-2 block font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                Pesan
              </label>

              <textarea
                name="message"
                required
                placeholder="Tulis pesan Anda..."
                value={formData.message}
                onChange={handleChange}
                className="h-32 w-full resize-none bg-transparent font-serif text-xl text-white outline-none placeholder:text-white/20"
              />
            </div>

            <div className="flex items-center justify-between pt-6">
              <button
                type="submit"
                className="bg-amber-300 px-6 py-3 font-sans text-xs font-black uppercase tracking-widest text-black transition-colors hover:bg-white"
              >
                Send Message →
              </button>

              {status && (
                <p className="font-serif text-sm text-white/60">{status}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
