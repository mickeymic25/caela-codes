function NavBar() {
  return (
    <>
      <nav className="nav md:flex md:justify-between shadow-sm bg-white p-3">
        <img
          src="src/assets/caelacodes-high-resolution-logo-transparent.png"
          className="h-10"
        />
        <ul className="menu md:flex md:gap-x-36 md: m-auto">
          <li>About Me</li>
          <li>Projects</li>
          <li>Hobbies</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
