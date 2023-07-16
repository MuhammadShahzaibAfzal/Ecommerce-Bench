import React from "react";

const JoinUs = () => {
  return (
    <div className=" text-center bg-gradient-to-r p-5 md:py-24 md:px-48  from-[#c5c3f5] to-[#eba5c3] rounded-xl mt-[100px]">
      <div>
        <span className="text-[#FF70AE] text-[16px] italic font-[600]">
          Newsletter
        </span>
        <h1 className="text-white text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize">
          Join us to Stay Updated
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center  justify-center gap-4 mt-6">
        {/* input */}
        <div className="search-box bg-white flex items-center py-4 gap-2 px-4  rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clip-path="url(#clip0_1888_6097)">
              <path
                d="M19 5.5H5C3.89543 5.5 3 6.39543 3 7.5V17.5C3 18.6046 3.89543 19.5 5 19.5H19C20.1046 19.5 21 18.6046 21 17.5V7.5C21 6.39543 20.1046 5.5 19 5.5Z"
                stroke="#1A202C"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 7.5L12 13.5L21 7.5"
                stroke="#1A202C"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1888_6097">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <input
            type="email"
            placeholder="Email"
            className="outline-none text-md md:text-xl lg:w-96 "
          />
        </div>
        <button className="btn-secondary">Sign Up</button>
      </div>
    </div>
  );
};

export default JoinUs;
