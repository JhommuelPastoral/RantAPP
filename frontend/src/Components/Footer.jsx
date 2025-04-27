import { Twitter, Facebook,Instagram   } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-[rgb(26,31,44)] text-white font-Poppins ">
      <div className="max-w-[1200px] mx-[20px] md:mx-auto px-[20px] py-[50px] border-b-2">
        <div className="grid md:grid-cols-4 gap-[20px]">

          <div className="space-y-[10px]">
            <p className="font-bold">Rant</p>
            <p className="text-gray-400">Your safe space to express yourself without judgment. Let it all out.</p>
          </div>

          <div className="space-y-[10px]">
            <p className="font-bold">Product</p>
            <nav >
              <ul className=' space-y-[10px] font-Poppins' >
                <li className='cursor-pointer text-gray-400'> <a href='#Features'> Features</a></li>
                <li className='cursor-pointer text-gray-400'> <a href="#How">How it Works</a> </li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Pricing</a> </li>
                <li className='cursor-pointer text-gray-400'> <a href="#">FAQ</a> </li>
              </ul>
           </nav>
          </div>

          <div className="space-y-[10px]">
            <p className="font-bold">Company</p>
            <nav >
              <ul className=' space-y-[10px] font-Poppins' >
                <li className='cursor-pointer text-gray-400'> <a href='#'> About Us</a></li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Contact</a> </li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Carrers</a> </li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Blogs</a> </li>

              </ul>
           </nav>
          </div>

          <div className="space-y-[10px]">
            <p className="font-bold">Legal</p>
            <nav >
              <ul className=' space-y-[10px] font-Poppins' >
                <li className='cursor-pointer text-gray-400'> <a href='#'>Privacy Policy</a></li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Terms of Service</a> </li>
                <li className='cursor-pointer text-gray-400'> <a href="#">Cookie Policy</a> </li>

              </ul>
           </nav>
          </div>
        </div>

      </div>
      <div className="mx-[20px] max-w-[1200px] md:mx-auto mt-[10px] pb-[50px] flex flex-col md:flex-row justify-self-center md:justify-between px-[20px]">
        <p className="text-gray-500">© 2025 Rant. All rights reserved.</p>
        <div className="flex gap-[10px] justify-center items-center ">
          <a href="https://x.com/Snoozire" target='_blank'>
            <Twitter/>
          </a>
          <a href="https://www.facebook.com/Jhommuel.Pastoral" target='_blank'>
            <Facebook/>
          </a>
          <a href="https://www.instagram.com/mintererry/" target='_blank'>
            <Instagram/>
          </a>

        </div>
      </div>


    </div>
  )
}
