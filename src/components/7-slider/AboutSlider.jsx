import React from "react";
import Slider from "react-slick";
import img1 from "../../images/slider/image 7.png";
import img2 from "../../images/slider/image 14.png";
import img3 from "../../images/slider/image 15.png";
import img4 from "../../images/slider/image 13.png";
import img5 from "../../images/slider/image 8.png";
import img6 from "../../images/slider/image 8 (1).png";
import img7 from "../../images/slider/image 5.png";
import SectionTitle from "../sectionTitle/SectionTitle";

const AboutSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 7,
    speed: 500,
  };
  return (
    <div className="slider-container sliders__company overflow-hidden hidden md:block ">
      <SectionTitle title="  شـركـائـنـا فـى الـنـجـاح  " />

      <Slider {...settings} className="">
        <div className="ml-[-6rem]">
          <img
            src={img1}
            alt=" image slider"
            className="rounded-full scale-[0.9]  shadow-2xl "
          />{" "}
        </div>
        <div className="ml-[-3rem]">
          <img
            src={img2}
            alt=" image slider"
            className="rounded-full scale-[1.2]   shadow-2xl"
          />{" "}
        </div>
        <div className="ml-0">
          <img
            src={img3}
            alt=" image slider"
            className="rounded-full scale-[0.9]  shadow-2xl"
          />{" "}
        </div>
        <div className="mx-3">
          <img
            src={img4}
            alt=" image slider"
            className="rounded-full  shadow-2xl"
          />{" "}
        </div>
        <div className="mx-3">
          <img
            src={img5}
            alt=" image slider"
            className="rounded-full  shadow-2xl"
          />{" "}
        </div>
        <div className="mx-1">
          <img
            src={img6}
            alt=" image slider"
            className="rounded-full  shadow-2xl"
          />{" "}
        </div>
        <div className="ml-[-6rem]">
          <img
            src={img7}
            alt=" image slider"
            className="rounded-full    shadow-2xl"
          />{" "}
        </div>
      </Slider>
    </div>
  );
};

export default AboutSlider;
