import React from 'react';
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";

const Shopify = () => {
  return (
    <div className="container">
      <Intro
        title={"Shopify"}
        description={
          "Shopify is one of the oldest and most successful e-commerce websites on the Internet, but it doesn't sell any items itself. Instead, it allows users to list items for sale, which other users can then bid on in auctions"
        }
      />

      <div className="mt-[100px]">
      <Hero
      heading={"Shopify Development Services"}
      btnText={"Get Started"}
      image={"./ebay-service.png"}
      btnType={"btn"}
      description={`Launch Shopify products with the help of Ecom Innovation Shopify Store Development Services. You will be impressed by the decision to take your effect to Shopify with us.
      Shopify is a great platform to start your business online. You can buy and sell products on this platform that will directly impact the growth of your business. Ecom Innovation shopify developer will help you in providing information about how you can sell your products in the Shopify platform. Our team has been working with Shopify for many years, they are well versed in the language of Shopify.`}
      />
      </div>

      <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard title={"Shipping Solutions and Compliance"} description={"Ecom Innovationwill make sure you understand the regulation and policies to sell your products without any problem. You have to read, agree, and accept the terms and conditions of Shopify to continue. If you disagree, then you will not be permitted to use the shipping service."}/>
            <SimpleCard title={"Attract your Shopify buyers Attention "} description={"Ecom innovation will guide you through the process that is involved in selling your product in the Shopify platform. You will have no problem during the entire process.Ecom innovation is here for you at every step during the entire experience of selling your product on Shopify."} />
      </div>

      <GrabOpportunity/>
    </div>
  )
}

export default Shopify