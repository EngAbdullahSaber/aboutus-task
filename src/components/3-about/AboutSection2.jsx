import React from "react";
import aboutImage2 from "../../images/Group 687.png";
import logo from "../../images/AboutSection2Logo.png";

const AboutSection2 = () => {
  return (
    <div className="flex lg:flex-row flex-col container mx-auto my-10">
      <div className=" lg:w-[50%]">
        <img
          src={aboutImage2}
          alt=" second about section image"
          className="h-96 m-auto"
        />
      </div>
      <div className="lg:w-[50%] flex flex-col justify-center items-end">
        <h2 className="text-[#00521C] font-black text-5xl  mb-4">
          <img src={logo} alt="company name " className="mx-1 inline-block" />
          رؤية الجمعية
        </h2>
        <p className="text-[#343A40] md:text-right  text-center text-xl font-medium">
          الانتقال بمفهوم العمل الخيري التطوعي من مجرد الدور الكمالى والمشبع
          لغريزة العطاء عند بعض الشرائح إلى أن يصبح عمل مؤسسى تنموى منظم يتم
          بشكل احترافى وينطلق من تحقيق أهدافه من ثقة المتبرعين وجدية المستفيدين
          وخبرة وكفاءة القائمين عليه.
        </p>
      </div>
    </div>
  );
};

export default AboutSection2;
