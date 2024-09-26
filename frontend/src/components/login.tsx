import React from "react";

function Login() {
    return (
        <div  className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-1/3 h-1/2 p-4 flex flex-col justify-center items-center border border-orange-400 rounded-lg bg-green-200">
        <h1 className="text-4xl m-4">Login</h1>
        <form className="flex flex-col gap-4">
            <input type="text" placeholder="Username" className="p-2 border border-black rounded-lg" />
            <input type="password" placeholder="Password" className="p-2 border border-black rounded-lg" />
            <button className="bg-amber-400 p-2 m-2 rounded-lg">Login</button>
        </form>
        </div>
        </div>
    );
}

export default Login;