import React, { useState } from "react";
import Hero from "../components/common/Hero";
import { Link } from "react-router-dom";
import CategoryCard from "../components/common/CategoryCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CompanyCard from "../components/common/CompanyCard";
import PartnerCard from "../components/common/PartnerCard";
import JoinUs from "../components/common/JoinUs";
import { motion } from "framer-motion";
import GrabOpportunity from "../components/common/GrabOpportunity";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className=" mt-[100px]">
        <div className="card shadow-2xl rounded-[24px] p-[40px] relative">
          <Hero
            subheading="The ideal strategy!"
            heading="Get E-Commerce Trained "
            primaryText="Assistant!"
            description="Avoid the hassle of focusing on repetitive and time-consuming tasks now with trained virtual assistants."
            image={"hero-img.png"}
            btnText="Get Started"
            btnType="btn"
            orderReverse={false}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
            className="absolute -top-7 -left-7 opacity-60"
          >
            <g filter="url(#filter0_b_1888_5317)">
              <circle
                cx="41.5"
                cy="41.5"
                r="41.5"
                fill="url(#paint0_linear_1888_5317)"
                fill-opacity="0.42"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_1888_5317"
                x="-20"
                y="-20"
                width="123"
                height="123"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1888_5317"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_1888_5317"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1888_5317"
                x1="77.1958"
                y1="70.8207"
                x2="63.7826"
                y2="-5.66995"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FA88F8" />
                <stop offset="1" stop-color="#FFCF87" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="329"
            height="210"
            viewBox="0 0 329 210"
            fill="none"
            className="absolute -bottom-[26px] -left-0.5"
          >
            <path
              d="M271.035 1C332.734 4.79088 338.253 33.5719 316.173 58.2421C250.973 131.089 291.493 160.975 310.977 151.119C342.071 135.389 268.708 80.1183 237.666 121.373C210.748 157.145 210.963 203.635 123.933 178.792C55.0931 159.142 1.00001 209 1.00001 209"
              stroke="#7A77E8"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            className="absolute bottom-44 left-64"
          >
            <path
              d="M0.249324 8.18155L10.25 0L10.25 16.3631L0.249324 8.18155Z"
              fill="#7A77E8"
            />
          </svg>
        </div>
      </div>

      {/* Hire Us To Manage Your E-Commerce Brand */}
      <div className=" mt-[100px] md:text-center">
        <h1 className="text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize text-textColor">
          <span className="text-secondary">Hire Us</span> To Manage Your
          E-Commerce Brand{" "}
        </h1>
        <div className="max-w-[1139px]   mx-auto text-justify">
          <span className="text-sm md:text-lg text-textGray font-[400] leading-8">
            Whether you need B2B E-Commerce Management or you require any
            personalized service for your E-Commerce store, we’ve got your back.
            The top sellers on well-known E-Commerce sites like Amazon, etSay, Shopify, eBay,
            and Walmart all have one thing in common: they hire professional
            E-Commerce consultants to execute their account management.{" "}
          </span>
        </div>
        <div className="mt-10">
          <Link className=" btn-outline ">Learn More</Link>
        </div>
      </div>

      {/* Trained Assistants From Ecom Innovation Sections */}
      <div className=" mt-[100px]">
        <span className="text-[#FF70AE] text-[16px] italic font-[600]">
          Why Businesses Prefer
        </span>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#1A202C] text-[40px] font-[700] leading-[56px] capitalize">
              Trained Assistants From{" "}
              <span className="text-secondary">ecom Innovation?</span>{" "}
            </h1>
          </div>
          {/* <div className="flex gap-4">
            
            <div className="bg-[#F6F7FB] rounded-full p-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7071 1.29289C12.0976 1.68342 12.0976 2.31658 11.7071 2.70711L6.41421 8L11.7071 13.2929C12.0976 13.6834 12.0976 14.3166 11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289L10.2929 1.29289C10.6834 0.902369 11.3166 0.902369 11.7071 1.29289Z"
                  fill="#1A202C"
                />
              </svg>
            </div>
           
            <div className="bg-[#F6F7FB] rounded-full p-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.29289 1.29289C3.90237 1.68342 3.90237 2.31658 4.29289 2.70711L9.58579 8L4.29289 13.2929C3.90237 13.6834 3.90237 14.3166 4.29289 14.7071C4.68342 15.0976 5.31658 15.0976 5.70711 14.7071L11.7071 8.70711C12.0976 8.31658 12.0976 7.68342 11.7071 7.29289L5.70711 1.29289C5.31658 0.902369 4.68342 0.902369 4.29289 1.29289Z"
                  fill="#1A202C"
                />
              </svg>
            </div>
          </div> */}
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
              image="./launch-bussiness.png"
              title="Launch Your Business"
            />
            <CategoryCard
              image="./eTrading.png"
              title="Boost E-Trading Business"
            />
            <CategoryCard image="./market.png" title="Market Your Business" />
            <CategoryCard image="./Artboard.png" title="Great Efficiency Work" />
            <CategoryCard image="./free.png" title="Free Expert Guidance" />

            <CategoryCard image="./eTrading.png" title="Continuous Reporting" />
          </Carousel>
        </div>
      </div>

      {/* E-Commerce Marketing And Management Section */}
      <div className=" mt-[100px]">
        <Hero
          subheading="Services we offer for"
          heading="e-Commerce Marketing and Management "
          primaryText="Assistant!"
          description="At Ecom Innovation, we are dedicated to delivering a complete 
            E-Commerce marketing and management solution that covers all aspects of your online business, from eCommerce web development to graphic designing and customer services."
          image={"1.png"}
          btnText="Learn More"
          btnType="btn-outline"
        />
      </div>

      {/* Best Ecommerce Marketing Consultent */}
      <div className=" mt-[100px]">
        <Hero
          subheading="Dedicated & Experienced Virtual Assistants"
          heading="Best e-Commerce Marketing Consultants "
          primaryText=""
          description="With 5+ Years in Business, 100+ clients served, a team of 50+ expert E-Commerce consultants, and a 99% success & growth rate, Ecom Innovation has a proven track record of efficiently undertaking projects of any size and complexity. "
          image={"2.png"}
          btnText="Learn More"
          btnType="btn-outline"
          orderReverse={true}
        />
      </div>

      {/* E-Commerce Management Across All The Leading Marketplaces */}
      <div className=" mt-[100px]">
        <div className="max-w-[965px]">
          <span className="text-secondary text-[16px] italic font-[600]">
            E-Commerce Brands
          </span>
          <h1 className="text-[#1A202C] text-[40px] font-[700] leading-[56px] capitalize">
            E-Commerce Management Across All The Leading{" "}
            <span className="text-secondary">Marketplaces</span>{" "}
          </h1>
        </div>

        <div className="companies grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-16">
          <CompanyCard image="amazon.png" name="AMAZON" />
          <CompanyCard image="ebay.png" name="EBAY" />
          <CompanyCard image="walmart.png" name="WALMART" />
          <CompanyCard image="shopify.png" name="SHOPIFY" />
          <CompanyCard image="etsy.png" name="ETSY" />
          <CompanyCard image="Frame.png" name="DIGITAL MARKETING" />
          <CompanyCard image="graphic-design.png" name="GRAPHIC DESIGNING" />
          <CompanyCard image="development.png" name="WEB DEVELOPMENT" />
        </div>
      </div>

      {/* Take The Next Step Toward Growth With Us! */}

      <div className=" mt-[100px]">
        <div className="card shadow-2xl rounded-[24px] p-[40px] relative">
          <Hero
            subheading=""
            heading="Take The Next Step Toward Growth With Us! "
            primaryText=""
            description="The great thing is E-Commerce virtual assistants save you a lot of operational costs, including salaries, allowances, and other employee benefits. We will assist you in increasing the scope of your E-commerce business.
            Our team believes in delivering comprehensive customer support to ensure a smooth process. We will perform on-page and off-page SEO activities for your online business if required."
            image={"3.png"}
            btnText="Get Started"
            btnType="btn"
            orderReverse={true}
          />
          <img
            src="./circle.png"
            alt="circle"
            className=" w-28 h-28 hidden md:block absolute bottom-8 -right-[55px]"
          />
        </div>
      </div>

      {/* Become Our partner to unlock */}
      <div className=" mt-[100px] ">
        <h1 className="text-[#1A202C] md:text-[40px] text-[32px] font-[700] leading-[56px] capitalize text-center">
          Become Our partner to unlock{" "}
          <span className="text-secondary">the success</span>{" "}
        </h1>
        <p className="text-[#1A202CA3] font-[400] leading-[32px] text-center">
          Lets shake hands and speed up our business growth together
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <PartnerCard
            title="Place Your Order"
            image={"p1.png"}
            description={
              "Depending on your business, you may need to request quotes and pricing for services you require based on your specific E-Commerce needs, or you can request free consultation before placing your order."
            }
          />
          <PartnerCard
            title="Get a Proposal Details"
            image={"p2.png"}
            description={
              "We know you're excited about your project. After analyzing the requirements, our team of E-Commerce services will create a detailed proposal explicitly tailored to your E-Commerce business requirements."
            }
          />
          <PartnerCard
            title="Give Approval To Begin"
            image={"p3.png"}
            description={
              "You will receive our proposal with a detailed insight into the project, which will require your approval. Afterward, we will organize the project workflow, ensuring that your business objectives are fully incorporated into the plan."
            }
          />
          <PartnerCard
            title="Project Delivery Begins"
            image={"p4.png"}
            description={
              "We will provide you with the project deliverables within the agreed time frame and update you on the progress regularly, giving you peace of mind. We always value our client's satisfaction."
            }
          />
        </div>
      </div>

      {/*  Grab The Right Opportunity  */}
      <GrabOpportunity/>
      {/* Virtual Assistent Services */}

      <div className="  mt-[100px] ">
        <span className="text-[#FF70AE] text-[16px] italic font-[600]">
          How It Works?
        </span>
        <h1 className="text-[#1A202C] text-[32px] md:text-[40px] font-[700] leading-[56px] capitalize">
          Virtual Assistant <span className="text-secondary">Services </span>{" "}
        </h1>

        <motion.div 
        initial={
          {
              x:-200,
              opacity:0
          }
      }
      whileInView={
          {
              x:0,
              opacity:1
          }
      }
      transition={{duration:2}}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <PartnerCard
            title="E-Commerce Launch"
            image={"s1.png"}
            description={
              "Launching an ecommerce business can be an exciting and challenging endeavor. Choose your niche that you want to sell."
            }
          />
          <PartnerCard
            title="Digital Marketing"
            image={"s2.png"}
            description={
              "The goal of digital marketing is to connect with potential customers and engagement, and conversions."
            }
          />
          <PartnerCard
            title="Customer Services"
            image={"s3.png"}
            description={
              "It involves addressing customer inquiries, resolving issues, and providing information about products or services."
            }
          />
        </motion.div>
      </div>

      <JoinUs/>
    </div>
  );
};

export default Home;
