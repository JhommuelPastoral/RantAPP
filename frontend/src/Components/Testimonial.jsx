import Star from '../star.png';
import { Link } from 'react-router-dom';
export default function Testimonial() {
  return (
    <>
    <div className='max-w-[1200px] mx-[20px] md:mx-auto ' >
      {/* Header */}
      <header className='flex flex-col justify-center items-center w-full'>
        <p className='font-Poppins text-5xl font-semibold text-center'>What Our <span className='bg-gradient-to-r from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-transparent bg-clip-text'>Users Say </span> </p>
        <p className='font-Poppins text-center text-lg w-full md:w-[50%] text-gray-500'>Join thousands of satisfied ranters who've found their voice and community.</p>
      </header>
      
      <main className='grid md:grid-cols-3 gap-[20px] mt-[50px] pb-[100px]'>
        <div className='flex flex-col p-[10px] rounded-2xl gap-[10px] shadow-2xl' data-aos="fade-right" data-aos-duration="1000">
          <div className='flex'>
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
          </div>
          <div className='h-auto'>
            <p className='font-Poppins'>This app has been a lifesaver for my mental health. Being able to vent without judgment has helped me process so many emotions.</p>
          </div>

          <div className='flex items-center gap-[20px]'>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block size-10 rounded-full "
            />
            <div className='flex flex-col font-Poppins'>
              <p className='font-semibold'>James Wilson</p>
              <p className='text-gray-500'>Student</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-[10px] rounded-2xl gap-[10px] shadow-2xl' data-aos="fade-right" data-aos-duration="2000">
          <div className='flex'>
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
          </div>
          <div className='h-auto'>
            <p className='font-Poppins'>I love how supportive the community is. When I post a rant, I always get comments from people who understand exactly what I'm going through.</p>
          </div>

          <div className='flex items-center gap-[20px]'>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="inline-block size-10 rounded-full "
            />
            <div className='flex flex-col font-Poppins'>
              <p className='font-semibold'>Sam Johnson</p>
              <p className='text-gray-500'>Student</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col p-[10px] rounded-2xl gap-[10px] shadow-2xl ' data-aos="fade-right" data-aos-duration="3000">
          <div className='flex'>
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
            <img src={Star} alt="star" className='w-[30px]' />
          </div>
          
          <div className='h-auto'>
            <p className='font-Poppins'>As someone with anxiety, having a place to express my frustrations without worrying about backlash has been incredibly therapeutic.</p>
          </div>

          <div className='flex items-center gap-[20px]'>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              className="inline-block size-10 rounded-full "
            />
            <div className='flex flex-col font-Poppins'>
              <p className='font-semibold'>Alex Thompson</p>
              <p className='text-gray-500'>Student</p>
            </div>
          </div>
        </div>


      </main>

    </div>

    <footer className='bg-[rgb(139,92,246)] flex flex-col justify-center items-center font-Poppins p-[50px] space-y-3'>
      <p className='text-5xl text-white font-bold text-center'>Ready to start ranting?</p>
      <p className='text-white w-[90%] md:w-[70%] text-center'>Join our community of passionate ranters and find relief through expression. It's free to start, and only takes a minute to sign up.</p>
      <Link to='/register'>
        <button className='bg-white text-[rgb(139,92,246)] p-[10px] rounded-2xl cursor-pointer'> Sign Up Now</button>
      
      </Link>
    </footer>
    </>
  )
}
