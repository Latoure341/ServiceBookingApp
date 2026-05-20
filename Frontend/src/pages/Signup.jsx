import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
     <div className="w-screen h-96 mt-25 flex justify-center items-center">
          <form className="px-10 flex flex-col items-center justify-center p-5 bg-gray-100 shadow-lg rounded-lg gap-4">
            <h1 className="text-3xl font-bold text-green-900">Local Serve</h1>
            <div className="flex flex-col gap-2 justify-center items-center">
                <span className="flex flex-col">
                <label>Full Names: </label>
                <input
                className="bg-white text-black px-5 py-2 mt-1 outline-none" 
                type="text" placeholder="Eric Mothupi" />
              </span>
              <span className="flex flex-col">
                <label>Email: </label>
                <input
                className="bg-white text-black px-5 py-2 mt-1 outline-none" 
                type="email" placeholder="Enter your email" />
              </span>
              <span className="flex flex-col">
                <label>Password: </label>
                <input
                className="bg-white text-black px-5 py-2 mt-2 outline-none" 
                type="password" placeholder="Enter your password" />
              </span>
              <span className="flex flex-col">
                <label>Confirm Password: </label>
                <input
                className="bg-white text-black px-5 py-2 mt-1 outline-none" 
                type="password" placeholder="Confirm your password" />
              </span>
              <button 
              className="bg-green-800 text-white font-bold px-4 py-2 mt-4 rounded-lg cursor-pointer hover:bg-green-700"> Sign Up</button>
              <span className="w-full flex items-center justify-evenly gap-2 p-1">
                <p>Already have an account?</p>
                <Link to="/signin" className="text-blue-800 underline cursor-pointer">Sign In</Link>
              </span>
            </div>
          </form>
        </div>
  )
}

export default Signup