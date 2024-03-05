import React from "react";
import profile from "../../images/Ellipse 24.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import SectionTitle from "../sectionTitle/SectionTitle";

const Teams = () => {
  const teams1 = [
    {
      index: 1,
      title: "ا/ أحمد أسامة محمد الجندي",
      jobs: "  رئيس مجلس الإدارة",
    },
    {
      index: 2,
      title: "ا/ محمد محب أنور توفيق عبد الرازق",
      jobs: " نائب رئيس مجلس الإدارة",
    },
    {
      index: 3,
      title: "م/ محمد عادل محمد عبد المنعم زغلول",
      jobs: " أمين الصندوق المهندس",
    },
    {
      index: 4,
      title: "م /محمد أحمد طلعت محمد عزيز",
      jobs: "السكرتير العام ",
    },
    {
      index: 5,
      title: "م/ حسام الدين أحمد عبد الحليم القبانى",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 6,
      title: "د/ محمد خالد حسين طه النوري",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 7,
      title: "م/ محمد عاصم محمد عبد الرحمن إمام",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 8,
      title: "ا/ أحمد حسام الدين أحمد عبد الحليم",
      jobs: "عضو مجلس الإدارة",
    },
    {
      index: 9,
      title: "ا/ محمد مصطفى كمال محمد جاد",
      jobs: "عضو مجلس الإدارة",
    },
  ];
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
        <XIcon
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
  return (
    <div className="teams container mx-auto ">
      <SectionTitle title="أعضاء مجلس الإدارة" />
      <div className="flex sm:flex-row xs:flex-col flex-wrap justify-between mt-4">
        {teams1.map((items) => (
          <div
            className="shadow-lg rounded-lg p-3 mt-3 sm:w-[30%] xs:w-full"
            key={items.index}
          >
            <img src={profile} alt="person photo" className="mx-auto my-3" />
            <h3 className="text-[#201a1a] font-bold text-center text-xl my-3">
              {items.title}
            </h3>
            <p className="text-[#8E8E8E] text-center font-bold text-xl my-3">
              {" "}
              {items.jobs}
            </p>
            <ul className="flex flex-row justify-between w-40 my-6 mx-auto">
              {icons.map((items) => (
                <li key={items.index}>{items.icon}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
