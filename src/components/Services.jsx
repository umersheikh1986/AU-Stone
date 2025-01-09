// import React from "react";
// import AnimateButton from "./Button";

// function Services() {
//   return (
//     <>
//       <div className="flex w-full h-[700px] bg-gradient-radial items-center justify-center font-Merri">
//         <div className="w-2/5">
//           <img className="w-96" src="/Gold-bar-pic.png" />
//         </div>
//         <div className="w-1/3 gap-2">
//           <h1 className="text-gray-400 text-2xl">Services</h1>
//           <h1 className="text-yellow-400 text-5xl">We Deals In</h1>
//           <p className="mt-2 text-gray-400">
//             Dijllah Jewellery was established in 2005 with an office based in
//             the Gold House Building located in Delra's famous gold souk. Dubai
//             with a focus on wholesale Jewellery trading.
//           </p>
//           <div class="flex items-center mt-4 space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">
//               ORC hanging and price risk management
//             </span>
//           </div>
//           <div class="flex items-center space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">Trading in Gold Bars</span>
//           </div>
//           <div class="flex items-center space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">Trading in Silver Bars</span>
//           </div>
//           <div class="flex items-center space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">Discover Gold Jewllery</span>
//           </div>
//           <div class="flex items-center space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">Purchase in limited amount</span>
//           </div>
//           <div class="flex items-center space-x-2">
//             <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//             <span className="text-white">Product with Guarantee</span>
//           </div>
//           <AnimateButton />
//         </div>
//       </div>
//       <hr className="border-[#D2BA57]" />
//     </>
//   );
// }

// export default Services;
import React from "react";
import AnimateButton from "./Button";

function Services() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-radial font-Merri p-6 md:p-12 space-y-10 md:space-y-0">
        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="w-48 md:w-72 lg:w-96 object-contain"
            src="/Gold-bar-pic.png"
            alt="Gold Bar"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-gray-400 text-lg md:text-2xl">Services</h1>
          <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold">
            We Deal In
          </h1>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="space-y-2">
            {[
              "First Service",
              "Second Service",
              "Third Service",
              "Fourth Service",
              "Fifth Service",
              "Sixth Service",
            ].map((service) => (
              <div
                className="flex items-center space-x-2 text-sm md:text-base"
                key={service}
              >
                <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <span className="text-white">{service}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <AnimateButton />
          </div>
        </div>
      </div>
      <hr className="border-[#D2BA57]" />
    </>
  );
}

export default Services;
