import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaSearch, FaUser } from "react-icons/fa";

export function Topbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between m-4 items-center mb-10 border-b pb-4 border-gray-300 gap-4 md:gap-0">
      {/* Search Bar */}
      <div className="flex items-center w-full md:w-96 bg-gray-100 rounded-lg px-3 py-2">
        <FaSearch className="text-green-600 text-xl" />
        <input
          type="text"
          placeholder="Search bookings..."
          className="ml-2 w-full outline-none text-green-600 text-base md:text-xl bg-transparent"
        />
      </div>

      {/* Notification & User */}
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition">
          <CiBellOn className="text-2xl text-green-900" />
        </div>

        <div className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center text-white text-xl md:text-3xl">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
export default Topbar;
