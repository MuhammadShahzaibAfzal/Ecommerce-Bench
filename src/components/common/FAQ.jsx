import React from 'react';
import Accordian from './Accordian';

const accordianData = [
    {id:1,question:"What is amazon account management?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
    {id:2,question:"What is Walmart account management?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
    {id:3,question:"What is eBay account management?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
    {id:4,question:"What Are the Best Ways to Sell Products on Amazon Ecommerce Store?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
    {id:5,question:"I have a Successful Amazon Store, Why Do I Need to Hire Amazon Marketing Professionals?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
    {id:5,question:"Why it is a too long period to Set Up an Online E-Commerce Store?",answere:"Amazon management refers to the set of practices, strategies, and organizational structures employed by Amazon, one of the world's largest e-commerce companies, to oversee its operations, drive growth, and achieve its business objectives. "},
]


const FAQ = () => {
  return (
    <div className='mt-[100px] text-center text-textColor bg-gray-100 p-10 rounded-xl'>
        <h1 className='text-[40px] capitalize font-bold my-7'>frequently asked question</h1>
        <div className='max-w-[1000px] w-full mx-auto'>
            {
                accordianData.map((i)=>{
                    return <Accordian key={i.id} question={i.question} answere={i.answere} />
                })
            }
        </div>
    </div>
  )
}

export default FAQ