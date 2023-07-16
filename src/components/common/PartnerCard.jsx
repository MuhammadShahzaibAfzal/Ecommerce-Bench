import React from 'react';

const PartnerCard = ({image,title,description}) => {
  return (
    <div 
    className='rounded-xl py-8 px-5 flex flex-col items-center text-center  justify-center border-[#FF70AE] border-2'>
        <img src={image} alt="" />
        <h3 className='text-xl md:text-2xl mt-2'>{title}</h3>
        <p className='text-[#1A202CA3] font-[400] leading-[32px]'>{description}</p>
    </div>
  )
}

export default PartnerCard