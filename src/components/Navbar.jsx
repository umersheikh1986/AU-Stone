"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hover, setHover] = useState(false);

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <nav className="bg-transparent lg:h-[90px] md:h-[145px] opacity-80 font-san w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              {/* <img
                src="/Agua-logo1.png"
                className="h-16 w-24 md:h-20 md:w-28 lg:pr-4 sm:mr-0"
                alt="Flowbite Logo"
              /> */}
              <h1 className="text-white text-2xl font-Merri">AU Stone</h1>
            </Link>
          </div>

          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isNavbarOpen ? "block" : "hidden"
            } md:flex items-center justify-between w-full md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium text-white text-lg rounded-lg  md:flex-row md:mt-0 md:border-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3  font-Merri hover:text-[#AF820E]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 font-Merri hover:text-[#AF820E]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="block py-2 px-3 font-Merri hover:text-[#AF820E]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/trade"
                  className="block py-2 px-3 font-Merri hover:text-[#AF820E]"
                >
                  Open Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
