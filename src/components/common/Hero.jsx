import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ subheading, heading, primaryText, description,image,btnText,btnType , orderReverse}) => {
  return (
    <div 
    className="flex flex-col md:flex-row items-center justify-between ">
      <motion.div 
      initial = {{opacity:0,x:-200}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}

      className={`left md:w-[529px] ${orderReverse && 'md:order-last'} order-first`}>
        <span className="text-[#FF70AE] text-[16px] italic font-[600]">{subheading}</span>
        <h1 className="text-[#1A202C] text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize">
          {heading} <span className="text-secondary">{primaryText}</span>{" "}
        </h1>
        <p className="text-[#1A202CA3] font-[400] leading-[32px] text-justify">{description}</p>
        <div className="mt-[40px]">
        <Link to="/" className={` md:w-[211px] text-center ${btnType}`}>{btnText}</Link>
        </div>
      </motion.div>
      <div className="right mt-10 md:0 overflow-x-hidden">
            <motion.img 
            viewport={{once:true}}
            initial={
              {opacity:0,x:200}
            }
            whileInView={
              {opacity:1,x:0}
            }
            transition={{duration:1.2}}
            src={`./${image}`} className="md:w-[524px] md:h-[524px]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
