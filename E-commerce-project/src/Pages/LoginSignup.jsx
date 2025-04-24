import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                toast.success("Account Created Successfully", {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: true,
                    theme: "colored",
                });
            } else {
                toast.error("Password and Confirm Password do not match", {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: true,
                    theme: "colored",
                });
            }
        } else {
            toast.error("Please fill all the fields", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,
                theme: "colored",
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-white to-gray-500">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>

                <div className="flex flex-col gap-4 mt-6">
                    <input type="text" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    <input type="email" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />

                    {/* Show Password Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="showPassword" onChange={() => setShowPassword(!showPassword)} />
                        <label htmlFor="showPassword" className="text-gray-600 text-lg">Show Password</label>
                    </div>
                </div>

                {/* Continue Button */}
                <button className="w-full h-10 mt-6 text-white bg-red-500 text-lg rounded-md hover:bg-red-600 transition" onClick={handleClick}>
                    Continue
                </button>

                <p className="text-sm text-gray-600 text-center mt-5">
                    Already have an account? <Link to="/login" className="text-red-500 hover:text-green-500  cursor-pointer">Login Here</Link>
                </p>

                {/* Agreement Checkbox */}
                <div className="flex items-center gap-3 mt-4">
                    <input type="checkbox" id="agree" />
                    <label htmlFor="agree" className="text-gray-600 text-sm">By continuing, I agree to the Terms of Use & Privacy Policy</label>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;

export const Login = () => {

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (email && password) {
            toast.success("login sucessfull", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,
                theme: "colored",
            });
        }
        else {
            toast.error("Please fill all the fields", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,
                theme: "colored",
            });
        }
    }



    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-white to-gray-500">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-3xl font-bold text-center">Login</h1>

                <div className="flex flex-col gap-4 mt-6">
                    <input type="email" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                    {/* Show Password Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="showPassword" onChange={() => setShowPassword(!showPassword)} />
                        <label htmlFor="showPassword" className="text-gray-600 text-lg">Show Password</label>
                    </div>
                </div>

                {/* Continue Button */}
                <button className="w-full h-10 mt-6 text-white bg-red-500 text-lg rounded-md hover:bg-red-600 transition" onClick={handleClick}>
                    Continue
                </button>

                <p className="text-sm text-gray-600 text-center mt-5">
                    Dont have an account? <Link to="/signup" className="text-red-500 hover:text-green-500  cursor-pointer">Signup Here</Link>
                </p>

                {/* Agreement Checkbox */}
             
            </div>
        </div>
    )
}