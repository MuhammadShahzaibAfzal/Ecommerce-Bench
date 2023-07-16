import React from 'react';
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";


const Walmart = () => {
  return (
    <div className="container">
      <Intro
        title={"Walmart"}
        description={
          "Walmart, Inc. engages in retail and wholesale business. The company offers an assortment of merchandise and services at everyday low prices. It operates through the following business segments: Walmart U.S., Walmart International, and Sam's Club."
        }
      />

      <div className="mt-[100px]">
      <Hero
      heading={"Walmart Marketing Consultant"}
      btnText={"Get Started"}
      image={"./ebay-service.png"}
      btnType={"btn"}
      description={`Ecom Innovation is providing its Walmart Consultants to enable you to understand the Walmart marketplace and how it works. We are here to assist you in all the processes related to it and provide you with adequate information that is needed.
      We have your back today and for the coming years.
      Walmart Marketplace allows third-party retailers ready to offer their products to more than 90 million unique visitors who visit and buy from Walmart.com monthly. It is easy for clients to browse and search for third-party marketplace products on Walmart.com. The items given by third-party sellers are noted in the item information in search results, online shelves, and on the item pages. Millions of products are available to you on Walmart due to our Marketplace Sellers’ shared partnership, which means more brands and a wide variety.`}
      />
      </div>

      <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard title={"Shipping Solutions and Compliance"} description={"The shipping solutions and how you should comply with what the company requires are communicated to you by Ecom Innovation before your products are sent out in the Walmart marketplace.One of the most complex supply chains is organized by Walmart. To keep its shelves full and clients happy, the retailer leans on unlimited suppliers."}/>
            <SimpleCard title={"Attract your Shopify buyers Attention "} description={"Ecom Innovation knows that Walmart is a big market, and no one wants to miss it. We help you in setting up your products on Walmart. Walmart consultants assist you in Walmart Fulfilment Service programs, B2B strategies, Management of Multi Warehouses, and everything else related to Walmart."} />
      </div>

      <GrabOpportunity/>
    </div>
  )
}

export default Walmart