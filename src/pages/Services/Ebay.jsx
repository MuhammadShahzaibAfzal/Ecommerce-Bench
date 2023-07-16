import React from "react";
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";

const Ebay = () => {
  return (
    <div className="container">
      <Intro
        title={"Ebay"}
        description={
          "EBay is one of the oldest and most successful e-commerce websites on the Internet, but it doesn't sell any items itself. Instead, it allows users to list items for sale, which other users can then bid on in auctions"
        }
      />

      <div className="mt-[100px]">
      <Hero
      heading={"Best e-Commerce Marketing Company Together"}
      primaryText={" We Grow"}
      btnText={"Get Started"}
      image={"./ebay-service.png"}
      btnType={"btn"}
      description={`With 5+ Years in Business, 100+ clients served, a Team of 50+ E-Commerce professionals, and a 99% success & growth rate for our clients, our team has a proven track record to efficiently undertake projects of any size and complexity.
      We are not only experts in the field of E-Commerce management and related services, but also specialize in working with diverse clients from around the globe. Your future self would be thankful if you hire us now to manage your E-Commerce business.`}
      />
      </div>

      <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard title={"Shipping Solutions and Compliance"} description={"Regardless of the type of products you are selling, eBay delivers a cost-effective shipping option to meet your needs. Starting from the low cost of shipping to overnight deliveries that are reliable delivery methods to meet their and clients’ needs."}/>
            <SimpleCard title={"Attract Your eBay Buyers Attention"} description={"Ecom innovation for assisting you throughout the launching of your products on the eBay marketplace. We keep providing information about the eBay marketplace until you are satisfied."} />
      </div>

      <GrabOpportunity/>
    </div>
  );
};

export default Ebay;
