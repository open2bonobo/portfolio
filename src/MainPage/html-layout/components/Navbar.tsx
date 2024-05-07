import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:contents w-full h-full">
      <div className="flex items-center fixed top-0 left-0 right-0 h-[65px] shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
        <div className="flex flex-row justify-between items-center mx-auto w-full max-w-screen-lg px-4">
          <a
            href=""
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-auto w-auto flex flex-row items-center cursor-pointer"
          >
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Hallo Changes!
            </span>
          </a>

          {/* Burger Menu */}
          <div className="lg:hidden 2xl:hidden md:hidden w-full h-full">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <button
                onClick={toggleMenu}
                className="block text-gray-200 hover:text-white focus:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
              <span className="font-bold text-gray-300 m-auto">
                Hallo Changes!
              </span>
            </div>
            {/* Menu Items for burger */}
            <div
              className={`relative w-full h-full flex flex-col items-center justify-center flex-grow ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="absolute top-0 left-0 flex items-center justify-between flex-col w-full h-auto border border-[#7042f861] bg-[#0300146f] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 backdrop-blur-md">
                <a href="#about-me" className="cursor-pointer">
                  About me
                </a>
                <a href="#skills" className="cursor-pointer">
                  Skills
                </a>
                <a href="#skills" className="cursor-pointer">
                  Blog
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden lg:w-[500px] md:w-[500px] xl:w-[500px] 2xl:w-[500px] h-full 2xl:flex xl:flex lg:flex md:flex flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#skills" className="cursor-pointer">
                Blog
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/in/alex-ink-a11b8b133/"
              target="_blank"
            >
              <FaLinkedin className="w-10 h-10 text-white hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
