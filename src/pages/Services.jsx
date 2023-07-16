import React from "react";
import Intro from "../components/common/Intro";
import ServiceCard from "../components/common/ServiceCard";
import GrabOpportunity from "../components/common/GrabOpportunity";
import JoinUs from "../components/common/JoinUs";

const servicesData = [
  {
    id: 1,
    title: "amazon",
    description:
      "Our Amazon management services give you an effective way to boost sales and grow your business. You'll be able to work on your business plan for longer. Amazon is the biggest and most busy online platform to start and expand your selling business. ",
    image: "./amazon.png",
    path : 'amazon'
  },

  {
    id: 2,
    title: "ebay",
    description:
      "Our eBay services provide a complete solution for maximizing sales and boosting success. We use tools and techniques to make your listings visible, appealing, and competitive. Ecom innovation is here to brief you about the terms, conditions and shipping options.",
    image: "./ebay.png",
    path:'ebay'
  },

  {
    id: 3,
    title: "walmart",
    description:
      "Our Walmart management services are designed to match your specific needs, and we will collaborate with you to create a personalized plan. Our team is ready to support you. Ecom Innovation knows that it’s a big market, and no one wants to miss it. ",
    image: "./walmart.png",
    path : 'walmart'
  },

  {
    id: 4,
    title: "shopify",
    description:
      "Our broad experience in Shopify store management enables you to achieve your desired result and get comfortable online success. We help you increase your sales, improve customer satisfaction. Shopify is a great platform to start your business online.",
    image: "./shopify.png",
    path : "shopify"
  },

  {
    id: 5,
    title: "etsy",
    description:
      "Our company is dedicated to offering services specifically tailored for Etsy.Whether you are just starting your Etsy shop or looking to expand your business, we provide comprehensive solutions to enhance your presence, optimize your listings, and drive sales on Etsy.",
    image: "./etsy.png",
    path : 'etsy'
  },

  {
    id: 6,
    title: "digital marketing",
    description:
      "Digital marketing refers to the use of digital channels, such as search engines, social media, email etc to promote a product or service. The goal of digital marketing is to connect with potential customers and increase brand awareness, engagement, and conversions.",
    image: "./Frame.png",
    path : 'digital-marketing'
  },

  {
    id: 7,
    title: "graphic designing",
    description:
      "Graphic design is the art and practice of creating visual content to communicate information, ideas, or messages. Graphic designers use typography, images, and other graphic elements to create designs that are visually effective in communicating the intended message.",
    image: "./graphic-design.png",
    path : 'graphic-designing'
  },

  {
    id: 8,
    title: "web development",
    description:
      "Web development is the process of building and maintaining websites and web applications. There are several programming languages, frameworks, and tools used in web development, including HTML, CSS, JavaScript, PHP, Python, Ruby, Node.js, React, Angular and many others.",
    image: "./development.png",
    path : 'web-development'
  },
];
const Services = () => {
  return (
    <div className="container">
      <Intro
        title={"Services"}
        description={
          "we offer the best E-Commerce consultancy for Amazon, Shopify, Walmart, and eBay to ensure your E-Commerce success. We are experts in E-Commerce Digital Marketing Services, Web & Graphic Designing and Web Development etc."
        }
      />

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {servicesData.map((i) => {
          return (
            <ServiceCard
              title={i.title}
              description={i.description}
              image={i.image}
              path = {i.path}
            />
          );
        })}
      </div>

      <GrabOpportunity/>

      <JoinUs/>
    </div>
  );
};

export default Services;
