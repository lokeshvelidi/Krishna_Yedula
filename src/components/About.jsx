import img from "../assets/close-up-volunteers-collecting-food.jpg";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaSchool, FaBookOpen, FaGraduationCap, FaUserGraduate, FaBuilding, FaAward, FaCertificate } from "react-icons/fa";
import { BsArrowUpRightCircleFill, BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import inter from "../assets/intermediate.jpg";
import { motion } from "framer-motion";
import krishna from "../assets/KrishnaGaru.jpeg";
import AnimatedCards from "./AnimatedCards";
// import {useEffect} from "react";

const Counter = ({ target, className = "", size = "text-5xl" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);}, []);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(updateCounter);
  }, [target]);

  return <p className={`${size} font-light ${className}`}>{count}</p>;
};

const educationIcons = [FaSchool, FaBookOpen, FaGraduationCap, FaUserGraduate, FaBuilding, FaAward, FaCertificate];

const educationData = [
    [
      "Primary Education",
      "M.G. Rao Memorial Janata High School, Chikkadapalli, Hyderabad",
    ],
    [
      "Intermediate",
      "Gun Foundry, Government Junior College, Alia",
    ],
    [
      "Bachelor's Degree",
      "Government Degree College, Khairatabad",
    ],
    [
      "Master's in Public Personnel Management",
      "Osmania University",
    ],
    [
      "MDBA in Management",
      "Symbiosis Institute of Management, Pune",
    ],
    [
      "Honorary Doctorate",
      "George Washington University of Peace, Florida (2024)",
    ],
    [
      "Independent Director Certification",
      "Indian Institute of Corporate Affairs",
    ],
  ];

function About() {
  return (
    <div className="relative hidden-overflow bg-gray-100 ">
      {/* bg-[radial-gradient(circle_at_12%100%,#ffe2b0f5_1%_5px,transparent_15%),radial-gradient(circle_at_95%-15%,#da4df166_5%,transparent_30%),radial-gradient(circle_at_center_right,#c4f5e9b2_2%,transparent_35%)] */}
      {/* <div className='text-5xl w-full h-36 font-extrabold font-serif  italic mb-6 justify-center items-center bg-gradient-to-r from-white to-blue-00 text-black rounded-3xl flex shadow-lg'>About Me</div> */}
      {/* HERO SECTION */}


     {/* <div className="relative z-20 py-10 sm:py-16 md:py-10 flex justify-center items-center px-4 sm:px-10 lg:px-20">
  <div
    className="
      w-[95%] sm:w-[90%] md:w-[95%] lg:w-[85%]
      bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl
      flex flex-col-reverse md:flex-row items-center
      px-4 sm:px-8 md:px-12 lg:px-20
      py-8 sm:py-10 gap-8 sm:gap-10
    "
  >
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Facilities Head Pan India
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-gray-900 md:w-[90%] mx-auto md:mx-0">
        Facilities Head Pan India at Virtusa Consulting & Services Ltd with a
        demonstrated history of working in IT & services. Strong operations
        professional skilled in Facility Management, Workplace Experience,
        Infrastructure, Sustainability, and Employee Relations.
      </p>

      <button className="mt-6 px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
    <div className="flex-shrink-0 flex justify-center md:justify-end">
      <img
        src={krishna}
        alt="Welcome"
        className="
          w-40 h-48 
          sm:w-56 sm:h-64
          md:w-72 md:h-80
          lg:w-80 lg:h-96
          object-cover rounded-xl shadow-2xl
        "
      />
    </div>
  </div>
</div> */}

<div className="relative z-20 py-10 sm:py-16 md:py-10 flex justify-center items-center px-4 sm:px-10 lg:px-20">
  <div
    className="
      w-[95%] sm:w-[90%] md:w-[95%] lg:w-[85%]
      bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl
      flex flex-col lg:flex-row items-center
      px-4 sm:px-8 md:px-12 lg:px-20
      py-8 sm:py-10 gap-8 sm:gap-10
    "
  >

    {/* IMAGE ALWAYS FIRST (MOBILE + TAB + DESKTOP) */}
    <div className="flex-shrink-0 flex justify-center lg:justify-start">
      <img
        src={krishna}
        alt="Welcome"
        className="
          w-40 h-48 
          sm:w-56 sm:h-64
          md:w-72 md:h-80
          lg:w-80 lg:h-96
          object-cover rounded-xl shadow-2xl
        "
      />
    </div>

    {/* CONTENT SECOND */}
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Facilities Head Pan India
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-gray-900 lg:w-[100%] mx-auto lg:mx-0">
        Facilities Head Pan India at Virtusa Consulting & Services Ltd with a
        demonstrated history of working in IT & services. Strong operations
        professional skilled in Facility Management, Workplace Experience,
        Infrastructure, Sustainability, and Employee Relations.
      </p>

      {/* <button className="mt-6 px-5 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button> */}
    </div>

  </div>
</div>


      {/* STATS SECTION */}
      <section className="relative z-10 bg-[#BBDCE5] pt-8 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-20 flex justify-center w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row md:flex-col items-center gap-8 sm:gap-12 md:gap-16">
          
          <div className="flex flex-col sm:flex-row md:flex-row gap-6 sm:gap-8 items-center justify-center">
            
      
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full bg-white flex flex-col justify-center items-center shadow-lg">
              <FaYoutube className="text-red-600 text-2xl sm:text-3xl md:text-5xl mb-2" />
              <Counter target={1500} size="text-2xl sm:text-3xl md:text-5xl" />
              <p className="uppercase text-xs sm:text-sm text-black mt-2">YouTube</p>
            </div>

    
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full bg-black text-white flex flex-col justify-center items-center shadow-lg z-10 sm:mt-4 md:mt-2 -ml-0 sm:-ml-6 md:-ml-10">
              <FaFacebook className="text-blue-600 text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-4" />
              <Counter target={3744} size="text-2xl sm:text-3xl md:text-5xl" />
            </div>

            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-white flex flex-col justify-center items-center shadow-lg -ml-0 sm:-ml-6 md:-ml-8">
              <FaLinkedin className="text-blue-800 text-lg sm:text-2xl md:text-4xl mb-2" />
              <Counter target={3000} size="text-lg sm:text-2xl md:text-4xl" />
              <p className="uppercase text-xs sm:text-sm text-black mt-2">LinkedIn</p>
            </div>
          </div>

          <div className="flex flex-col max-w-xl text-center mr:10 md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              Creative Designer With
              <br />
              Modern Techniques
            </h2>
            <p className="text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base md:text-xl">
              Hello, I’m Matt Jadon, I'm a web designer and developer based in NYC, USA.
              I have a passion for web design and love to create for web and mobile devices.
              If you have a web based project that you want to get started.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <div className="bg-[#F9F3EF] p-4 sm:p-6 text-sm sm:text-base md:text-lg font-semibold rounded-md shadow-md w-full sm:w-72">
                <p className="flex items-center mb-2">
                  <CgProfile className="mr-2" /> Krishna Yedula
                </p>
                <p className="flex items-center mb-2">
                  <BsEnvelopeFill className="mr-2" /> info@krishna.com
                </p>
                <p className="flex items-center">
                  <BsFillTelephoneFill className="mr-2" /> 9999000090
                </p>
              </div>

              <div className="bg-[#F9F3EF] p-4 sm:p-6 text-base sm:text-lg md:text-xl font-semibold rounded-md shadow-md w-full sm:w-72 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-light leading-none">
                    30<span className="text-lg sm:text-xl align-top">+</span>
                  </p>
                  <BsArrowUpRightCircleFill className="text-lg sm:text-xl" />
                </div>
                <p className="uppercase text-sm sm:text-base md:text-xl mt-4 text-gray-700">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
     <section
  id="education"
  className="bg-gray-50 py-10 sm:py-16 px-4 sm:px-8 md:px-16 overflow-hidden"
>
  <div className="container mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
      Education
    </h2>

    <div className="relative">
      {/* Vertical line visible on tablet and desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-violet-400 hidden md:block"></div>

      <div className="flex flex-col gap-10 sm:gap-12 md:gap-16">
        {educationData.map(([title, desc], index) => {
          const IconComponent = educationIcons[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col items-center text-center gap-4 md:gap-8 md:flex-row md:items-start md:justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#BBDCE5] flex items-center justify-center shadow-md z-10">
                <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>



   
    {/* <AnimatedCards/> */}
    </div>
  );
}

export default About;
