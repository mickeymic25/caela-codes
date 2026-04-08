function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center h-[70px] md:h-[70px] bg-white text-center">
      <p className="font-semibold">© CaelaCodes 2026</p>
      <div className="font-semibold flex flex-row md:space-x-4 gap-3 md:space-y-0 items-center justify-center mt-2">
        <p>Creative</p>

        <p>Collaborative</p>

        <p>Curious</p>
      </div>
    </div>
  );
}

export default Footer;
