import React from "react";
import irfanJpg from "../assets/MuhamadIrfan.png";
import bgImage from "../assets/bg.png";
import DownloadCV from "./DownloadCv";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col lg:flex-row justify-between mb-30 px-6 sm:px-10 lg:px-35 pt-20 relative h-[650px] sm:h-[750px] lg:h-[920px]"
    >
      <div className="flex flex-col mt-6 sm:mt-10 lg:mt-35">
        <span className="text-gray-300 text-3xl sm:text-4xl lg:text-7xl">
          I'm
        </span>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl mt-2 sm:mt-3">
          Muhamad Irfan
        </h1>
        <div className="bg-amber-300 py-1 w-32 sm:w-36 lg:w-70 mt-6 sm:mt-8 lg:mt-12 rounded-sm"></div>
        <p className="text-gray-100/60 w-full sm:w-3/4 lg:w-78 mt-3 sm:mt-4 lg:mt-7 text-base sm:text-lg lg:text-2xl">
          Mahasiswa tingkat akhir jurusan ilmu komputer dengan konsentrasi TPL
          (Teknologi Perangkat Lunak)
        </p>
      </div>

      <div className="md:absolute md:top-60 md:left-70 md:mt-14 lg:absolute lg:left-135 lg:top-24 w-full sm:w-80 lg:w-auto flex justify-center mt-6 sm:mt-10 lg:mt-0">
        <img
          src={irfanJpg}
          alt=""
          className="w-48 sm:w-56 lg:w-116 rounded-br-[80px] sm:rounded-br-[100px] lg:rounded-br-[170px] rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[150px]"
        />
      </div>

      <div className=" flex flex-col mt-6 sm:mt-80 lg:mt-0 items-center lg:items-start text-center lg:text-left z-20 relative">
        <p className="text-gray-200 text-xl sm:text-2xl lg:text-4xl w-full sm:w-3/4 lg:w-80 font-semibold">
          <Typewriter
            words={["Web Front End", "React.Js", "UI/UX Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />{" "}
          <span className="text-amber-300">Developer</span>
        </p>
        <p className="text-gray-200/70 w-full sm:w-3/4 lg:w-80 mt-2 sm:mt-4 lg:mt-4 text-sm sm:text-base lg:text-lg">
          Merancang antarmuka web yang interaktif, elegan, dan futuristik dengan
          sentuhan teknologi modern.
        </p>
        <DownloadCV />
      </div>
    </div>
  );
}

export default Hero;
