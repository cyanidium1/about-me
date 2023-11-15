import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Social() {
  return (
    <div className="flex items-center justify-between space-x-10">
      <a
        href="https://github.com/cyanidium1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-all duration-300  transform hover:scale-110"
      >
        <FaGithub className="text-3xl hover:fill-orange-500 duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/fediralpatov/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-all duration-300 hover:text-orange-500 transform hover:scale-110"
      >
        <FaLinkedin className="text-3xl hover:fill-orange-500 duration-300" />
      </a>
      <a
        href="mailto:cyanidium1@gmail.com"
        className="text-white transition-all duration-300 hover:text-orange-500 transform hover:scale-110"
      >
        <FaEnvelope className="text-3xl hover:fill-orange-500 duration-300" />
      </a>
    </div>
  );
}

export default Social;
