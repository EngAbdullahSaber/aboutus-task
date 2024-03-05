import React from "react";
import logo1 from "../../images/Rectangle (3).png";
import polygon from "../../images/Polygon 1.png";
import vector from "../../images/Vector.png";
const Navbar = () => {
  const menus = [
    { index: 0, title: "طرق اخري للتبرع" },
    { index: 1, title: "|" },
    { index: 2, title: " حساباتنا في البنوك  " },
    { index: 3, title: "|  " },
    { index: 4, title: "فروعنا  " },
  ];
  return (
    <div className="  bg-[#222222]">
      <div className="flex justify-between flex-col md:flex-row container  mx-auto items-center py-2">
        <div className="flex  items-center text-white">
          <img src={logo1} alt="logo" />
          <a href="" className="flex items-center">
            <img src={polygon} alt="logo" className="px-2" />
            <img src={vector} alt="logo" className="hover:cursor-pointer" />
          </a>
          <a href="" className="hover:cursor-pointer">
            <span className="px-2 font-medium text-white"> تسجيل الدخول</span>
          </a>
          <span className="px-1">|</span>
          <a href="" className="hover:cursor-pointer">
            <span className="px-2 font-bold text-white"> En</span>
          </a>
        </div>
        <div className="text-base font-medium text-white flex  sm:flex:row  ">
          {menus.map((item) => (
            <span
              key={item.index}
              className={item.title == "|" ? "px-1" : "px-2"}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
