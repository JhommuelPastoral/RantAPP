import React from 'react'
import {HeartPlus, Check, Heart, Search,Star,Share } from 'lucide-react';
export default function Features() {
  return (
    <div className='max-w-[1200px] mx-[20px] md:mx-auto pb-[50px]' >
      {/* Header */}
      <header className='flex flex-col justify-center items-center w-full'>
        <p className='font-Poppins text-5xl font-semibold'>Features <span className='bg-gradient-to-r from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-transparent bg-clip-text'>You'll Love</span> </p>
        <p className='font-Poppins text-center text-lg w-full md:w-[50%] text-gray-500'>Designed to help you express yourself, find community, and release tension in a healthy way.</p>
      </header>

      <main className='grid grid-cols-1 md:grid-cols-3 gap-[10px] mt-[50px] '>
        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3 pb-[30px] ' data-aos="fade-right">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <HeartPlus size={30} />
          </div>
          <p className='font-bold'>Community Support </p>
          <p>Connect with others who share similar experiences and frustrations.</p>
        </div>

        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3 ' data-aos="fade-right">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <Check size={30} />
          </div>
          <p className='font-bold'>Judgment-Free Zone </p>
          <p>Express yourself freely without fear of criticism or backlash.</p>
        </div>

        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3'data-aos="fade-right">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <Heart size={30} />
          </div>
          <p className='font-bold'>Emotional Release</p>
          <p>Transform frustration into relief with our therapeutic ranting platform.</p>
        </div>

        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3' data-aos="fade-left">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <Search size={30} />
          </div>
          <p className='font-bold'>Find Similar Rants</p>
          <p>Discover others who are experiencing the same things you are.</p>
        </div>

        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3' data-aos="fade-left">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <Star size={30} />
          </div>
          <p className='font-bold'>Anonymous Option </p>
          <p>Choose to post anonymously when you want to keep your identity private.</p>
        </div>

        <div className='bg-white hover:shadow-2xl hover:transition-shadow p-[10px] rounded-2xl font-Poppins space-y-3' data-aos="fade-left">
          <div className='bg-[rgb(237,227,255)] w-[40px] h-[40px] flex items-center justify-center mt-[10px]'>
            <Share size={30} />
          </div>
          <p className='font-bold'>Easy Sharing</p>
          <p>Share your rants with friends or keep them private you have control.</p>
        </div>
      </main>

    </div>
  )
}
