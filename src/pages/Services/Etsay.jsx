import React from 'react';
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";

const Etsay = () => {
  return (
    <div className="container">
      <Intro
        title={"Etsy"}
        description={
          "Our company is dedicated to offering services specifically tailored for Etsy.Whether you are just starting your Etsy shop or looking to expand your business, we provide comprehensive solutions to enhance your presence, optimize your listings, and drive sales on Etsy."
        }
      />

      <div className="mt-[100px]">
      <Hero
      heading={"Our Core "}
      primaryText={"Services"}
      btnText={"Get Started"}
      image={"./ebay-service.png"}
      btnType={"btn"}
      description={`At Etsy, we offer a wide range of services designed to support and empower our vibrant community of sellers and buyers. Our platform is dedicated to connecting talented artisans, crafters, and vintage enthusiasts with customers who appreciate unique, handmade, and one-of-a-kind products.
      For sellers, we provide an easy-to-use online marketplace where they can showcase their creations and reach a global audience.`}
      />
      </div>

      <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleCard title={"Shipping Solutions and Compliance"} description={"Etsy's shipping solutions and compliance resources aim to empower sellers to handle shipping efficiently, stay compliant with regulations, and provide a positive experience for buyers."}/>
            <SimpleCard title={"Attract your Shopify buyers Attention "} description={"Attention Etsy Shoppers! Are you looking for unique, handcrafted treasures! Our Etsy store is a treasure trove of creativity, where each item is lovingly crafted by skilled artisans who pour their heart and soul into every creation."} />
      </div>

      <GrabOpportunity/>
    </div>
  )
}

export default Etsay