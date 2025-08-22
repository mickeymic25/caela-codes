import React from "react";

function HeroBanner() {
  return (
    <div className="flex sm:max-w-screen h-screen">
      <div className="flex-col m-4  text-left  md:pt-60 md:pr-[800px] md:pl-36 ">
        <h1 className="text-2xl md:text-4xl mb-3">Hi, my name is Micaela</h1>
        <p className="text-base text-justify text-balance hyphens-auto sm:text-lg md:text-xl">
          I build accessible, responsive websites with JavaScript, React and
          Next.js. Passionate about creating clean, user-friendly interfaces
          that look great and work seamlessly across all devices. I’m committed
          to continuous learning and collaboration to deliver outstanding web
          experiences. Explore my projects below—I’d love to hear your feedback!
        </p>
        <button className="mt-3 mb-3">Download CV</button>
        <p className="italic text-sm text-gray-400 pb-2">
          Click to multiply the particles — drag to move!
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
