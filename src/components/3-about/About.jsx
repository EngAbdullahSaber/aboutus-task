import React from "react";
import aboutImage1 from "../../images/aboutImage.png";
import companyName from "../../images/aboutLogoSection.png";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col container mx-auto w-full my-10">
      <div className="lg:w-[50%]">
        <img
          src={aboutImage1}
          alt=" second about section image"
          className="h-96 m-auto"
        />
      </div>
      <div className="lg:w-[50%] lg:pt-0 xs:pt-24 flex flex-col justify-end items-end">
        <img src={companyName} alt="company name " className="my-6" />
        <p className="text-[#343A40] text-xl font-medium md:text-right  text-center">
          منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على
          التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن
          الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني أو
          سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات
          اقتصاديًا واجتماعيًا. تعتمد الجمعية في تمويلها على التبرعات العينية
          والنقدية من المصريين داخل مصر وخارجها.
        </p>
      </div>
    </div>
  );
};

export default About;
