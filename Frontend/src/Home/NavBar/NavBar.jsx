import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <section className='flex flex-col gap-4 bg-green-900 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 lg:px-12'>
      <span className='text-xl font-extrabold text-green-400'>LocalServe</span>
      
      <div className='flex flex-wrap gap-x-6 gap-y-2'>
        <span className='text-green-400'>Services</span>
        <span className='text-green-400'>How It Works</span>
        <span className='text-green-400'>Cities</span>
      </div>
      
      <button
      onClick={() => navigate("/signin")} 
      className='w-full rounded-xl bg-green-700 px-4 py-2 text-green-400 sm:w-auto cursor-pointer hover:text-white hover:font-bold' 
      type='button'>Sign In</button>
    </section>
  )
}

export default NavBar
