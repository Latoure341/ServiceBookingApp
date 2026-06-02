import React from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdSearch } from "react-icons/io";

const UserDashBoard = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center px-6 py-3
      border-b border-gray-300 shadow-sm"
      >
        <div className="flex justify-center items-center gap-6">
          <span className="text-green-700 text-2xl font-bold">LocalServe</span>
          <span className="hover:underline cursor-pointer">Overview</span>
          <span className="hover:underline cursor-pointer">My Bookings</span>
          <span className="hover:underline cursor-pointer">Messages</span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <IoIosNotificationsOutline className="text-3xl" />
          <span>|</span>
          <div className="flex justify-center items-center gap-2">
            <span>
              <p className="font-bold my-0">John Doe</p>
              <p className="text-sm text-gray-500 my-0">Customer</p>
            </span>
            <span className="bg-green-700 text-white rounded-full h-8 w-8 flex items-center justify-center">
              D
            </span>
          </div>
        </div>
      </nav>

      <div className="container-fluid px-6 py-4">
        <span>
          <h1 className="text-3xl font-bold mt-6 mb-4">Welcome back, John!</h1>
          <p className="text-gray-600 mb-6">
            Find and book local services for your needs.
          </p>
        </span>

        <span className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-ful shadow-sm">
          <span className="container-fluid w-full flex items-center gap-2">
            <IoMdSearch className="text-3xl" />
            <input
              type="text"
              placeholder="Search for services..."
              className="outline-none rounded-md px-4 py-2 w-full "
            />
          </span>
          <button className="flex items-center justify-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md mt-2">
            <CiFilter className="inline-block mr-1 " />
            Filter
          </button>
        </span>
      </div>

      <div className="container-fluid px-6 py-4 flex gap-5">
        <div className="w-3/4">
          <span>
            <h3>Upcoming Bookings</h3>
            <p>view all</p>
          </span>
        </div>
        <div className="w-1/4">
          <p>Aside</p>
        </div>
      </div>
    </>
  );
};

export default UserDashBoard;
