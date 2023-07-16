import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({image,title,description,path}) => {
  return (
    <div className='rounded-xl shadow-2xl p-10'>
        <img src={image} alt="amazon" />
        <h2 className='mt-5 font-semibold uppercase text-textColor text-2xl'>{title}</h2>
        <p className='text-[14px] mt-3 md:text-[18px] leading-6 md:leading-8  text-justify text-textGray'>{description}</p>
       <div className="mt-9">
       <Link to={`/${path}`} className='btn-outline'>Learn More</Link>
       </div>
    </div>
  )
}

export default ServiceCard