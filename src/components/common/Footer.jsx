import React from "react";

const Footer = () => {
  return (
    <div className="container mt-[100px] text-center md:text-justify">
      <div className=" flex flex-col space-y-6 md:space-y-0  md:flex-row items-start  justify-between mb-10 text-xl text-textGray">
        <div className="mx-auto md:mx-0">
          <img src="./logo.png" className="w-48 h-auto flex-shrink-0" alt="" />
          <div className="social-links flex space-x-3 mt-7">
            <a href="#" target="_blank" className="p-2 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" fill="white" />
                <path
                  d="M10.3003 25.7726L10.0813 25.6769L9.84725 25.7256L6.35155 26.4528C6.04114 26.5174 5.74978 26.2804 5.74972 25.9634L5.74908 22.4999L5.74904 22.2496L5.59876 22.0496C4.12374 20.0858 3.25 17.646 3.25 15C3.25 8.51065 8.51065 3.25 15 3.25C21.4893 3.25 26.75 8.51065 26.75 15C26.75 21.4893 21.4893 26.75 15 26.75C13.3275 26.75 11.7385 26.401 10.3003 25.7726Z"
                  fill="white"
                  stroke="#1A202C"
                  stroke-width="1.5"
                />
                <path
                  d="M11.8158 12.2218L8.37758 17.1335C8.22931 17.3453 8.2545 17.633 8.43733 17.8159C8.61693 17.9955 8.89834 18.0233 9.10968 17.8825L11.8247 16.0724C12.2335 15.7999 12.764 15.7921 13.1806 16.0525L16.4901 18.1209C17.054 18.4734 17.7952 18.3226 18.1766 17.7778L21.6148 12.866C21.7631 12.6542 21.7379 12.3665 21.5551 12.1836C21.3755 12.004 21.0941 11.9762 20.8827 12.1171L18.1677 13.9271C17.7589 14.1996 17.2284 14.2074 16.8118 13.947L13.5023 11.8786C12.9384 11.5261 12.1972 11.6769 11.8158 12.2218Z"
                  fill="#1A202C"
                />
              </svg>
            </a>
            <a href="#" className="p-2 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" fill="white" />
                <path
                  d="M3.75 8.75C3.75 5.98858 5.98858 3.75 8.75 3.75H21.25C24.0114 3.75 26.25 5.98858 26.25 8.75V21.25C26.25 24.0114 24.0114 26.25 21.25 26.25H8.75C5.98858 26.25 3.75 24.0114 3.75 21.25V8.75Z"
                  fill="white"
                  stroke="#1A202C"
                  stroke-width="1.5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.875 9.375C22.5654 9.375 23.125 8.81536 23.125 8.125C23.125 7.43464 22.5654 6.875 21.875 6.875C21.1846 6.875 20.625 7.43464 20.625 8.125C20.625 8.81536 21.1846 9.375 21.875 9.375ZM12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5C13.6193 17.5 12.5 16.3807 12.5 15ZM15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10Z"
                  fill="#1A202C"
                />
              </svg>
            </a>

            <a href="#" className="p-2 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" fill="white" />
                <path
                  d="M26.75 15C26.75 21.4893 21.4893 26.75 15 26.75C8.51065 26.75 3.25 21.4893 3.25 15C3.25 8.51065 8.51065 3.25 15 3.25C21.4893 3.25 26.75 8.51065 26.75 15Z"
                  fill="white"
                  stroke="#1A202C"
                  stroke-width="1.5"
                />
                <path
                  d="M15.7109 27.3602C15.2998 27.401 14.8828 27.4219 14.4609 27.4219C14.0391 27.4219 13.6221 27.401 13.2109 27.3602V17.4219H11.9609C11.2706 17.4219 10.7109 16.8622 10.7109 16.1719C10.7109 15.4815 11.2706 14.9219 11.9609 14.9219H13.2109V12.4219C13.2109 10.3508 14.8899 8.67188 16.9609 8.67188H18.2109C18.9013 8.67188 19.4609 9.23152 19.4609 9.92188C19.4609 10.6122 18.9013 11.1719 18.2109 11.1719H16.9609C16.2706 11.1719 15.7109 11.7315 15.7109 12.4219V14.9219H18.2109C18.9013 14.9219 19.4609 15.4815 19.4609 16.1719C19.4609 16.8622 18.9013 17.4219 18.2109 17.4219H15.7109V27.3602Z"
                  fill="#1A202C"
                />
              </svg>
            </a>

            <a href="#" className="p-2 rounded-xl shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <rect width="30" height="30" fill="white" />
                <path
                  d="M24.9999 10.0022V10L27.3437 7.4709C27.7257 7.05868 27.3822 6.39454 26.825 6.46823L23.8885 6.8566C22.9718 5.72408 21.5704 5 19.9999 5C17.2385 5 14.9999 7.23858 14.9999 10C14.9999 10.6593 15.1275 11.2888 15.3594 11.8651C16.1177 13.75 14.4456 16.875 11.2497 20C9.83056 21.3875 6.18259 21.7643 3.19732 21.4909C2.6164 21.4377 2.25171 22.0995 2.70094 22.4716C5.2041 24.5452 8.67582 25 11.8748 25C19.9989 25 25.6236 18.1262 24.9999 10.0022Z"
                  fill="white"
                  stroke="#1A202C"
                  stroke-width="1.5"
                />
                <path
                  d="M11.2471 20.0001C5.55841 18.2935 2.97639 11.927 4.44356 7.02696C4.60327 6.49355 5.32257 6.5223 5.57307 7.01959C7.75799 11.3571 12.2089 11.8751 15.6229 11.8751C23.1229 11.8751 21.2479 23.0004 11.2471 20.0001Z"
                  fill="#1A202C"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-auto md:mx-0 space-y-4">
          <p className="font-bold">Services</p>
          <a href="#">Amazon</a>
          <a href="#">Ebay</a>
          <a href="#">Walmart</a>
          <a href="#">Shopify</a>
          <a href="#">Web Development</a>
          <a href="#">Digital Marketing</a>
          <a href="#">Graphic Designing</a>
          <a href="#">Customer Services</a>
        </div>

        <div className="flex flex-col space-y-4 mx-auto md:mx-0">
          <p className="font-bold">More Links</p>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Training</a>
        </div>
        <div className="flex flex-col space-y-4 mx-auto md:mx-0">
          <p className="font-bold">Contact Us</p>
          <div className="flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1950_1428)">
                <path
                  d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 7C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3C16.5913 3 18.1174 3.63214 19.2426 4.75736C20.3679 5.88258 21 7.4087 21 9"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1950_1428">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>+4934974374337</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1950_1428)">
                <path
                  d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 7C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3C16.5913 3 18.1174 3.63214 19.2426 4.75736C20.3679 5.88258 21 7.4087 21 9"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1950_1428">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>+4934974374337</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1888_6168)">
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="#1A202C"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="#1A202C"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1888_6168">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>abcd@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1888_6176)">
                <path
                  d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.657 16.6572L13.414 20.9002C13.039 21.2748 12.5306 21.4853 12.0005 21.4853C11.4704 21.4853 10.962 21.2748 10.587 20.9002L6.343 16.6572C5.22422 15.5384 4.46234 14.1129 4.15369 12.5611C3.84504 11.0092 4.00349 9.40071 4.60901 7.93893C5.21452 6.47714 6.2399 5.22774 7.55548 4.3487C8.87107 3.46967 10.4178 3.00049 12 3.00049C13.5822 3.00049 15.1289 3.46967 16.4445 4.3487C17.7601 5.22774 18.7855 6.47714 19.391 7.93893C19.9965 9.40071 20.155 11.0092 19.8463 12.5611C19.5377 14.1129 18.7758 15.5384 17.657 16.6572Z"
                  stroke="#1A202C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1888_6176">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Office: Jhelum City </span>
          </div>
        </div>
      </div>
      <hr className="bg-textGray h-0.5" />
      <div className="text-textGray text-center my-6">
        <span className="text-xl">
      Ecom Innovation © 2023. All Rights Reserved | Privacy policy
        </span>
      </div>
    </div>
  );
};

export default Footer;
