// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import c1 from "../assets/Certificate/certificate.jpg";
// import c2 from "../assets/Certificate/cyberCertificate.jpg";
// import c3 from "../assets/Certificate/cyberSecuCouncil.jpg";

// const certificates = [
  
//   {
//     img: c1,
//     title: "Ethical Hacking & Penetration Testing",
//     issuer: "Udemy",
//     description:
//       "Certified for completing an advanced ethical hacking and penetration testing course, including vulnerability scanning, exploitation, and security assessment techniques.",
//   },
//    {
//     img: c2,
//     title: "PLASMA YODHA",
//     issuer: "CERTIFICATE OF APPRECIATION",
//     description:
//       "This certificate is awarded to the contributor for donating Plasma and supporting recovery of COVID-19 patients during the pandemic.",
//   },
//   {
//     img: c3,
//     title: "Cyber Security Council Certification",
//     issuer: "Cyber Security Council of India",
//     description:
//       "Awarded for demonstrated understanding of national cybersecurity standards, incident handling, and security framework implementation.",
//   },
// ];

// export default function Certificate() {
//   return (
//     <div className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

//       {/* Gradient Background Blobs */}
      

//       <h2 className="text-5xl italic font-serif font-semibold text-gray-900 mb-16 text-center">
//         Certificates
//       </h2>

//       <div className="flex flex-col items-center space-y-16 px-6 sm:px-10">
//         {certificates.map((item, index) => (
//           <AnimatedCard key={index} item={item} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function AnimatedCard({ item, index }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ y: 100, opacity: 0, scale: 0.95 }}
//       animate={
//         isInView
//           ? { y: 0, opacity: 1, scale: 1 }
//           : { y: 100, opacity: 0, scale: 0.95 }
//       }
//       transition={{
//         duration: 0.9,
//         delay: index * 0.2,
//         ease: [0.25, 0.1, 0.25, 1],
//       }}
//       className="relative bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl hover:shadow-2xl transition-all duration-300 border-[5px] border-[#ede6de]"
//     >
//       {/* Image Section */}
//       <div className="md:w-1/2 w-full overflow-hidden flex justify-center items-center bg-gray-100">
//         <img
//           src={item.img}
//           alt={item.title}
//           className="w-full h-[350px] object-contain md:object-cover hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Content Section */}
//       <div className="md:w-1/2 w-full p-8 flex flex-col justify-center text-center md:text-left">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//           {item.title}
//         </h3>
//         <p className="text-sm text-blue-600 font-medium mb-4">{item.issuer}</p>
//         <p className="text-gray-600 leading-relaxed">{item.description}</p>
//       </div>
//     </motion.div>
//   );
// }

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";


import c2 from "../assets/Certificate/certificate.jpg";
import c1 from "../assets/Certificate/cyberCertificate.jpg";
import c3 from "../assets/Certificate/cyberSecuCouncil.jpg";
// import ab from "../assests/logoo14.jpg";
// import abc from "../assests/logoo15.jpg";

// ---------- Certificate Data ----------
const certificates = [
  {
    img: c1,
    title: "Ethical Hacking & Penetration Testing",
    issuer: "Udemy",
    description:
      "Certified for completing an advanced ethical hacking and penetration testing course, including vulnerability scanning, exploitation, and security assessment techniques.",
  },
  {
    img: c2,
    title: "PLASMA YODHA",
    issuer: "Certificate of Appreciation",
    description:
      "This certificate is awarded to the contributor for donating Plasma and supporting recovery of COVID-19 patients during the pandemic.",
  },
  {
    img: c3,
    title: "Cyber Security Council Certification",
    issuer: "Cyber Security Council of India",
    description:
      "Awarded for demonstrated understanding of national cybersecurity standards, incident handling, and security framework implementation.",
  },
];

// ---------- Main Component ----------
export default function CertificateAndKalam() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* ----------------- CERTIFICATES SECTION ----------------- */}
      <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden w-full">
        <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-[#101e46] to-[#3f71d1] bg-clip-text text-transparent text-[40px] -mt-10 leading-[85px] font-serif font-semibold mb-16 text-center">
          Certificates
        </h2>

        {/* Increased space between cards */}
        <div className="flex flex-col items-center mt-10 space-y-52 px-6 sm:px-10">
          {certificates.map((item, index) => (
            <AnimatedCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ----------------- ABDUL KALAM SECTION ----------------- */}
      {/* <section className="w-full bg-gradient-to-b mt-40 from-[#0d1a3a] via-[#274d8a] to-[#5ba6ff] text-black py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          WINGS OF FIRE LEGACY
        </h1>

        
        <div className="flex items-center justify-center mr-10 py-12 gap-10 px-4 flex-wrap">
          <img
            src={}
            alt="Vice President Event"
            className="w-[350px] h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <img
            src={abc}
            alt="Abdul Kalam Event"
            className="w-[550px] h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        
        <div className="flex flex-col items-center text-center mb-10 px-6 sm:px-12 md:px-20">
          <p className="text-white text-lg max-w-5xl leading-relaxed">
            It was an absolute honour to be part of the launch event of the new
            and expanded edition of the book “Wings of Fire” by Dr. Arun Tiwari,
            commemorating the 94th Birth Anniversary of Dr. APJ Abdul Kalam,
            Former President of India, held at IIIT Hyderabad. A moment of pride
            and inspiration, and an incredible experience listening to Sri VC
            Sajjanar, IPS, Commissioner of Police Hyderabad.
          </p>
        </div>
      </section> */}
    </div>
  );
}

// ---------- Animated Certificate Card Component ----------
function AnimatedCard({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  // Scroll-based tilt animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // 🟢 Tilt from 0° to -10° (left tilt only)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-stretch gap-3 w-full max-w-6xl"
    >
      {/* Image Card */}
      <motion.div
        style={{
          rotate, // scroll-based left tilt only
          transformPerspective: 1000,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="w-full md:w-1/2 h-[350px] bg-white shadow-xl rounded-2xl overflow-hidden flex justify-center items-center hover:shadow-2xl transition-transform duration-500"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 h-[400px] bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center hover:shadow-2xl transition-all duration-300"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-3">
          {item.title}
        </h3>
        <p className="text-lg text-blue-600 font-medium mb-4">{item.issuer}</p>
        <p className="text-gray-600 leading-relaxed text-lg">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}