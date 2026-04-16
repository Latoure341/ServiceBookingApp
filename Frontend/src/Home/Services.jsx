import React from 'react'
import { BsLightning } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineScissor } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap items-center justify-center mt-6 p-4'>
        <h1 className='text-black text-4xl font-bold py-4'>Popular Services</h1>
        <p className='text-green-900 text-lg mb-4'>Browse our most requested services</p>

        <div className='flex flex-wrap gap-4 items-center justify-center mt-6 py-6 w-3/5 '>
            <span className='bg-green-900 p-10 rounded-lg'>
                <BsLightning className='text-white text-2xl font-bold' />
                <h2 className='text-white text-lg font-bold mt-6'>Electrician</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <GiAutoRepair className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Home repair</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <IoHomeOutline className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Cleaning</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <GiAutoRepair className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Plumbing</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <MdComputer className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>IT Support</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <FaCarSide className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Auto Service</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <FaBrush className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Painting</h2>
            </span>
            <span className='bg-green-900 p-10 rounded-lg'>
                <AiOutlineScissor className='text-white text-xl font-bold'/>
                <h2 className='text-white text-lg font-bold mt-6'>Beauty & Salon</h2>
            </span>
        </div>
      </div>
    </>
  )
}

export default Services
