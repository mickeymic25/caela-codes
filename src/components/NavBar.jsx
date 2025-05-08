function NavBar() {
  return (
    <>
      <nav className="nav md:flex md:justify-between bg-white">
        <h1>Logo</h1>
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
