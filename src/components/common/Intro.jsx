import React from "react";

const Intro = ({title,description}) => {
  return (
    <div className="text-center max-w-[1067px] mt-[100px] mx-auto">
      <h1 className="text-[32px] md:text-[40px] text-textColor font-bold">
        {title}
      </h1>
      <span className="text-[14px] leading-{36px} md:leading-8 md:text-xl text-textGray">
       {description}
      </span>
    </div>     
  );
};

export default Intro;
