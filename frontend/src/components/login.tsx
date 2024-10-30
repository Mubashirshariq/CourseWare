import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    type loginForm = {
        email: string,
        password: string,
    };

    const navigate = useNavigate();
    const api = "http://localhost:3000/admin/signin";

    async function SignIn(data: loginForm) {
        try {
            const response = await axios.post(api, data);
            navigate("/");
            console.log("response data", response.data);
        } catch (error) {
            console.log("Error occurred while signing in");
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>();
    
    console.log(errors);  // To verify if errors are logged correctly

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            <div className="w-full max-w-md p-4 flex flex-col justify-center items-center border border-gray-700 rounded-lg bg-gray-900 shadow-2xl transform transition-all duration-300 hover:shadow-none hover:scale-105">
                <h1 className="text-4xl m-4 font-semibold text-gray-100">Login</h1>
                <form onSubmit={handleSubmit(SignIn)} className="flex flex-col gap-4 w-full">
                    <label className="text-stone-200">Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="text"
                        placeholder="Email"
                        className="p-2 border border-black rounded-lg"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <label className="text-stone-200">Password</label>
                    <input
                        {...register("password", { 
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters long" }
                        })}
                        type="password"
                        placeholder="Password"
                        className="p-2 border border-black rounded-lg"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <button type="submit" className="bg-blue-600 p-3 rounded-lg text-gray-200 font-semibold hover:bg-blue-500 hover:text-white transition duration-200">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
