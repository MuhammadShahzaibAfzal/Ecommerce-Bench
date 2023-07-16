import React from "react";
import Hero from "../components/common/Hero";
import CategoryCard from "../components/common/CategoryCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import JoinUs from "../components/common/JoinUs";
import GrabOpportunity from "../components/common/GrabOpportunity";
import FAQ from "../components/common/FAQ";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <div className="container">
      <div className="mt-[100px]">
        <Hero
          subheading="Who We Are"
          heading="About Our Company "
          primaryText=""
          description="Ecom Innovation is an E-Commerce services provider for businesses of all sizes. We streamline business processes using our state-of-the-art E-Commerce solutions and services. We aim to help your business grow by assessing your current situation, evaluating your business requirements, and understanding your company’s brand objectives."
          image={"about-us.png"}
          btnText="Get Started"
          btnType="btn"
          orderReverse={false}
        />
      </div>

      <div className=" mt-[100px]">
        <span className="text-[#FF70AE] text-[16px] italic font-[600]">
          Our Core Values
        </span>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#1A202C] text-[40px] font-[700] leading-[56px] capitalize">
              We Are Committed to Your
              <span className="text-secondary"> Business Growth</span>{" "}
            </h1>
          </div>
        </div>

        <div className="cards mt-14">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            arrows={false}
            transitionDuration={500}
          >
            <CategoryCard
              image="./employee.png"
              title="Our Employees"
              description="We value our people, encourage their development and reward their performances."
            />
            <CategoryCard
              image="./Artboard.png"
              title="Qaulity"
              description={
                "Our strength is our quality of service, which ensures achieving the agreed outcome."
              }
            />
            <CategoryCard
              image="./accountability.png"
              title="Accountability"
              description={
                "We make ourselves accountable in delivering on our commitments."
              }
            />
          </Carousel>
        </div>
      </div>

      <div className="mt-[100px]">
        <Hero
          subheading="How It Works"
          heading="What Makes Ecom innovation The Best For Your Business?"
          primaryText=""
          description="Ecom Innovation is a market-renowned firm with years of experience managing various aspects of the E-Commerce business. This experience allows our teams to provide top-quality services to our clients, leaving them free to manage the other facets of their business. 
          Whether you run a store on Amazon, eBay, Walmart, Shopify, or any other online E-Commerce platform, our expert account managers will skillfully combine their experience and business acumen and map it onto your business objectives."
          image={"thumd.png"}
          orderReverse={true}
        />
      </div>

      <GrabOpportunity />

      <FAQ/>

      <JoinUs />
    </div>
  );
};

export default About;
