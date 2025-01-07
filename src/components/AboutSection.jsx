// import React from "react";
// import AnimateButton from "./Button";

// function AboutSection() {
//   return (
//     <>
//       <div className="h-[900px] content-center bg-gradient-radial">
//         <div className="flex justify-center relative top-20 font-Merri">
//           <div className="w-96 mt-20">
//             <h1 className="text-gray-400">About the Company</h1>
//             <h1 className="text-yellow-400 text-4xl">
//               We provide Bespoke Gold Services
//             </h1>
//           </div>
//           <div className="rounded-full h-[400px] w-1/4 border mt-4 border-yellow-500">
//             <img
//               className="rounded-full h-[350px] mt-6 ml-7"
//               src="https://5.imimg.com/data5/SELLER/Default/2024/9/449944353/QH/WP/AH/60560932/99-5-purity-gold-bars-1kg-500x500.jpg"
//             />
//           </div>
//         </div>

//         <div className="flex justify-end relative right-52 gap-20">
//           <div className="rounded-full h-[300px] w-1/5 border border-yellow-500">
//             <img
//               className="rounded-full h-[250px] w-[250px] ml-9 mt-6"
//               src="https://images.unsplash.com/photo-1718752773195-c19c1c329156?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D"
//             />
//           </div>
//           <div className="text-gray-100 w-96 mb-10 font-Merri">
//             <h1>
//               One of our most important company assets is our reputation for
//               Ethical Behaviour, Honesty and Fair Transactions.
//             </h1>
//             <h1>
//               Dijllah Jewellery was established in 2005 with an office based in
//               the Gold House Building located in Deira's famous gold souk. Dubai
//               with a focus on wholesale Jewellery trading
//             </h1>
//             <AnimateButton />
//           </div>
//         </div>
//       </div>
//       <hr className="border-[#D2BA57]" />
//     </>
//   );
// }

// export default AboutSection;

import React from "react";
import AnimateButton from "./Button";

function AboutSection() {
  return (
    <>
      <div className="min-h-screen content-center bg-gradient-radial">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-start relative top-10 px-4 md:px-20 space-y-10 md:space-y-0">
          {/* Text Content */}
          <div className="text-center w-full md:w-1/2 space-y-4">
            <h1 className="text-gray-400 text-lg">About the Company</h1>
            <h1 className="text-yellow-400 text-2xl md:text-4xl font-bold">
              We provide Bespoke Gold Services
            </h1>
          </div>
          {/* Image */}
          <div className="flex justify-center md:justify-start w-full md:w-1/3">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-yellow-500 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/449944353/QH/WP/AH/60560932/99-5-purity-gold-bars-1kg-500x500.jpg"
                alt="Gold Bars"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-end relative px-4 md:px-20 space-y-10 md:space-y-0">
          {/* Text Content */}
          {/* Image */}
          <div className="flex justify-center md:justify-end w-full md:w-1/3">
            <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-yellow-500 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1718752773195-c19c1c329156?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Gold Bars"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-gray-100 space-y-4 text-center md:text-left font-Merri">
            <h1>
              One of our most important company assets is our reputation for
              Ethical Behaviour, Honesty and Fair Transactions.
            </h1>
            <h1>
              Dijllah Jewellery was established in 2005 with an office based in
              the Gold House Building located in Deira's famous gold souk.
              Dubai, with a focus on wholesale Jewellery trading.
            </h1>
            <div className="flex justify-center md:justify-start">
              <AnimateButton />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#D2BA57]" />
    </>
  );
}

export default AboutSection;
