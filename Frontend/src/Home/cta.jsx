import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const cta = () => {
  return (
    <div className='bg-green-900 px-4 py-6'>
      <p className='mt-4 mb-2 text-green-400'>Connecting you with local experts</p>
      <h1 className='text-9xl font-extrabold text-white mb-6 py-4'>Book Local Services in Minutes</h1>
      <p className='mt-6 mb-6 px-4 text-green-300'>Find trustd professionals in your city. From home repair to beauty services. book instantly</p>

      <div className='flex items-center gap-4 bg-white py-2 px-4 m-4 rounded w-3/5'>
        <span className='flex gap-2 items-center px-2 w-2/5 border-2 border-green-200 rounded-lg'>
            <CiSearch />
            <input className='w-full py-2 outline-none' type='text' placeholder='What service do you need...'/>
        </span>
        <span className='flex flex-wrap gap-2 items-center px-2 w-2/5 border-2 border-green-200 rounded-lg'>
            <CiLocationOn />
            <input className='py-2 outline-none' type='text' placeholder='Enter the city...' />
        </span>
        <button className='cursor-pointer py-2 px-4 bg-green-300 rounded-lg' type='button'>Search Now </button>  
      </div>

    </div>
  )
}

export default cta
