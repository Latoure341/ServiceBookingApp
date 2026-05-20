import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const cta = () => {
  return (
    <div className='bg-green-900 px-4 py-10 sm:px-6 lg:px-12'>
      <div className='mx-auto flex max-w-6xl flex-col items-start'>
        <p className='mb-2 mt-4 text-green-400'>Connecting you with local experts</p>
        <h1 className='max-w-5xl py-4 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-8xl'>Book Local Services in Minutes</h1>
        <p className='mb-6 mt-4 max-w-2xl text-base text-green-300 sm:text-lg'>Find trustd professionals in your city. From home repair to beauty services. book instantly</p>

        <div className='mt-4 flex w-full flex-col gap-3 rounded bg-white p-3 sm:p-4 lg:w-4/5 lg:flex-row lg:items-center'>
          <span className='flex w-full items-center gap-2 rounded-lg border-2 border-green-200 px-2'>
            <CiSearch />
            <input className='w-full min-w-0 py-2 outline-none' type='text' placeholder='What service do you need...'/>
          </span>
          <span className='flex w-full items-center gap-2 rounded-lg border-2 border-green-200 px-2'>
            <CiLocationOn />
            <input className='w-full min-w-0 py-2 outline-none' type='text' placeholder='Enter the city...' />
          </span>
          <button className='w-full cursor-pointer rounded-lg bg-green-300 px-4 py-2 font-semibold text-green-950 sm:w-auto sm:whitespace-nowrap' type='button'>Search Now</button>  
        </div>
      </div>
    </div>
  )
}

export default cta
