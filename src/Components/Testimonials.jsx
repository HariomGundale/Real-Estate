import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:-300}}
    transition={{duration: 2}}
    whileInView={{opacity:1, x:0}}
    viewport={{onec: true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hiddden' id="Testimonials">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
        <div className='flex flex-wrap gap-8 justify-center'>
            {testimonialsData.map((testimonials, index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt}/>
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2> 
                    <p className='text-gray-500 text-sm mb-4'>{testimonials.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonials.rating}, (item, index)=>(<img key={index} src={assets.star_icon} alt=''/>))}
                    </div>
                    <p className='text-gray-600'>{testimonials.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials