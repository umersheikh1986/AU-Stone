import React from "react";
import Navbar from "./Navbar";
import AnimateButton from "./Button";

function HeroSection() {
  return (
    <>
      <div className="relative h-[780px]">
        <img
          src="/New-heroImage.png"
          className="absolute top-0 left-0 w-full h-[780px] z-0"
        />
        <Navbar />
        <div className="relative z-10 flex flex-col max-w-full h-auto max-h-[800px] mb-40 sm:max-h-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow overflow-x-hidden ">
            <div className="flex w-5/6 flex-col justify-center mt-20 sm:p-10 ml-14 md:ml-20 rounded-lg  md:mt-10 bg-[url('')] bg-no-repeat  bg-cover ">
              <h2 className="text-md text-amber-900 font-semibold mb-2 font-Merri">
                WELCOME TO
              </h2>
              <h2 className="text-7xl font-semibold font-Merri bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509] bg-clip-text text-transparent">
                Dijllah Gold
              </h2>

              <p className="text-sm sm:text-md md:text-lg mt-4 font-Merri text-gray-200 leading-relaxed font-roboto">
                One of our most important company assets is our reputation for
                ethical behaviour, honesty and fair transaction
              </p>
              <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2 sm:gap-4">
                <AnimateButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#D2BA57]" />
    </>
  );
}

export default HeroSection;
