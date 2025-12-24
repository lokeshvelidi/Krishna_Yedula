import React from "react";

import bg from "../assets/top-view-hands-holding-world-globe.jpg"

const CrossBorderSection = () => {
  return (
    <div className="bg-[#edece8] font-[Poppins] text-gray-800 mb-0">
      {/* 🌿 Cross Border Section */}
      <section className="relative w-full h-[500px] overflow-x-hidden [clip-path:polygon(0_0,100%_0,100%_85%,0%_100%)] md:[clip-path:polygon(0_0,100%_0,100%_85%,0%_100%)]">
        <img
          src={bg}
          alt="Sustainable Agriculture"
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
         {/* Overlay Content */}
        <div className="absolute md:px-40 inset-0 bg-black/45 flex flex-col justify-center items-left text-left text-white px-6">
          <h1 className="text-2xl md:text-5xl  text-[40px] leading-[85px] font-serif font-semibold mb-3">
            Humanitarian services
          </h1>
          <p className="max-w-xl text-xl md:text-xl leading-relaxed">
            “ True leadership shines in action, not authority. Under Dr. Yedula, thousands of volunteers, millions of meals, and vital healthcare reached those in need, creating a lifeline during COVID-19.”
          </p>
        </div>

      </section>
        {/* <div className="px-20">
       <div className="items-center rounded-xl shadow-2xl justify-between flex flex-row px-20 py-10" >
            <div>
                <div className="text-left text-6xl font-bold" >Hello, I'm <br/> Krishna Yedula</div>
                <p className="text-lg mt-4" >During COVID-19, Dr. Yedula and the Cyberabad Security Council mobilized volunteers, delivered aid, coordinated plasma donors and vaccinations, and strengthened healthcare support across the region.</p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300" >Get Started</button>
            </div>
            <div>
                <img src={img} alt="Welcome" className="w-96 h-96 object-cover rounded-lg shadow-lg" />
            </div>
        </div>
        </div> */}
    </div>
  );
};

export default CrossBorderSection;
