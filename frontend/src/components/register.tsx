import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

type Inputs = {
    email: string;
    password: string;
};

function Register() {
    const api = "http://localhost:3000/admin/signup";
    const [data, setData] = useState<Inputs>();
    const navigate = useNavigate();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>({
        resolver: zodResolver(schema)
    });
  
    const SignIn: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await axios.post(api, data);
            setData(response.data);
            navigate('/login');
        } catch (error) {
                console.log("Error: ", error);
            }
        }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            <div className="w-full max-w-md p-8 flex flex-col justify-center items-center border border-gray-700 rounded-lg bg-gray-900 shadow-2xl transform transition-all duration-300 hover:shadow-none hover:scale-105">
                <h1 className="text-3xl mb-6 font-semibold text-gray-100">Create Account</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(SignIn)}>
                    <label className="text-stone-200">Email</label>
                    <input 
                        className="p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    
                    <label className="text-stone-200">Password</label>
                    <input 
                        type="password"
                        className="p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <button type="submit" className="bg-blue-600 p-3 rounded-lg text-gray-200 font-semibold hover:bg-blue-500 hover:text-white transition duration-200">
                        Register
                    </button>
                </form>
                {data && <p className="text-green-400 mt-4">Registration successful!</p>}
            </div>
        </div>
    );
}

export default Register;
