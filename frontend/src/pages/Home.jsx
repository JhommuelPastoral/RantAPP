import Features from '../Components/Features.jsx';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import How from '../Components/How.jsx';
import Testimonial from '../Components/Testimonial.jsx';
import Footer from '../Components/Footer.jsx';
import { Link } from 'react-router-dom';
import HomeNav from '../Components/HomeNav.jsx';
export default function Home() {

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
    <>
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

      {/* Home */}
      <div className='bg-[linear-gradient(90deg,_#efd5ff_0%,_#515ada_100%)] pb-[50px] animate-PopIn '>
        <div className='pt-[60px] max-w-[1200px] mx-[20px]  lg:mx-auto flex md:h-screen items-center  '>
          <div className='grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] w-full gap-[10px]'>
            {/* Left Side */}
            <div className='space-y-2 md:space-y-5 order-1'>
              <p className='font-Poppins text-3xl md:text-5xl font-semibold'>Unleash Your </p>
              <p className='font-Poppins text-3xl md:text-5xl font-semibold'> <span className='bg-gradient-to-r from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-transparent bg-clip-text' >Frustrations</span>, Find</p>
              <p className='font-Poppins text-3xl md:text-5xl font-semibold'>Your <span className='bg-gradient-to-r from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-transparent bg-clip-text'> Voice</span> </p>
              <p className='font-Poppins '>The safe space to rant, vent, and connect with others who understand. Say what you really feel without judgment.</p>

              <div className='flex space-x-5 flex-col md:block gap-[10px]'>
                <Link to='/register'>
                  <button className='cursor-pointer bg-[rgb(124,59,237)] rounded-md font-semibold text-white h-[35px] md:w-auto w-full px-[10px]' >Get Started Free </button>
                </Link>

                <button className='cursor-pointer border border-[rgb(124,59,237)] rounded-md font-semibold text-[rgb(124,59,237)] h-[35px] md:w-auto w-full px-[10px]'> <a href="#Features">Learn More</a> </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className='flex -space-x-2 overflow-hidden '>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-10 rounded-full "
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-10 rounded-full "
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="inline-block size-10 rounded-full "
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-10 rounded-full "
                  />

                </div>
                <p className="font-Poppins text-sm md:text-md">Join a growing community of over 10 active ranters today.</p>
                </div>
            </div>
            
            {/* Right Side */}
            <div className='bg-white rounded-2xl shadow-2xl py-[20px] order-2'>
              <div className='flex mt-[20px] mx-[20px] items-center gap-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full bg-[linear-gradient(90deg,_#efd5ff_0%,_#515ada_100%)]'> </div>
                <div className='bg-[rgb(249,250,251)] flex h-[100px] w-[90%] rounded-2xl flex-col'>
                  <div className='bg-gray-500/25 flex h-[16px] w-[30%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[70%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[80%] rounded-2xl mt-[10px] mx-[20px]'></div>
                </div>
              </div>
              <div className='flex mt-[20px] mx-[20px] items-center gap-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full bg-[linear-gradient(90deg,_#efd5ff_0%,_#515ada_100%)]'> </div>
                <div className='bg-[rgb(249,250,251)] flex h-[100px] w-[90%] rounded-2xl flex-col'>
                  <div className='bg-gray-500/25 flex h-[16px] w-[30%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[70%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[80%] rounded-2xl mt-[10px] mx-[20px]'></div>
                </div>
              </div>
              <div className='flex mt-[20px] mx-[20px] items-center gap-[20px]'>
                <div className='w-[40px] h-[40px] rounded-full bg-[linear-gradient(90deg,_#efd5ff_0%,_#515ada_100%)]'> </div>
                <div className='bg-[rgb(249,250,251)] flex h-[100px] w-[90%] rounded-2xl flex-col'>
                  <div className='bg-gray-500/25 flex h-[16px] w-[30%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[70%] rounded-2xl mt-[10px] mx-[20px]'></div>
                  <div className='bg-gray-500/25 flex h-[16px] w-[80%] rounded-2xl mt-[10px] mx-[20px]'></div>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>

      <div id='Features' className='pt-[60px] '>
        <Features/>
      </div>
      
      <div id='How' className='pt-[60px]'>
        <How/>
      </div>

      <div id='Testimonials' className='pt-[60px]'>
        <Testimonial/>
      </div>

      <footer>
        <Footer/>
      </footer>
      
  </>
  )
}
