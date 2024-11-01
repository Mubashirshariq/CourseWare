import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBookOpen, FaPlusCircle } from 'react-icons/fa';

function Sidebar() {
    const location = useLocation();

    return (
        <div className="fixed  top-24 min-h-screen z-100 navbar bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 p-4   shadow-lg">
            <ul className="flex flex-col space-y-4 p-6">
                <li>
                    <Link 
                        to="/" 
                        className={`flex items-center text-white hover:text-amber-400 transition duration-300 ${location.pathname === '/' ? 'text-amber-400 font-semibold' : ''}`}
                    >
                        <FaHome className="mr-2 text-xl" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/admin/my-courses" 
                        className={`flex items-center text-white hover:text-amber-400 transition duration-300 ${location.pathname === '/my-courses' ? 'text-amber-400 font-semibold' : ''}`}
                    >
                        <FaBookOpen className="mr-2 text-xl" />
                        My Courses
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/admin/create-course" 
                        className={`flex items-center text-white hover:text-amber-400 transition duration-300 ${location.pathname === '/create-course' ? 'text-amber-400 font-semibold' : ''}`}
                    >
                        <FaPlusCircle className="mr-2 text-xl" />
                        Create Course
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
