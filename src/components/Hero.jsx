import React from 'react'
import { ReactTyped } from "react-typed";

// const Hero = () => {
function Hero() {

  return (
    <div className='text-white'>
      <div className='mt-[-96px] max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'> {/* border */}

        <p className='text-[#00df9a] font-bold p-2'>GROWTH WITH DATA ANALTICS</p>

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>

        <div className='flex justify-center items-center'> {/* border */}
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-nowrap'>Fast, flexible financing for</p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={['B2B', 'B2C', 'SAAS']}
          typeSpeed={120}
          backSpeed={140}
          loop />
          {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>.</p> */}
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for B2B, B2C, & SAAS platforms.</p>
        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
