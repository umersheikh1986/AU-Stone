// import React from "react";
// import { FaFacebookF } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
// import { FaLinkedinIn } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div className="w-full overflow-x-hidden font-san">
//       <footer className=" w-full text-white bg-gold-silver">
//         <div className="  max-w-full  p-12    bg-white bg-opacity-10 backdrop-blur-sm overflow-x-hidden  py-6 lg:py-16">
//           <div className="md:flex md:justify-between">
//             <div className="mb-6 gap-6 md:mb-0">
//               <a href="/" className=" ">
//                 <h1 className="text-center text-5xl font-Merri">Dijllah</h1>
//               </a>
//               <hr className="mt-4" />
//               <p className="mt-4 font-Merri text-center">
//                 {" "}
//                 The Focus Of Our Business
//                 <br /> Is Wholesale Jewllery
//                 <br /> Trading in Dubai
//               </p>
//               <hr className="mt-4" />
//               <div className="flex gap-4 mt-6 font-Merri">
//                 <p>Follow Us</p>
//                 <FaFacebookF />
//                 <GrInstagram />
//                 <FaLinkedinIn />
//               </div>
//             </div>
//             <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-6 ">
//               <div>
//                 <h2 className="mb-6 font-semibold font-Merri text-yellow-500  text-lg ">
//                   QUICK LINKS
//                 </h2>
//                 <ul className=" text-white font-Merri text-base font-medium">
//                   <li className="mb-4">
//                     <a href="/" className="hover:underline">
//                       Home
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="/about" className="hover:underline">
//                       About Us
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="/docs" className="hover:underline">
//                       Products
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a
//                       href="https://tailwindcss.com/"
//                       className="hover:underline"
//                     >
//                       Services
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a
//                       href="https://tailwindcss.com/"
//                       className="hover:underline"
//                     >
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h2 className="mb-6  font-semibold  font-Merri text-lg text-yellow-500">
//                   PRODUCTS
//                 </h2>
//                 <ul className="font-Merri font-medium">
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline">
//                       Gold Bars
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline">
//                       Silver Bars
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline">
//                       Gold Trading
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h2 className="mb-6  font-semibold  font-Merri text-lg text-yellow-500">
//                   LOCATION
//                 </h2>
//                 <ul className="font-Merri font-medium">
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline flex gap-2">
//                       <MdEmail className="text-yellow-500" />
//                       dijllah@gmail.com
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline flex gap-2">
//                       <FaPhoneAlt className="text-yellow-500" />
//                       +971 2431 769
//                     </a>
//                   </li>
//                   <li className="mb-4">
//                     <a href="#" className="hover:underline flex gap-2">
//                       <FaLocationDot className="text-yellow-500" />
//                       24/7 Gold
//                       <br /> sector building
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full overflow-x-hidden font-san">
      <footer className="w-full text-white bg-gold-silver">
        <div className="p-6 md:p-12 bg-white bg-opacity-10 backdrop-blur-sm py-6 md:py-16">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <a href="/" className="">
                <h1 className="text-3xl md:text-5xl font-Merri">Dijllah</h1>
              </a>
              <hr className="mt-4" />
              <p className="mt-4 font-Merri">
                The Focus Of Our Business
                <br /> Is Wholesale Jewellery
                <br /> Trading in Dubai
              </p>
              <hr className="mt-4" />
              <div className="flex justify-center md:justify-start gap-4 mt-6 font-Merri">
                <p>Follow Us</p>
                <FaFacebookF />
                <GrInstagram />
                <FaLinkedinIn />
              </div>
            </div>

            {/* Quick Links, Products, and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
              {/* Quick Links */}
              <div>
                <h2 className="mb-6 font-semibold font-Merri text-lg text-yellow-500">
                  QUICK LINKS
                </h2>
                <ul className="text-white font-Merri text-base font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/docs" className="hover:underline">
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h2 className="mb-6 font-semibold font-Merri text-lg text-yellow-500">
                  PRODUCTS
                </h2>
                <ul className="text-white font-Merri text-base font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Gold Bars
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Silver Bars
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Gold Trading
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h2 className="mb-6 font-semibold font-Merri text-lg text-yellow-500">
                  LOCATION
                </h2>
                <ul className="text-white font-Merri text-base font-medium">
                  <li className="mb-4 flex items-center gap-2">
                    <MdEmail className="text-yellow-500" />
                    <span>dijllah@gmail.com</span>
                  </li>
                  <li className="mb-4 flex items-center gap-2">
                    <FaPhoneAlt className="text-yellow-500" />
                    <span>+971 2431 769</span>
                  </li>
                  <li className="mb-4 flex items-center gap-2">
                    <FaLocationDot className="text-yellow-500" />
                    <span>
                      24/7 Gold
                      <br /> Sector Building
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
