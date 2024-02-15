import React from "react";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white py-8 mb-0  opacity-90 z-0">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <div className="flex items-center">
            <FaHome className="mr-2" />
            <div>
              <p>Aster Society Wagholi.</p>
              <p>Pune.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <p>+91-9767002335</p>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="mr-2" />
            <p>shitalnawl17@gmail.com</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p>
            This is me Shital Nawal. I am a Full-Stack Developer and I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="flex mt-4">
            <a
              href="https://github.com/ShitalNawal"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-4xl "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shital-nawal-898aa5220/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/shital.1761?igsh=MWkzZ2plaWV4bHJjaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <FaInstagramSquare />
            </a>
          </div>
          
        </div>
        <p className="text-white mt-4 text-center text-lg px-80">&copy; Copyright 2023 - Developed by <span className="text-rose-700 text-xl font-bold">Shital Nawal</span>. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
