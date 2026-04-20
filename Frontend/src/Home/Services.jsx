import React from "react";
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
      <div className="flex flex-col flex-wrap items-center justify-center mt-6 p-4">
        <h1 className="text-black text-4xl font-bold py-4">Popular Services</h1>
        <p className="text-green-900 text-lg mb-4">
          Browse our most requested services
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-6 py-6 w-3/5 ">
          <span className="bg-green-900 p-10 rounded-lg">
            <BsLightning className="text-white text-2xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Electrician</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <GiAutoRepair className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Home repair</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <IoHomeOutline className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Cleaning</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <GiAutoRepair className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Plumbing</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <MdComputer className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">IT Support</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <FaCarSide className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Auto Service</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <FaBrush className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">Painting</h2>
          </span>
          <span className="bg-green-900 p-10 rounded-lg">
            <AiOutlineScissor className="text-white text-xl font-bold" />
            <h2 className="text-white text-lg font-bold mt-6">
              Beauty & Salon
            </h2>
          </span>
        </div>
      </div>

      <div className="w-screen flex flex-col flex-wrap items-center justify-center mt-6 p-4">
        <h1 className="text-black text-4xl font-bold py-4">How It Works</h1>
        <p className="text-green-900 text-lg mb-4">
          Get connected with local professionals in three simple steps
        </p>

        <div className="w-full flex flex-wrap gap-2 items-center justify-center mt-1 py-6">
          <div className="flex flex-col justify-center items-center p-2 ">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <BsLightning className="text-white text-2xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900">Search Services</h4>
            <p className="text-green-900">Find the service you need in your city</p>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <GiAutoRepair className="text-white text-xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900">Compare Providers</h4>
            <p className="text-green-900">Browse verified local professionals</p>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <span className="bg-green-900 p-6 rounded-lg m-4">
              <IoHomeOutline className=" text-white text-xl font-bold" />
            </span>
            <h4 className="font-bold text-green-900">Book Instantly</h4>
            <p className="text-green-900">Schedule at your convenience</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mt-4 bg-green-800 p-6">
        <span className="m-10 p-4">
            <h2 className="mx-2 mt-2 p-2 font-extrabold text-white text-5xl">50K +</h2>
            <p className="p-2 text-white">Active Professionals</p>
        </span>
        <span className="m-10 p-4">
            <h2 className="mx-2 mt-2 p-2 font-extrabold text-white text-5xl">100K +</h2>
            <p className="p-2 text-white">Cities Covered</p>
        </span>
        <span className="m-10 p-4">
            <h2 className="mx-2 mt-2 p-2 font-extrabold text-white text-5xl">1M +</h2>
            <p className="p-2 text-white">Services Booked</p>
        </span>
      </div>
      
      <div className="flex flex-col justify-center items-center bg-green-700 p-8">
        <h2 className="mx-2 mt-12 pt-10 px-6 font-extrabold text-white text-5xl">Ready to Book Your Next Service?</h2>
        <p className="p-4 text-white text-xl">Join thousands of satisfied customers finding trusted local professionals every day.</p>
        <button className="m-8 py-4 px-10 rounded-4xl bg-white text-2xl text-green-900 font-bold">Get Started Now </button>
      </div>

      <div className="bg-green-900">
        <span>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>

        </span>
      </div>
    </>
  );
};

export default Services;
