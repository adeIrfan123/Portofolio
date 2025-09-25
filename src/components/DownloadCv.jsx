function DownloadCV() {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start z-20 relative">
      <a
        href="/CV_Muhamad_Irfan.pdf"
        download="CV_Muhamad_Irfan.pdf"
        className="px-5 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 bg-amber-400 text-black rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-amber-500 transition"
      >
        Download CV
      </a>
    </div>
  );
}

export default DownloadCV;
