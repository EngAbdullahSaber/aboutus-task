import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Divider from "@mui/material/Divider";
import footerLogo from "../../images/footerLogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const icons = [
    {
      index: 0,
      icon: (
        <InstagramIcon
          sx={{
            "&:hover": { color: "#fccc63 " },
            color: "#D9D9D9",
            transitionDelay: "0.3s",
            cursor: "pointer",
          }}
        />
      ),
      iconAlt: " facebook icon",
      color: "316FF6",
    },
    {
      index: 1,
      icon: (
        <YouTubeIcon
          sx={{
            "&:hover": { color: "#CD201F" },
            color: "#D9D9D9",
            transitionDelay: "0.3s",
            cursor: "pointer",
          }}
        />
      ),
      iconAlt: " instagram icon",
      color: "316FF6",
    },
    {
      index: 2,
      icon: (
        <LinkedInIcon
          sx={{
            "&:hover": { color: "#0077b5 " },
            color: "#D9D9D9",
            transitionDelay: "0.3s",
            cursor: "pointer",
          }}
        />
      ),
      iconAlt: " linkedin icon",
      color: "316FF6",
    },
    {
      index: 3,
      icon: (
        <FacebookIcon
          sx={{
            "&:hover": { color: "#316FF6" },
            color: "#D9D9D9",
            transitionDelay: "0.3s",
            cursor: "pointer",
          }}
        />
      ),
      iconAlt: " youtbue icon",
      color: "316FF6",
    },
  ];
  const menu = [
    { index: 0, menuLink: "الأسئلة الشائعة" },
    { index: 1, menuLink: "الحسابات البنكية للجمعية" },
    { index: 2, menuLink: " طرق التبرع" },
    { index: 3, menuLink: " شركاء النجاح" },
    { index: 4, menuLink: " أخبارنا" },
    { index: 5, menuLink: " فروعنا" },
  ];
  return (
    <div className="bg-[#222]" dir="rtl">
      <div className="container mx-auto flex lg:flex-row xs:flex-col justify-between py-6">
        <div className="lg:w-[35%]">
          <img src={footerLogo} alt=" footer Logo" className="xs:m-auto" />
          <p className="font-normal text-lg text-white my-3">
            جمعية خيرية مصرية مقيدة برقم803 مركزية عام 1993
          </p>
          <p className="flex flex-row items-center justify-center font-black text-7xl text-white mt-8">
            <LocalPhoneIcon sx={{ fontSize: 70, fontWeight: "bolder" }} />
            19455
          </p>
          <ul className="flex flex-row justify-around items-center mx-auto mt-14 w-[40%]">
            {icons.map((items) => (
              <li key={items.index}>{items.icon}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[25%] pr-8">
          <h3 className="font-bold text-2xl text-white lg:text-right xs:text-center my-5">
            أهم الروابط
          </h3>
          <ul className="lg:list-disc">
            {menu.map((item) => (
              <li
                key={item.index}
                className="font-bold text-base text-[#8E8E8E] lg:text-right xs:text-center my-3"
              >
                <a href=""> {item.menuLink} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[40%]">
          <h3 className="font-bold text-2xl text-white text-right my-5">
            تواصل معنا
          </h3>
          <form>
            <div className="flex flex-row ">
              <input
                placeholder="الاسم"
                className=" bg-white ml-1 w-full p-2 border-2"
              />
              <input
                placeholder="رقم المحمول"
                className=" bg-white  p-2 w-full border-2"
              />
            </div>
            <input
              placeholder=" البريد الاليكتروني"
              className=" bg-white mt-2 w-full p-2 border-2"
            />
            <input
              placeholder="  عنوان الرسالة"
              className=" bg-white mt-2 w-full p-2 border-2"
            />
            <input
              placeholder=" استفسارك "
              className=" bg-white mt-2 w-full p-2 border-2 h-32"
            />
            <button className="font-bold text-base bg-[#8DC540] text-white p-3 mt-3 float-end">
              إرسال
            </button>
          </form>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "#343A40" }} />
      <div className="font-normal text-center py-2 text-xs text-white">
        جميع الحقوق محفوظة جمعية الأورمان - © 2023
      </div>
    </div>
  );
};

export default Footer;
