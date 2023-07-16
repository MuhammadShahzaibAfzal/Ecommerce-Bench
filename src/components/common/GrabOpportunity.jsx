import React from 'react';
import { Link } from 'react-router-dom';

const GrabOpportunity = () => {
  return (
    <div className="text-center mx-3 mt-[100px]">
        <h1 className="text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize text-textColor">
          Grab The Right Opportunity{" "}
          <span className="text-secondary">Now !</span>
        </h1>
        <div className="max-w-[1139px]   mx-auto">
          <span className="text-sm md:text-lg text-textGray font-[400] leading-8">
            We offers free-of-charge initial E-Commerce consultation. Get expert
            advice and guidance for your E-Commerce business beyond success.
            Speak with our team of E-Commerce industry experts, and we can help
            you reach new heights in the digital marketplace.
          </span>
        </div>
        <div className="mt-10">
          <Link className=" btn ">Request A Consultation</Link>
        </div>
      </div>
  )
}

export default GrabOpportunity