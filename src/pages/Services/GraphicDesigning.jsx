import React from 'react';
import Intro from "../../components/common/Intro";
import Hero from "../../components/common/Hero";
import SimpleCard from "../../components/common/SimpleCard";
import GrabOpportunity from "../../components/common/GrabOpportunity";

const GraphicDesigning = () => {
  return (
    <div className="container">
    <Intro
      title={"Graphic design"}
      description={
        "Graphic design is the art and practice of creating visual content to communicate information, ideas, or messages through various forms of media such as print, digital, and other visual aids. Graphic designers use typography, images, and other graphic elements to create designs that are visually appealing and effective in communicating the intended message."
      }
    />

    <div className="mt-[100px]">
    <Hero
    heading={"Looking For Reliable and Affordable Design Services?"}
    btnText={"Get Started"}
    image={"./ebay-service.png"}
    btnType={"btn"}
    description={`You’re not alone if you’re looking for a design firm to create professional marketing materials, in-store promotional items, and more. Unfortunately, many design firms need to learn their expertise, so they offer mediocre service. You want a graphic designer to help reflect your image, but it takes too long – and costs too much. Get creative with us. Clients love our services because we are reliable and professional.`}
    />
    </div>

    <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <SimpleCard title={"Distinguish Your Brand From The Competition"} description={"We know how important a good logo is to business success and is the cornerstone of any business. Our designers are up-to-date on the latest trends in logo design. We’ll design a logo that represents your business accurately and professionally. That’s why our team of designers puts so much thought into what we create. They know what you want and are great at giving it to you."}/>
          <SimpleCard title={"Turn Your Data into Something Beautiful With Our Infographic Services."} description={"Creating custom, innovative, and share-worthy infographics can be costly. An infographic needs to look professional, have original design elements, and stand out enough to be memorable – something only experts can pull off. Our team will create a custom infographic for you and your business. We work quickly, using innovative design methods to help you get the results you want."} />
    </div>

    <GrabOpportunity/>
  </div>
  )
}

export default GraphicDesigning