import React from "react";

const AnimateButton = () => {
  return <DrawOutlineButton>EXPLORE MORE</DrawOutlineButton>;
};
const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 h-14 gap-10 font-medium text-gray-400 transition-colors duration-[400ms] hover:text-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#CFB302] transition-all duration-100  group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#CFB302] transition-all delay-100  duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#CFB302] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#CFB302] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default AnimateButton;
