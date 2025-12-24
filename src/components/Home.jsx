import React from "react";
import img from "../assets/close-up-volunteers-collecting-food.jpg";
import krishna from "../assets/Krishna_Yedula-removebg-preview.png";
// import bg from "../assets/soft-purple-paint-shade-brushstroke.jpg";
import virtusa from "../assets/virtusa-c.webp";

import SocialServices from "./SocialServices";
import krish from "../assets/Krishna_Y.jpg"
import Video from "./Video";
import AnimatedCards from "./AnimatedCards";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff] ">
      <section className="relative h-[600px] bg-white text-black overflow-hidden">
  {/* Curved layered background at bottom */}
  <div className="absolute -bottom-0 left-0 w-full overflow-hidden leading-[6] rotate-160">
    
    <svg
      className="relative block w-[calc(300%+1.3px)] h-[150px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44C150.47,82.78,0,0,0,0V120H1200V0S992.34,70.09,801.39,55.63C610.45,41.16,492.31,30.11,321.39,56.44Z"
        className="fill-purple-200"
      ></path>
    </svg>
  </div>

  {/* Decorative circles */}
  {/* <div className="absolute top-[4 %] right-[9%] w-[500px] h-[500px] bg-blue-500 rounded-full opacity-60 blur-sm"></div> */}
  {/* <div className="absolute bottom-32 right-[30%] w-24 h-24 bg-blue-300 rounded-full opacity-70 blur-md"></div> */}

  {/* Content Section */}
  <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-12 lg:py-24 z-10">
    {/* Left Text Section */}
    <div className="w-full lg:w-[55%] space-y-3 lg:space-y-5 text-center lg:text-left">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-black">
        Hello, <span className="text-black">I am</span>
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
        <span className="text-blue-600">Krishna Yedula</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-black font-medium leading-relaxed">
        A changemaker who has brought about change through public-private
        partnerships. He is known for his work in the Cyberabad Security
        Council (SCSC), his humanitarian work during the COVID-19 pandemic,
        and his work for environmental sustainability.
      </p>
      <Link to="/career">
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
        My Works
      </button>
      </Link>
    </div>

    {/* Right Image Section */}
    <div className="relative w-full lg:w-[40%] flex justify-center mt-8 lg:mt-0">
      <img
        src={krishna}
        alt="Krishna Yedula"
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] object-cover z-10 drop-shadow-2xl"
      />
      {/* Optional circle behind image */}
      {/* <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-100 rounded-full blur-xl"></div> */}
    </div>
  </div>
</section>


<div className="relative z-20 py-10 md:-mb-32 sm:py-20 flex justify-center items-center">
  <div
    className="
      w-[95%] sm:w-[90%] md:w-[85%]
      bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl
      flex flex-col lg:flex-row
      px-4 sm:px-8 md:px-12
      py-6 sm:py-10
      gap-8 sm:gap-12
    "
    style={{ minHeight: '400px' }}
  >
    {/* IMAGE FIRST FOR MOBILE + TAB + DESKTOP */}
    <div className="flex-shrink-0 flex justify-center lg:justify-start">
      <img
        src={krish}
        alt="Welcome"
        className="
          w-44 h-48
          sm:w-64 sm:h-64
          md:w-72 md:h-72
          object-cover rounded-xl shadow-xl
        "
      />
    </div>

    {/* CONTENT — COMES BELOW IMAGE IN MOBILE + TAB */}
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Facilities Head Pan India
      </h1>

      <p className="text-sm sm:text-lg md:text-xl mt-4 text-gray-900">
        Facilities Head Pan India at Virtusa Consulting & Services Ltd with a
        demonstrated history of working in IT & services. Strong operations
        professional skilled in Facility Management, Workplace Experience,
        Infrastructure, Sustainability, and Employee Relations.
      </p>
      <Link to="/about">
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        About Me
      </button>
      </Link>
    </div>
  </div>
</div>

     
      
    <div>
      
      <section className="bg-[#edece8] py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center relative overflow-hidden transition-all duration-500 mt-16 sm:mt-24 md:mt-32 lg:mt-40">
  {/* Left Image Circle */}
  <div className="relative w-[310px] h-[260px]  md:w-[480px] md:h-[340px] lg:w-[620px] lg:h-[420px] xl:w-[700px] xl:h-[480px] rounded-full border-[3px] sm:border-[4px] md:border-[6px] lg:border-[8px] border-[#f1eeeb] flex items-center justify-center overflow-hidden bg-white shadow-md z-20">
    <img
      src={virtusa}
      alt="Virtusa Building"
      className="w-full h-full object-cover rounded-full shadow-lg"
    />
  </div>

  {/* Right Text Circle */}
  <div
    className="
      relative flex flex-col justify-center items-center md:items-start
      text-center md:text-left
      w-[310px] h-[260px] sm:w-[380px] sm:h-[280px] md:w-[560px] md:h-[380px] lg:w-[620px] lg:h-[400px] xl:w-[700px] xl:h-[480px]
      rounded-full border-[3px] sm:border-[4px] md:border-[6px] lg:border-[8px]
      border-[#BBDCE5] bg-white
      -mt-2 md:mt-0 md:-ml-8 lg:-ml-10 xl:-ml-20 z-10 transition-all duration-500
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden
    "
  >
    {/* Tag */}
    <div className="inline-block md:ml-4 xl:ml-4 bg-black text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-xl mb-2 sm:mb-3 md:mb-4">
      Virtusa
    </div>

    {/* Title */}
    <h2 className="text-base  md:ml-4 lg:ml-0 xl:ml-4 md:text-center sm:text-2xl md:text-xl lg:text-3xl xl:text-3xl font-bold text-[#111] leading-snug mb-2 sm:mb-4 md:mb-5">
      Virtusa Vice-President
    </h2>

    {/* Description */}
    <p className="text-[#4b4b4b] md:text-center xl:ml-4 lg:text-center xl:text-start text-xs sm:text-sm md:text- lg:text-lg xl:text-xl leading-relaxed max-w-[90%] sm:max-w-[80%] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[580px] mx-auto md:mx-0">
      Facilities Head Pan India at Virtusa Consulting & Services Ltd with a
      demonstrated history of working in IT & services. Skilled in Facility
      Management, Workplace Experience, Infrastructure, Sustainability, and
      Employee Relations.
    </p>
  </div>
</section>

    </div>


      <SocialServices />
      <AnimatedCards />
      <Video />
      
    </div>
  );
}

export default Home;
