import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated,setIsAuthenticated]=useState<boolean>();

  useEffect(()=>{
    const token=localStorage.getItem("jwt_token");
    setIsAuthenticated(!!token)
  },[]);

  return (
    <div className="fixed top-0 left-0 z-50 navbar bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 p-4 w-screen flex flex-row justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold m-4 tracking-wide text-indigo-400 hover:text-indigo-500 cursor-pointer">
        Course<span className="text-indigo-300">Ware</span>
      </h1>
      <div className="flex flex-row justify-end gap-4">
        {isAuthenticated ? (
          <button
            onClick={()=>{
              localStorage.removeItem("jwt_token");
              setIsAuthenticated(false);
              navigate("/"); 
            }}
            className="flex items-center bg-gray-700 text-gray-200 p-3 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 shadow-md"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/admin/login")}
              className="flex items-center bg-gray-700 text-gray-200 p-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-md"
            >
              <FiLogIn className="mr-2" />
              Login
            </button>
            <button
              onClick={() => navigate("/admin/signup")}
              className="flex items-center bg-gray-700 text-gray-200 p-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-md"
            >
              <AiOutlineUserAdd className="mr-2" />
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
