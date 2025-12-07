import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

export const About = () => {
  return (
    <motion.div initial={{opacity: 0, x:-300}} transition={{duration: 2}} whileInView={{opacity:1, x:0}} viewport={{onec: true}} className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
  <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
    About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
  </h1>
  <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
  <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' />
    <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 md:max-w-lg'>
      <div className='grid grid-cols-2 gap-y-6 gap-x-16 w-full mb-6'>
        <div>
          <p className='text-4xl font-medium text-gray-800'>10+</p>
          <p>Years Of Excellence</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>12+</p>
          <p>Projects Completed</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>20+</p>
          <p>Mn. Sq. Ft. Delivered</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>25+</p>
          <p>Ongoing Projects</p>
        </div>
      </div>
      <p className='mb-6'>
        With over a decade of excellence, Estate has built a strong reputation for trust, quality, and innovation in real estate. We have successfully delivered millions of square feet across premium residential and commercial projects, redefining the skyline with every structure we create.<br/><br/>

        Our commitment goes beyond buildings — we focus on crafting spaces that inspire comfort, community, and growth. Backed by a team of experts and a vision for modern living, we continue to shape landmarks that stand the test of time.<br/><br/>

        Your dream space is not just our project — it's our passion.
      </p>
      <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
    </div>
  </div>
</motion.div>

  )
}
