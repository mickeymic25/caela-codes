import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import caelacodeslogo from "../../assets/caelacodes-high-resolution-logo-transparent.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkStyles =
    "hover:border-[#e9a319] hover:border-b-3 active:border-[#e9a319] active:border-b-3 focus:border-[#e9a319] focus:border-b-3 ";
  return (
    <>
      <nav className="flex justify-between w-full z-50 fixed shadow-sm bg-white p-3">
        <div>
          <img src={caelacodeslogo} className="h-10" />
        </div>

        <div className="hidden md:flex md:pl-2">
          <ul className="md:flex md:m-auto md:gap-x-36 ">
            <li>
              <a href="#about" className={linkStyles}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className={linkStyles}>
                Projects
              </a>
            </li>
            <li>
              <a href="#hobbies" className={linkStyles}>
                Hobbies
              </a>
            </li>
            <li>
              <a href="#contact" className={linkStyles}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {!isMobileMenuOpen && (
          <div className="md:hidden flex">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <GiHamburgerMenu />
            </button>
          </div>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div className="z-50 md:hidden justify-end fixed shadow-sm top-0 right-0 bg-white p-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoMdClose />
          </button>
          <ul className="flex flex-col mt-1.5 space-y-4">
            <li>
              <a href="#about" className={linkStyles}>
                About Me
              </a>
            </li>

            <li>
              <a href="#projects" className={linkStyles}>
                Projects
              </a>
            </li>
            <li>
              <a href="#hobbies" className={linkStyles}>
                Hobbies
              </a>
            </li>
            <li>
              <a href="#contact" className={linkStyles}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
