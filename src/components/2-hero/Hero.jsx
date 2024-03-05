import React from "react";
import banner from "../../images/image 24.png";
import overlay from "../../images/Rectangle 41.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={banner} alt="banner" className="" />
      <img
        src={overlay}
        alt="overlay"
        className="h-full w-full absolute top-0 left-0"
      />
      <p className="md:text-3xl xs:text-xl font-bold text-white text-right absolute top-4 right-4">
        عن الجمعية
      </p>
    </div>
  );
};

export default Hero;
