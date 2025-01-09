// import React from "react";
// import AnimateButton from "./Button";

// function Products() {
//   return (
//     <>
//       <div className="h-[750px] bg-gradient-radial content-center">
//         <div className="text-center font-Merri">
//           <h1 className="text-gray-400 text-2xl">Products</h1>
//           <h1 className="text-yellow-400 text-5xl">We Deals In</h1>
//         </div>
//         <div className="flex mt-6 ml-36 text-xl font-Merri">
//           <div className="bg-yellow-400 w-36 h-12 text-center items-center font-bold">
//             Gold Bars
//           </div>
//           {/* <div className="bg-gray-400 w-36 h-12 text-center">Silver Bars</div> */}
//         </div>
//         <div className="flex justify-center font-Merri">
//           <div className="flex justify-center mb-4">
//             <div className="card bg-[#1C1C1C] text-primary-content w-5/6 ml-20 rounded-none">
//               <div className="card-body w-1/2">
//                 <h2 className="card-title text-4xl text-yellow-600">
//                   Gold Bars
//                 </h2>
//                 <p className="">
//                   Dijllah Jewellery was established in 2005 with an office based
//                   in the Gold House Building located in Delra's famous gold
//                   souk. Dubai with a focus on wholesale Jewellery trading.
//                 </p>
//                 <div class="grid grid-cols-3">
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>One Kilo Bars</span>
//                   </div>
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>Large Bars</span>
//                   </div>
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>Gold Grains</span>
//                   </div>
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>Half Kilo Bars</span>
//                   </div>
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>TT Bars</span>
//                   </div>
//                   <div class="flex items-center space-x-2">
//                     <div class="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
//                     <span>Quarter Kilo Bars</span>
//                   </div>
//                   <div class="flex w-60 items-center">
//                     <AnimateButton />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center relative right-52">
//             <img
//               className="rounded-full"
//               src="https://www.shutterstock.com/image-photo/gold-bar-on-shiny-silk-260nw-2308556671.jpg"
//             />
//           </div>
//         </div>
//       </div>
//       <hr className="border-[#D2BA57]" />
//     </>
//   );
// }

// export default Products;
import React from "react";
import AnimateButton from "./Button";

function Products() {
  return (
    <>
      <div className="min-h-screen bg-gradient-radial content-center py-10">
        {/* Header Section */}
        <div className="text-center font-Merri space-y-4 px-4">
          <h1 className="text-gray-400 text-lg md:text-2xl">Products</h1>
          <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold">
            We Deal In
          </h1>
        </div>

        {/* Product Buttons Section */}
        <div className="flex justify-center mt-6 text-lg md:text-xl font-Merri space-x-4">
          <div className="bg-yellow-400 px-4 py-2 text-center font-bold rounded-md">
            Gold Bars
          </div>
          {/* Uncomment and style additional buttons as needed */}
          {/* <div className="bg-gray-400 px-4 py-2 text-center rounded-md">
            Silver Bars
          </div> */}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:ml-20 mt-10 space-y-10 md:space-y-0 px-4">
          {/* Card Section */}
          <div className="bg-[#1C1C1C] lg:flex text-primary-content md:w-3/4 w-full p-6 md:p-10 rounded-md shadow-md">
            <div>
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-yellow-600 text-2xl md:text-4xl font-bold">
                  Gold Bars
                </h2>
                <p className="text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-gray-300">
                {[
                  "Product One",
                  "Product Two",
                  "Product Three",
                  "Product Four",
                  "Product Five",
                  "Product Six",
                ].map((item) => (
                  <div className="flex items-center space-x-2" key={item}>
                    <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start mt-6">
                <AnimateButton />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:ml-2">
            <img
              className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover"
              src="https://www.shutterstock.com/image-photo/gold-bar-on-shiny-silk-260nw-2308556671.jpg"
              alt="Gold Bars"
            />
          </div>

          {/* Image Section */}
        </div>
      </div>
      <hr className="border-[#D2BA57]" />
    </>
  );
}

export default Products;
