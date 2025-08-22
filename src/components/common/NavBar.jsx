import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between w-full fixed shadow-sm bg-white p-3">
        <div>
          {/*Logo*/}
          <img
            src="src/assets/caelacodes-high-resolution-logo-transparent.png"
            className="h-10"
          />
        </div>
        {/*Menu*/}
        <div className="hidden md:flex">
          <ul className="md:gap-x-36 md: m-auto">
            <li>About Me</li>
            <li>Projects</li>
            <li>Hobbies</li>
            <li>Contact Me</li>
          </ul>
        </div>

        {/*Mobile Hamburger*/}
        {!isMobileMenuOpen && (
          <div className="md:hidden flex">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <GiHamburgerMenu />
            </button>
          </div>
        )}
      </nav>

      {/*Mobile menu dropdown*/}
      {isMobileMenuOpen && (
        <div className="md:hidden justify-end fixed shadow-sm top-0 right-0 bg-white p-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <IoMdClose />
          </button>
          <ul className="flex flex-col mt-1.5 space-y-4">
            <li>About Me</li>
            <li>Projects</li>
            <li>Hobbies</li>
            <li>Contact Me</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;

/*nav className="md:flex md:justify-between shadow-sm bg-white p-3">
        <img
          src="src/assets/caelacodes-high-resolution-logo-transparent.png"
          className="h-10"
        />
        <ul className="md:flex md:gap-x-36 md: m-auto">
          <li>About Me</li>
          <li>Projects</li>
          <li>Hobbies</li>
          <li>Contact Me</li>
        </ul>
      </nav>*/
