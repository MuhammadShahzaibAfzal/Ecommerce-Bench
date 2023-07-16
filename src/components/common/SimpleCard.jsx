import React from 'react'

const SimpleCard = ({title,description}) => {
  return (
    <div className="rounded-xl py-8 px-5  border-primary border-2">
      <h1 className="text-xl md:text-2xl ">{title}</h1>
      <p className="text-[#1A202CA3] font-[400] leading-[32px]">{description}</p>
    </div>
  )
}

export default SimpleCard