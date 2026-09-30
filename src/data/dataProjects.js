import img89Coffe from "../assets/project/89Coffe.png";
import imgWarungFilm from "../assets/project/warungFilm.png";
import imgMiniEcommer from "../assets/project/miniEcommerce.png";
import imgChatBot from "../assets/project/chtBot.png";
import imgDumelDump from "../assets/project/dumelDump.png";
import imgTheChronicle from "../assets/project/theChronicle.png";

export const dataProjects = [
  {
    title: "89Coffee shop",
    description: "Website pemesanan kopi online dengan fitur cart, checkout.",
    image: img89Coffe,
    tech: ["Laravel, Filament, TailwindCss, JavaScript, MySql"],
    source: "https://github.com/adeIrfan123/Cafe89-app",
    linkDemo: "",
  },
  {
    title: "Warung Film",
    description: "Website pencarian film",
    image: imgWarungFilm,
    tech: ["React, TailwindCss, API (TMDB)"],
    source: "https://github.com/adeIrfan123/Front-end-warung-film",
    linkDemo: "https://warung-film.netlify.app/",
  },
  {
    title: "Chat Bot",
    description: "Membuat chat bot sederhana dengan model gemini ai flash",
    image: imgChatBot,
    tech: ["Html, Css, JavaScript, NodeJs, ExpressJs"],
    source: "https://github.com/adeIrfan123/s5-chatbot.git",
    linkDemo: "",
  },
  {
    title: "StorePedia",
    description: "Website mini e-commerce dengan fitur cart, checkout",
    image: imgMiniEcommer,
    tech: ["React, TailwindCss, APi (Fake store API)"],
    source: "https://github.com/adeIrfan123/StorePedia",
    linkDemo: "https://storepedia.netlify.app/",
  },
  {
    title: "dumelDump",
    description:
      "Web diary digital pribadi yang memungkinkan pengguna menulis, menyimpan dan mengelola catatan harian secara privat dengan fitur enkripsi data untuk menjaga kerahasiaan isi diary.",
    image: imgDumelDump,
    tech: ["NextJs, TailwindCss, MySql, encryption"],
    source: "https://github.com/adeIrfan123/dumel-dump",
    linkDemo: "https://dumel-dump.vercel.app/",
  },
  {
    title: "The Chronicle",
    description:
      "Website SPA berita digital dengan tampilan bergaya koran modern yang menyajikan berita secara terstruktur berdasarkan kategori, lengkap dengan headline, artikel, dan informasi terkini melalui integrasi News API.",
    image: imgTheChronicle,
    tech: ["NextJs, TailwindCss, API(Nytimes API)"],
    source: "https://github.com/adeIrfan123/the-chronicle",
    linkDemo: "https://the-chronicle-lime.vercel.app/",
  },
];
