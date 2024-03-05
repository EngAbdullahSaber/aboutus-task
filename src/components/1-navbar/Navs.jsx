import React from "react";
import vector2 from "../../images/Vector2.png";
import logo from "../../images/Rectangle (1).png";
import polygon from "../../images/Polygon 1.png";

function Navs() {
  const menus = [
    { index: 0, title: " الصفحة الرئيسية" },
    { index: 1, title: "انشطة الأورمان" },
    { index: 2, title: "عن الأورمان" },
    { index: 3, title: "أخبارنا" },
  ];
  return (
    <div className="flex lg:flex-row flex-col   justify-between items-center xs:w-[90%]  mx-auto">
      <div className="flex flex-col items-center lg:w-[45%] md:w-[60%] xs:w-[100%]">
        <div className="flex flex-row my-1 w-full">
          <button
            className="w-full h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold hover:text-white
           hover:bg-[#FFC107] transition-colors "
          >
            إتبرع الأن{" "}
          </button>
          <button
            className="w-full h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold mx-1  hover:text-white
           hover:bg-[#FFC107] transition-colors"
          >
            حقق الحلم
          </button>
        </div>
        <button
          className="w-full h-12 text-[#343A40] border-[#FFC107] border-4 rounded-full text-2xl font-bold my-1  hover:text-white
           hover:bg-[#FFC107] transition-colors"
        >
          حقق الحلم
          <img src={vector2} alt="icon" className="inline-block mx-2" />
        </button>
      </div>
      <div className="xs:w-[100%]">
        <ul className=" text-center" dir="rtl">
          {menus.map((item) => (
            <li
              key={item.index}
              className="inline-block px-2 text-[#222222] font-medium md:text-xl sm:text-base hover:py-2 hover:font-semibold hover:text-[#FFC107]"
            >
              {item.title == "عن الأورمان" ? (
                <a href="">
                  <img
                    src={polygon}
                    alt="icon more "
                    className="inline-block px-1"
                  />
                  <span className="active">{item.title}</span>
                </a>
              ) : (
                <a href=""> {item.title}</a>
              )}
            </li>
          ))}

          <li className="inline-block text-[#222222] px-2   "></li>
        </ul>
      </div>
      <div className="xs:w-[100%] lg:w-[30%]">
        <img src={logo} alt="logo" className="m-auto" />{" "}
      </div>
    </div>
  );
}

export default Navs;
