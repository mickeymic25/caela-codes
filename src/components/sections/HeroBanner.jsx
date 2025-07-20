import React from "react";

function HeroBanner() {
  return (
    <div className="flex md:max-w-screen md:h-screen">
      <div className="hero-text flex-col text-left text-balance md:pt-60 md:pr-[800px] md:pl-36 ">
        <h1 className="mb-3">Hi, my name is Micaela</h1>
        <p>
          I build accessible, responsive websites using HTML, CSS, JavaScript,
          and React. I’m passionate about crafting clean, interactive user
          experiences that are both visually appealing and easy to use.
          Continuously exploring new tools and technologies, I strive to stay
          ahead of industry trends and bring innovative solutions to every
          project. I enjoy problem-solving and collaborating to create web
          interfaces that look great and provide a smooth experience on all
          screen sizes. Check out my projects below and let me know what you
          think!
        </p>
        <button className="mt-3 mb-3">Download CV</button>
        <p className=" italic text-sm text-gray-400 mt-3">
          Click to multiply the particles — drag to move!
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
