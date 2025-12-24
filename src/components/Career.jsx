// import React, { useState, useEffect } from "react";
// import IT from "../assets/it compinies.jpg"; // make sure your filename has no spaces
// import cyber1 from "../assets/cyberSecu.jpg";
// import Womens from "./Womens";

// function Career() {
//   const cards = [
//     {
//       id: 1,
//       image: IT,
//       title: "Corporate Leadership",
//       description:
//         "Leading with innovation and strategic thinking to build sustainable business practices.",
//     },
//     {
//       id: 2,
//       image:
//         "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
//       title: "Sustainability Initiatives",
//       description:
//         "Driving environmental initiatives that balance growth with ecological responsibility.",
//     },
//     {
//       id: 3,
//       image: cyber1,
//       title: "Community Impact",
//       description:
//         "Empowering communities through outreach, education, and social responsibility projects.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="bg-gray-50 py-12 flex flex-col items-center">
//       <h2 className="text-5xl font-extrabold text-blue-600 mb-10 text-center">
//         Physical and Electronic Security
//       </h2>

//       {/* Main Auto Sliding Section */}
//       <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-white flex items-center justify-center">
//         {cards.map((card, index) => (
//           <div
//             key={card.id}
//             className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
//               index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="max-h-full max-w-full object-contain rounded-2xl transition-all duration-700"
//             />

//             {/* Text Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
//               <h3 className="text-3xl font-semibold text-white">
//                 {card.title}
//               </h3>
//               <p className="text-gray-200 mt-2">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Extra Section */}
//       <Womens />
//     </div>
//   );
// }

// export default Career;





























import React, { useState, useEffect } from "react";
import IT from "../assets/it compinies.jpg";
import cyber1 from "../assets/cyberSecu.jpg";
import Womens from "./Womens";
import Certificate from "./Certificate";
import Security from "./Security";
import CrossBorderSection from "./CrossBorderSection";
import AbdulKalam from "./AbdulKalam";
import img from "../assets/cyber1.jpeg"
import Welfare from "./Welfare";
import Lorry from "./Lorry";
import CovidWarrior from "./CovidWarrior";
import Csr from "./Csr";


function Career() {
  const cards = [
    {
      id: 1,
      image: IT,
      title: "Corporate Leadership",
      description:
        "Leading with innovation and strategic thinking to build sustainable business practices.",
    },
    {
      id: 2,
      image:
        img,
      title: "Sustainability Initiatives",
      description:
        "Driving environmental initiatives that balance growth with ecological responsibility.",
    },
    {
      id: 3,
      image: cyber1,
      title: "Community Impact",
      description:
        "Empowering communities through outreach, education, and social responsibility projects.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="">
        <CrossBorderSection />
    <div className="bg-[#edece8] py-8 sm:py-12 md:py-10 flex flex-col overflow-x-hidden items-center">
      <h2 className="text-xl sm:text-xl md:text-5xl bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent text-black text-[82px] leading-[85px] font-serif font-semibold mb-8 sm:mb-10 md:mb-12 text-center">
        Physical and Electronic Security
      </h2>

      {/* Mobile and Tablet Layout */}
      <div className="block lg:hidden relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
        <div className="relative h-80 sm:h-96">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative w-11/12 max-w-8xl h-[550px] rounded-2xl overflow-hidden shadow-2xl bg-white flex-row items-center justify-between">
        {/* LEFT SIDE: CARD CONTENT */}
        <div className="w-1/2 h-full flex flex-col justify-center p-10 bg-gradient-to-br from-blue-100 via-white to-blue-50">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-4xl font-bold text-blue-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="w-[75%] h-full relative">
          {cards.map((card, index) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div><br/><br/> </div>

      {/* Extra Section */}
          {/* <Security/> */}
        

        

        
    </div>
<Womens />
<Certificate />


<AbdulKalam />
<Welfare />
{/* <Lorry/> */}
<CovidWarrior />
<Csr />

    </div>
  );
}

export default Career;

