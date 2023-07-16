import React from 'react'

const CategoryCard = ({image,title,description}) => {
  return (
    <div className='rounded-xl py-8 px-5 flex flex-col items-center mx-5  justify-center'>
        <img src={image} alt="" />
        <div className='mt-6 text-center'>
        <p className='text-lg text-textColor'>{title}</p>
        <p className='text-md'>{description}</p>
        </div>
    </div>
  )
}

export default CategoryCard