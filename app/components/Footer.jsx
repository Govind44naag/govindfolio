import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className="text-center">
  {/* Logo */}
  <Image
    src={assets.logo_dark1}
    alt=""
    className="w-36 mx-auto mb-2 rounded-full"
  />

  {/* Mail section */}
  <div className="flex items-center justify-center gap-1">
    <Image
      src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
      alt="Mail Icon"
      className="w-5 h-5"
    />
    <span className="text-sm">govindnaag44@gmail.com</span>
  </div>
</div>

      <div className='text-center sm:flex items-center justify-between border-t 
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p> &copy; 2025 Govind Naag. All rights reserved.</p>
      <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
        <li><a target='_blank' href="https://github.com/Govind44naag">Github</a></li>
        <li><a target='_blank' href="https://www.linkedin.com/in/govind-naag-925983259">LinkedIn</a></li>
        <li><a target='_blank' href="https://www.instagram.com/govind.naag">Instagram</a></li>
       </ul>
      </div>
    </div>
  )
}

export default Footer
