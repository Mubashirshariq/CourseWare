import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className="navbar bg-black text-white p-2 w-screen flex flex-row justify-between">
      <h1 className="text-2xl m-4">Course App</h1>
      <div className="flex flex-row justify-end">
        <button onClick={()=>navigate('/signin')} className="bg-amber-400 p-2 m-2 rounded-lg" >Login</button>
        <button onClick={()=>navigate('/register')} className="bg-amber-400 p-2 m-2 rounded-lg">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
    