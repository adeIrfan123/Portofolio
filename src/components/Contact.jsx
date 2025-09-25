import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaBuilding,
  FaPhone,
} from "react-icons/fa";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(emailJsServiceId, emailJsTemplateId, formData, emailJsPublicKey)
      .then(
        () => {
          setStatus("✅ Pesan berhasil dikirim!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("❌ Gagal mengirim pesan, coba lagi.");
          console.error(error);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6"
    >
      <div className="flex text-5xl gap-5">
        <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-10 text-center">
          Let's chat more
        </h2>
        <span>✉️</span>
      </div>

      <form
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 border border-gray-100"
      >
        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            <FaUser className="inline mr-2 text-amber-500" /> Nama
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Masukkan nama Anda"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            <FaEnvelope className="inline mr-2 text-amber-500" /> Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Alamat email Anda"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            <FaBuilding className="inline mr-2 text-amber-500" /> Perusahaan
          </label>
          <input
            type="text"
            name="company"
            placeholder="Nama perusahaan (opsional)"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            <FaPhone className="inline mr-2 text-amber-500" /> Nomor Telepon
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Nomor telepon (opsional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            <FaCommentDots className="inline mr-2 text-amber-500" /> Pesan
          </label>
          <textarea
            name="message"
            required
            placeholder="Tulis pesan Anda..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Kirim Pesan 🚀
        </button>

        {status && (
          <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
