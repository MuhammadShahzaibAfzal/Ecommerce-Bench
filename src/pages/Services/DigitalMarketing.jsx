import React from 'react';
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";

const DigitalMarketing = () => {
  return (
    <div className="container">
      <Intro
        title={"Digital Marketing"}
        description={
          "Amazon is the biggest and most busy online business platform for shopping and selling various goods and services. It is the best platform to start and expand your selling business."
        }
      />

      <div className="mt-[100px]">
      <Hero
      heading={"e-Commerce "}
      primaryText={"Digital Marketing Services"}
      btnText={"Get Started"}
      image={"./ebay-service.png"}
      btnType={"btn"}
      description={`It’s no secret that eCommerce marketing is powerful. But it is also one of the most competitive niches on the internet. That is why you need eComva to help you achieve your eCommerce goals. We are experts in eCommerce Digital Marketing Services in our field and can catapult your online store into a success.`}
      />
      </div>

      <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard title={"Shipping Solutions and Compliance"} description={"Regardless of the type of products you are selling, eBay delivers a cost-effective shipping option to meet your needs. Starting from the low cost of shipping to overnight deliveries that are reliable delivery methods to meet their and clients’ needs."}/>
            <SimpleCard title={"Attract Your eBay Buyers Attention"} description={"Ecom innovation for assisting you throughout the launching of your products on the eBay marketplace. We keep providing information about the eBay marketplace until you are satisfied."} />
      </div>

      <GrabOpportunity/>
    </div>
  )
}

export default DigitalMarketing