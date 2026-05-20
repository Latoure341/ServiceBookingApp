import React from "react";
import { BsLightning } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineScissor } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="py-4 text-center text-3xl font-bold text-black sm:text-4xl">Popular Services</h1>
        <p className="mb-4 text-center text-base text-green-900 sm:text-lg">
          Browse our most requested services
        </p>

        <div className="mt-6 grid w-full grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <BsLightning className="text-white text-2xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Electrician</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <GiAutoRepair className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Home repair</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <IoHomeOutline className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Cleaning</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <GiAutoRepair className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Plumbing</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <MdComputer className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">IT Support</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <FaCarSide className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Auto Service</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <FaBrush className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Painting</h2>
          </span>
          <span className="flex min-h-40 flex-col items-center justify-center rounded-lg bg-green-900 p-6 text-center sm:p-8">
            <AiOutlineScissor className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">
              Beauty & Salon
            </h2>
          </span>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="py-4 text-center text-3xl font-bold text-black sm:text-4xl">How It Works</h1>
        <p className="mb-4 text-center text-base text-green-900 sm:text-lg">
          Get connected with local professionals in three simple steps
        </p>

        <div className="mt-1 grid w-full grid-cols-1 gap-8 py-6 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-2 text-center">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <CiSearch className="text-white text-5xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900 text-2xl p-2">Search Services</h4>
            <p className="text-green-900">Find the service you need in your city</p>
          </div>

          <div className="flex flex-col items-center justify-center p-2 text-center">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <IoShieldOutline className="text-white text-5xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900 text-2xl p-2">Compare Providers</h4>
            <p className="text-green-900">Browse verified local professionals</p>
          </div>

          <div className="flex flex-col items-center justify-center p-2 text-center">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <FaRegClock className=" text-white text-5xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900 text-2xl p-2">Book Instantly</h4>
            <p className="text-green-900">Schedule at your convenience</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 bg-green-800 p-6 text-center sm:grid-cols-3">
        <span className="p-4">
            <h2 className="mx-2 mt-2 p-2 text-4xl font-extrabold text-white sm:text-5xl">50K +</h2>
            <p className="p-2 text-white">Active Professionals</p>
        </span>
        <span className="p-4">
            <h2 className="mx-2 mt-2 p-2 text-4xl font-extrabold text-white sm:text-5xl">100K +</h2>
            <p className="p-2 text-white">Cities Covered</p>
        </span>
        <span className="p-4">
            <h2 className="mx-2 mt-2 p-2 text-4xl font-extrabold text-white sm:text-5xl">1M +</h2>
            <p className="p-2 text-white">Services Booked</p>
        </span>
      </div>
      
      <div className="flex flex-col items-center justify-center bg-green-700 px-4 py-12 text-center sm:px-8">
        <h2 className="max-w-4xl px-2 text-3xl font-extrabold text-white sm:text-5xl">Ready to Book Your Next Service?</h2>
        <p className="max-w-3xl p-4 text-base text-white sm:text-xl">Join thousands of satisfied customers finding trusted local professionals every day.</p>
        <button
        onClick={()=>{navigate("/signin")}} 
        className="hover:shadow-xl hover:bg-gray-200 cursor-pointer mt-4 rounded-4xl bg-white px-8 py-4 text-xl font-bold text-green-900 sm:text-2xl">Get Started Now</button>
      </div>

      <div className="grid grid-cols-1 gap-4 border-b-2 bg-green-900 p-6 text-white sm:grid-cols-2 lg:grid-cols-4">
        <span className="flex flex-col p-4">
            <h2 className="text-white font-bold mb-2">LocalServe</h2>
            <p className="text-white">Your trusted platform for local service bookings</p>
        </span>

        <span className="flex flex-col p-4">
          <h2 className="text-white font-bold mb-2">Services</h2>
          <ul className="text-white">
            <li>Home Repair</li>
            <li>Cleaning</li>
            <li>Beauty</li>
            <li>Auto Services</li>
          </ul>
        </span>

        <span className="flex flex-col p-4">
          <h2 className="text-white font-bold mb-2">Company</h2>
          <ul className="text-white">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </span>

        <span className="flex flex-col p-4">
          <h2 className="text-white font-bold mb-2">Support</h2>
          <ul className="text-white">
            <li>Help Centre</li>
            <li>Terms of Service</li>
            <li>Privacy And Policy</li>
            <li>Trust & Safety</li>
          </ul>
        </span>
      </div>

      <div className="flex justify-center bg-green-900 p-8 text-center text-white sm:p-10">
        <h2 className="text-green-400">&copy 2026 LocalServe. All rights reserved.</h2>
      </div>
    </>
  );
};

export default Services;
