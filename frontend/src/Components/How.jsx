import React from 'react'
import { Link } from 'react-router-dom' ;
export default function How() {
  return (
    <div className='max-w-[1200px] mx-[20px] md:mx-auto pb-[50px]' >
      {/* Header */}
      <header className='flex flex-col justify-center items-center w-full'>
        <p className='font-Poppins text-5xl font-semibold'> <span className='bg-gradient-to-r from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-transparent bg-clip-text'>How It Works </span> </p>
        <p className='font-Poppins text-center text-lg w-full md:w-[50%] text-gray-500'>Get started in minutes with our simple four-step process.</p>
      </header>

      <main className='grid md:grid-cols-4 mt-[50px] gap-[10px] items-start '>

        <div className='flex flex-col  justify-center items-center gap-[10px] ' data-aos="fade-right" data-aos-duration="1000">
          <div className='w-[50px] h-[50px] rounded-full bg-[rgb(124,59,237)] justify-center items-center flex'> <p className='font-bold text-white'>1</p></div>
          <div className='font-Poppins  text-center '>
            <p className='font-bold'>Sign Up</p>
            <p className='text-gray-500'>Create your account in seconds with just an email or connect with social media.</p>
          </div>
        </div>
        
        <div className='flex flex-col  justify-center items-center gap-[10px]' data-aos="fade-right" data-aos-duration="2000">
          <div className='w-[50px] h-[50px] rounded-full bg-[rgb(124,59,237)] justify-center items-center flex'> <p className='font-bold text-white'>2</p></div>
          <div className='font-Poppins  text-center'>
            <p className='font-bold'>Compose Your Rant</p>
            <p className='text-gray-500'>Write what's on your mind without filters. Let it all out</p>
          </div>
        </div>
        <div className='flex flex-col  justify-center items-center gap-[10px]' data-aos="fade-right" data-aos-duration="3000">
          <div className='w-[50px] h-[50px] rounded-full bg-[rgb(124,59,237)] justify-center items-center flex'> <p className='font-bold text-white'>3</p></div>
          <div className='font-Poppins  text-center'>
            <p className='font-bold'>Post & Connect</p>
            <p className='text-gray-500'>Share your rant and connect with others who relate to your experience.</p>
          </div>
        </div>
        <div className='flex flex-col  justify-center items-center gap-[10px]' data-aos="fade-right" data-aos-duration="3000">
          <div className='w-[50px] h-[50px] rounded-full bg-[rgb(124,59,237)] justify-center items-center flex'> <p className='font-bold text-white'>4</p></div>
          <div className='font-Poppins  text-center'>
            <p className='font-bold'>Feel Better </p>
            <p className='text-gray-500'>Experience the therapeutic relief of expressing your frustrations.</p>
          </div>
        </div>


      </main>
      <div className='flex justify-center items-center mt-[50px]'>
        <Link to='/login'>
          <button className='font-Poppins bg-[rgb(124,59,237)] p-[10px] text-white rounded-xl cursor-pointer'> Start Ranting Now</button>
        </Link>
      </div>
    </div>
  )
}
