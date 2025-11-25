import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiImport } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { FaUser, FaBars } from "react-icons/fa";

export function Sidebar({ isOpen, toggleSidebar, active = "dashboard" }) {
  const links = [
    { name: "Dashboard Overview", href: "/dashboard", icon: <MdOutlineDashboard />, key: "dashboard" },
    { name: "All Bookings", href: "/booking", icon: <SlCalender />, key: "booking" },
    { name: "Export Data", href: "/data", icon: <TfiImport />, key: "data" },
    { name: "Settings", href: "/setting", icon: <CiSettings />, key: "settings" },
  ];

  return (
    <div
      className={`
        bg-white border-r p-5 flex flex-col justify-between transition-all
        ${isOpen ? "w-64" : "w-16"}
        md:w-64
      `}
    >
      {/* Mobile toggle */}
      <div className="md:hidden mb-4">
        <button onClick={toggleSidebar} className="p-2 bg-gray-100 rounded-md">
          <FaBars size={20} />
        </button>
      </div>

      <div>
        <h2 className={`text-2xl font-bold mb-6 text-black transition-opacity ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
          Wellness Connect
        </h2>

        <nav className="space-y-2">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-medium ${
                active === link.key ? "bg-green-200 text-black" : "text-green-500 hover:text-gray-600"
              }`}
            >
              {link.icon}
              <span className={`transition-opacity ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
                {link.name}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 pb-3">
        <div className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center">
          <FaUser className="text-2xl text-white" />
        </div>
        <div className={`transition-opacity ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}>
          <p className="font-medium text-black">Admin Name</p>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>
      </div>
    </div>
  );
}
