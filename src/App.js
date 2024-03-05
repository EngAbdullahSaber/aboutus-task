import "./App.css";
import Navbars from "./components/1-navbar/Navbar";
import Hero from "./components/2-hero/Hero";
import About from "./components/3-about/About";
import Navs from "./components/1-navbar/Navs";
import AboutBanner from "./components/4-AboutBanner/AboutBanner";
import AboutSection2 from "./components/3-about/AboutSection2";
import Teams from "./components/5-teams/Teams";
import AccordionSection from "./components/6-accordionSection/AccordionSection";
import AboutSlider from "./components/7-slider/AboutSlider";
import Footer from "./components/8-footer/Footer";
import scrollToTop from "./images/scrollToTop.json";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Lottie from "lottie-react";
function App() {
  let [loading, setLoading] = useState(false);
  let [visible, setVisible] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      {loading ? (
        <div className="">
          <HashLoader color="#36d7b7" style={{ display: "contents" }} />
        </div>
      ) : (
        <>
          <Navbars />
          <Navs />
          <Hero />
          <About />
          <AboutBanner />
          <AboutSection2 />
          <Teams />
          <AccordionSection />
          <AboutSlider />
          <Footer />
          {visible ? (
            <button
              onClick={goToTop}
              className="z-50 bg-[#009720] text-white text-center text-xl rounded-full fixed bottom-10 right-10 "
            >
              <Lottie
                className="contact__animation"
                animationData={scrollToTop}
                style={{ height: 70 }}
              />
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
