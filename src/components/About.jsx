import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'> Trusted by Developers across the world</h2>
                <p className='text-3xl text-gray-500 py-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque, error assumenda sit, quo iusto totam minima atque, quia ipsa dolorum magni nisi repudiandae modi beatae impedit ad maxime voluptatibus.</p>
            </div>

            <div className='grid md:grid-cols-3 px-2 gap-1 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='mt-2 text-gray-400'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='mt-2 text-gray-400'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='mt-2 text-gray-400'>Transactions</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About