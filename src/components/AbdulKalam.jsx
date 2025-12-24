
import React from "react";
import ab from "../assets/vice-president.jpeg";
import abc from "../assets/Abdul.jpeg";

function AbdulKalam() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600 via-white via-blue-100 to-white/50 text-black py-16 flex flex-col items-center justify-center">
              <h1 className="text-3xl text-center  text-white text-black text-[48px] leading-[85px] font-serif font-semibold mb-3">WINGS OF FIRE LEGACY</h1>
    
    <div className="flex items-center justify-center py-12 gap-10 px-4 flex-wrap">
        
        <img
          src={ab}
          alt="Event 1"
          className="w-[350px] h-[400px] object-cover rounded-2xl shadow-xl"
        />
        <img
          src={abc}
          alt="Event 2"
          className="w-[550px] h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      <div className="flex flex-col items-center text-center mb-10 px-4">
        <p className="text-black-300 text-lg max-w-4xl text-left">
          It was an absolute honour to be part of the launch event of the new and expanded edition of the book “Wings of Fire” by Dr. Arun Tiwari, commemorating the 94th Birth Anniversary of Dr. APJ Abdul Kalam, Former President of India, held at IIIT Hyderabad. A moment of pride and inspiration, and an incredible experience listening to Sri VC Sajjanar, IPS, Commissioner of Police Hyderabad.
        </p>
      </div>

      {/* Two images side by side */}
      

    </section>
  );
}

export default AbdulKalam;
