import axios from "axios";
import React, { useState } from "react";

function Register() {
    const api = "http://localhost:3000/admin/signup";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    async function register(e) {
        e.preventDefault();
        try {
            const response = await axios.post(api, {
                email,
                password
            });
            setData(response.data);
            console.log(response.data);
            
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-800">
            <div className="w-1/3 h-auto p-8 flex flex-col justify-center items-center border border-orange-400 rounded-lg bg-slate-500 shadow-lg">
                <h1 className="text-4xl m-4">Register</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={register}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-2 border border-black rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-2 border border-black rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-amber-400 p-2 m-2 rounded-lg">Register</button>
                </form>
                {data && <p className="text-white">Registration successful!</p>}
            </div>
        </div>
    );
}

export default Register;
