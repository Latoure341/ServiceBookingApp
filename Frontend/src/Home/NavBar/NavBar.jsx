import React from 'react'

const NavBar = () => {
  return (
    <section className='flex flex-wrap justify-between content-center p-4 bg-green-300'>
      <span className='text-green-800 font-extrabold text-xl'>LocalServiceBooking</span>
      
      <div className='flex gap-6'>
        <span className='text-green-800'>Services</span>
        <span className='text-green-800'>How It Works</span>
        <span className='text-green-800'>Cities</span>
      </div>
      
      <button className='text-green-800 bg-green-100 px-2 py-1 rounded-xl' type='button'>Sign In</button>
    </section>
  )
}

export default NavBar
