import React from "react";
import { FaCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute w-full h-screen mt-4 bg-fg z-50">
      <div className="size-full max-w-[600px] mx-auto my-0 mt-[-50px] flex flex-col items-center justify-center gap-8">
        <div className="h-[175px]">
          <svg
            className="h-12"
            viewBox="0 0 108 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M101.309 20.7268L64.731 2.54928C57.9202 -0.849762 49.9663 -0.849762 43.1555 2.54928L6.5771 20.7268C-1.9007 24.9633 -1.9007 37.4265 6.5771 41.6629L43.1555 59.8405C49.9663 63.2395 57.9202 63.2395 64.731 59.8405L101.309 41.6629C109.787 37.4265 109.787 24.9633 101.309 20.7268ZM85.0682 31.6136C84.8777 36.6875 80.877 40.8255 75.9236 40.9733C71.2561 41.1211 67.3029 37.7713 66.3504 33.2885H41.4885C40.5359 37.7713 36.5828 41.1211 31.9153 40.9733C27.0096 40.8255 22.9612 36.6875 22.7707 31.6136C22.5801 26.047 26.8667 21.4165 32.201 21.4165C36.7257 21.4165 40.4883 24.717 41.4409 29.1013H66.3027C67.2553 24.717 71.0179 21.4165 75.5426 21.4165C80.8769 21.4165 85.2111 25.9978 84.973 31.6136H85.0682Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div className="relative ">
          <input
            type="text"
            placeholder="Email"
            className="relative w-[350px] h-[4rem] px-[1.75rem] max-md:w-full max-md:h-[50px] bg-bg rounded-full text-fg placeholder-grey text-[23px] max-md:text-[18px]  
            flex items-center justify-center outline-none pointer-events-auto"
          />
          <FaCircle className="absolute right-5.5 top-5.5 w-4 h-4 bg-fg rounded-full max-md:top-4 max-md:right-5" />
        </div>
        <div className="w-[350px] flex items-start justify-start gap-2">
          <a
            href="/"
            className="text-bg text-[23px] max-md:text-[18px] underline"
          >
            Instagram,
          </a>
          <a
            href="/"
            className="text-bg text-[23px] max-md:text-[18px] underline"
          >
            X/Twitter,
          </a>
          <a
            href="/"
            className="text-bg text-[23px] max-md:text-[18px] underline"
          >
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
