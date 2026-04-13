import React from 'react'

const cta = () => {
  return (
    <div className='bg-green-300 p-4'>
      <p className='mt-4 mb-2 text-green-800'>Connecting you with local experts</p>
      <h1 className='text-9xl font-extrabold text-white'>Book Local Services in Minutes</h1>
      <p className='mt-6 px-4 text-green-600'>Find trustd professionals in your city. From home repair to beauty services. book instantly</p>

      <div className='flex content-center gap-4 bg-white py-1 px-2 m-4 rounded w-2/5'>
        <span>
            <input className='' type='text' placeholder='What service do you need...'/>
        </span>
        <span>
            <input type='text' placeholder='Enter the city' />
        </span>
        <button className='py-3 px-4 bg-green-600' type='button'>Search Now </button> 
        
      </div>
    </div>
  )
}

export default cta
