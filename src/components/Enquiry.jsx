// import React from "react";

// function Enquiry() {
//   return (
//     <>
//       <div className="flex flex-wrap justify-center bg-gradient-radial content-center items-center gap-4 h-[200px] font-Merri">
//         <h1 className="text-yellow-400 text-5xl font-Merri">Enquiry Now</h1>
//         <input
//           type="text"
//           placeholder="Type Name"
//           className="input input-bordered input-warning bg-black text-white w-full max-w-xs"
//         />
//         <input
//           type="text"
//           placeholder="Type Email"
//           className="input input-bordered input-warning bg-black text-white w-full max-w-xs"
//         />
//         <input
//           type="text"
//           placeholder="Message"
//           className="input input-bordered input-warning bg-black text-white w-full max-w-xs"
//         />
//         <button className="btn btn-warning">Submit</button>
//       </div>
//     </>
//   );
// }

// export default Enquiry;
import React from "react";

function Enquiry() {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center bg-gradient-radial gap-4 py-10 px-4 font-Merri">
        {/* Heading */}
        <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold text-center md:mr-6 w-full md:w-auto">
          Enquiry Now
        </h1>

        {/* Input Fields */}
        <div className="flex md:flex-row flex-wrap justify-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Type Name"
            className="input input-bordered input-warning bg-black text-white w-full md:w-auto max-w-xs"
          />
          <input
            type="text"
            placeholder="Type Email"
            className="input input-bordered input-warning bg-black text-white w-full md:w-auto max-w-xs"
          />
          <input
            type="text"
            placeholder="Message"
            className="input input-bordered input-warning bg-black text-white w-full md:w-auto max-w-xs"
          />
        </div>

        {/* Submit Button */}
        <div className="w-72 sm:w-auto flex justify-center mt-4 md:mt-0">
          <button className="btn btn-warning w-full md:w-auto">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
