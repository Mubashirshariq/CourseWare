import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBookOpen, FaPlusCircle, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-24 min-h-screen z-100 navbar bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 p-4 shadow-lg">
            <button 
                className="text-white block md:hidden"
                onClick={toggleMenu} 
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <ul className={`flex flex-col space-y-4 p-6 md:p-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
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
                        className={`flex items-center text-white hover:text-amber-400 transition duration-300 ${location.pathname === '/admin/my-courses' ? 'text-amber-400 font-semibold' : ''}`}
                    >
                        <FaBookOpen className="mr-2 text-xl" />
                        My Courses
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/admin/create-course" 
                        className={`flex items-center text-white hover:text-amber-400 transition duration-300 ${location.pathname === '/admin/create-course' ? 'text-amber-400 font-semibold' : ''}`}
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
