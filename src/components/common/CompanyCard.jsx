import React from 'react'

const CompanyCard = ({image,name}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="card shadow-lg md:shadow-2xl rounded-xl w-40 h-40  md:w-72 md:h-72 flex items-center justify-center">
            <img src={`./${image}`} alt={name} className= 'w-24 h-24 md:w-40 md:h-40' />
        </div>
        <span className='mt-8 text-lg md:text-2xl text-center'>{name}</span>
    </div>
  )
}

export default CompanyCard