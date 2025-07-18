import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className='text-center text-5xl font-Ovo'>My latest work</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl  mx-auto mt-5 mb-12 font-Ovo'>
        welcome to my web development portfolio! Explore a collection of projects
        showcasing my projects web development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 dark:text-black">
        {workData.map((project, index) =>
          project.bgImage ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-11/12 sm:w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between gap-3 duration-500 group-hover:bottom-7 transition-all">
                <div className="w-[80%]">
                  <h2 className="font-bold text-sm sm:text-base text-black truncate">{project.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 hover:bg-green-500 transition">
                  {assets.send_icon && (
                    <a target='_blank' href={project.link} ><Image src={assets.send_icon} alt="send icon" className="w-4 sm:w-5 " /></a>
                  )}
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </motion.div>


      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="#work" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
        my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white 
        dark:hover:bg-[#2a004a]'>
        {/* Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' */}
                Show more <Image src={  assets.right_arrow_bold_dark  } alt='Right arrow'

          className='w-4' />
      </motion.a>
    </motion.div>

  )
}

export default Work
