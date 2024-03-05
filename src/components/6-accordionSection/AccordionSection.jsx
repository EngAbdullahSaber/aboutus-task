import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SectionTitle from "../sectionTitle/SectionTitle";
const AccordionSection = () => {
  return (
    <div dir="rtl" className="questions my-4">
      <SectionTitle title=" أسئلة شائعة " />

      <Accordion defaultExpanded className="bg-[#222222]   !mt-1">
        <AccordionSummary
          className="!bg-[#222222]  !rounded-xl !text-white font-bold text-2xl"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          ما هي الخدمات التي تقدمها الأرمان ؟{" "}
        </AccordionSummary>
        <AccordionDetails className="  mt-[-.5rem] pt-8 font-medium text-xl text-white bg-[#00521C]">
          جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى،
          وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى
          عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل:
          الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
          المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات
          القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#222222] !mt-1">
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-[#222222] !rounded-xl !text-white font-bold text-2xl"
        >
          ما هي الأوراق المطلوبة من الجمعيات التي ترغب في التعاون مع الأورمان
          للاستفادة من خدماتها الخيرية؟{" "}
        </AccordionSummary>
        <AccordionDetails className="font-medium text-xl  mt-[-.5rem] pt-8  text-white bg-[#00521C]">
          جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى،
          وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى
          عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل:
          الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
          المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات
          القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#222222] !rounded-xl !mt-1">
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
          className="!bg-[#222222] !text-white !rounded-xl font-bold text-2xl"
        >
          ما هي شروط كفالة الاطفال ؟{" "}
        </AccordionSummary>
        <AccordionDetails className="font-medium text-xl  mt-[-.5rem] pt-8  text-white bg-[#00521C]">
          جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى،
          وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى
          عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل:
          الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
          المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات
          القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-[#222222] !rounded-xl !mt-1">
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
          className="!bg-[#222222] !text-white !rounded-xl font-bold text-2xl"
        >
          ما هي الاوراق المطلوبة لكفالة طفل يتيم ؟{" "}
        </AccordionSummary>
        <AccordionDetails className="font-medium text-xl  mt-[-.5rem] pt-8  text-white bg-[#00521C]">
          جمعية الأورمان تقدم المساعدات الموسمية، وهي: توزيع لحوم الأضاحى،
          وكراتين رمضان، وبطاطين الشتاء، والمشاركة فى يوم اليتيم. بالإضافة إلى
          عمل مشروعات تنموية لغير القادرين من الأرامل ومعدومي الدخل، مثل:
          الأكشاك، ورؤوس المواشي، وتقديم القروض لتمويل المشروعات التنموية
          المختلفة سواء صناعية او تجارية أو خدمية، وفى المجال الطبى تدعم عمليات
          القلب والعيون، وتسليم الأجهزة التعويضية والأطراف الصناعية .{" "}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
