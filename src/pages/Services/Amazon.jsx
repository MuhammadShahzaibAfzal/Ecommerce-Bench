import React from "react";
import Intro from "../../components/common/Intro";
import GrabOpportunity from "../../components/common/GrabOpportunity";
import SimpleCard from "../../components/common/SimpleCard";

const cardData = [
  {
    id: 1,
    title: "Amazon Seller Central Consultants",
    description:
      "We can set up and organize your Amazon product sales strategy with quick business solutions To help increase sales on your eCommerce store . Our Amazon Team will help you to grow your business. We’re dealing with everything- collecting, forecasting, regular Amazon problems, pricing, and SEO.",
  },

  {
    id: 2,
    title: "Amazon Listing Creation & Optimization",
    description:
      "Creating a great optimized listing is a key factor in the growth of your Amazon business. eMarspro will help you to optimize your listing. Not just the sales pitch to the Amazon user, it also improves Amazon search engine ranking along with the Google Search Engine Ranking. Our Amazon Team will help you to grow your business. ",
  },

  {
    id: 3,
    title: "Amazon Private Label Sourcing",
    description:
      "Trying to find a good product to sell online is hard. Cultivating your idea and getting it to market before the competition is too difficult for most people. With Ecom Innovation, finding top-selling products at the perfect time is easier than ever before. Our services are designed to help you find unique private label opportunities on Amazon.",
  },

  {
    id: 4,
    title: "Amazon Best Strategy Techniques",
    description:
      "The business strategy of Amazon consists of focusing on investing in technologies, enhancing its logistics applications, improving its web services by fulfillment capacity, M&A strategy, R&D activities in logistics, experimenting with Fintech, and securing its inventions using patents.",
  },
];
const Amazon = () => {
  return (
    <div className="container">
      <Intro
        title={"Amazon"}
        description={
          "Amazon is the biggest and most busy online business platform for shopping and selling various goods and services. It is the best platform to start and expand your selling business."
        }
      />

      <div className="mt-[100px]">
        <h1 className="text-[#1A202C] max-w-[789px] text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize">
          <span className="text-secondary">Amazon</span> Seller Central
          Consulting Services{" "}
        </h1>

        <div className="text-[#1A202CA3] font-[400]  leading-[36px] text-justify text-[14px]  md:leading-8 md:text-xl ">
          <p>
            At Ecom innovation, we simplify complexity to start and expand your
            Amazon selling business with our result-driven Amazon Consulting
            Services.
          </p>

          <p>
            We have fully skilled teams of qualified, experienced, and one of
            the best virtual Amazon consultants who are fully committed,
            equipped with the latest market trends, and strive to provide
            clients with the best possible services.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p>Our Amazon Consulting Services Include</p>

              <ul className="list-disc ml-5">
                <li>Amazon PPC Campaigns</li>
                <li>Listing Creation & Optimization </li>
                <li>Amazon Product Launching Strategy </li>
                <li>Amazon Account Management</li>
                <li>Amazon Ungating and Category Approval</li>
              </ul>

              <p>
                We help businesses of all sizes worldwide and maximize
                productivity on time and within budget.
              </p>
            </div>
            <img src="./amazon-service.png" alt="not found" />
          </div>
        </div>
      </div>

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                cardData.map((i)=>{
                    return <SimpleCard key={i.id} title={i.title} description={i.description}/>
                })
            }
      </div>

      <GrabOpportunity/>
    </div>
  );
};

export default Amazon;

