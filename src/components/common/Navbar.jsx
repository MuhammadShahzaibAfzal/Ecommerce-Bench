import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-[36px]">
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <Link to="/">
          <img src="./logo.png" className="w-32 md:w-48  h-auto flex-shrink-0 " alt="logo" />
        </Link>
        {/* LINKS */}
        <div className="links text-[#1A202C] text-[20px] hidden md:block">
          <Link
            to="/"
            className="mx-[18px] transition-all py-[12px] border-b  border-transparent  hover:border-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mx-[18px] transition-all py-[12px] border-b  border-transparent  hover:border-primary"
          >
            About
          </Link>
          <Link
            to="/services"
            className="mx-[18px] transition-all py-[12px] border-b  border-transparent  hover:border-primary"
          >
            Services
          </Link>
          <Link
            to="/"
            className="mx-[18px] transition-all py-[12px] border-b  border-transparent  hover:border-primary"
          >
            Training
          </Link>
        </div>

        {/* Button */}
        <Link
          to="/contact"
          className="btn hidden md:block"
        >
          Contact Us
        </Link>

        {/* Hamburger ICon */}
        <div className="bg-[#F6F7FB] w-[48px] h-[48px] rounded-full flex items-center justify-center  md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 8H22" stroke="#1A202C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 16H22" stroke="#1A202C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
