import React from 'react'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function HomeNav() {
  const [isOpen, setNav] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    const handleScroll = () => {
      if (window.scrollY < 100) {
        if(!isOpen){
          setBackground(false);
          
        }
      }
      else{
        setBackground(true);

      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };


  }, [isOpen]);


  return (
    <div className={`${background ? 'bg-white' : 'bg-transparent'} min-w-screen font-Inter  z-10 fixed h-[60px] animate-PopIn`}>
    <div className='max-w-[1200px] flex justify-between mx-auto items-center py-[15px] px-[20px] md:px-[100px]'>
      {/* Right Section */}
      <p className='font-Poppins font-bold text-[rgb(139,92,246)] text-lg'>BlahBlah</p>

      {/* Left Section Desktop View*/}
      <div className='hidden lg:flex space-x-10 items-center '>
        <nav className=''>
          <ul className='flex space-x-10'>
            <li className='cursor-pointer'> <a href='#Features'> Features</a></li>
            <li className='cursor-pointer'> <a href="#How">How it Works</a> </li>
            <li className='cursor-pointer'> <a href="#Testimonials">Testimonials</a></li>
          </ul>
        </nav> 

        {/* Buttons */}
        <div className='space-x-5'>
          <Link to='/login'> 
            <button className='cursor-pointer bg-[rgb(124,59,237)] rounded-md font-semibold text-white h-[35px] w-[80px]' >Sign In </button>
          </Link>
          <Link to='/register'>
            <button className='cursor-pointer border border-[rgb(124,59,237)] rounded-md font-semibold text-[rgb(124,59,237)] h-[35px] w-[80px]'>Register</button>
          </Link>

        </div>

      </div>

      {/* Left Section Mobile View */}

      <div className='flex lg:hidden'>
        {!isOpen ? <Menu onClick={()=>{setNav(prev => (!prev)); setBackground(true)}}/> : <X onClick={()=>{setNav(prev => (!prev)); setBackground(false)}}/>}
      </div>
    </div>
    <div className={`${!isOpen ? 'hidden' : 'flex'} flex-col min-w-screen justify-start px-[20px] bg-white space-y-[10px] pb-[30px]`}>
      <nav >
        <ul className=' space-y-[10px] font-Poppins' onClick={()=>{setNav(prev =>(!prev) )}}>
          <li className='cursor-pointer'> <a href='#Features'> Features</a></li>
          <li className='cursor-pointer'> <a href="#How">How it Works</a> </li>
          <li className='cursor-pointer'> <a href="#Testimonials">Testimonials</a> </li>
        </ul>
      </nav>

      <div className=' gap-[10px] flex flex-col'>
        <Link to='/login'>
          <button className='cursor-pointer bg-[rgb(124,59,237)] rounded-md font-semibold text-white h-[35px] w-full'>Sign In </button>
        </Link>
        <Link to='/register'>
          <button className='cursor-pointer border border-[rgb(124,59,237)] rounded-md font-semibold text-[rgb(124,59,237)] h-[35px] w-full'>Register</button>
        </Link>

      </div>

    </div>


  </div>
  )
}
