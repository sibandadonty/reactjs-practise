import React from "react";

function HeroSection() {
  return (
    <div>
      <img src="./image-web-3-mobile.jpg" alt="web 3 mobile" />
      <p className="font-bold text-4xl">The Bright Future of Web 3.0?</p>
      <p className="leading-8 text-xl">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="bg-red-500 font-bold tracking-wider px-4 py-2">
        READ MORE
      </button>
    </div>
  );
}

export default HeroSection;
