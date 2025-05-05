import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

//signup page
const LoginSignup = () => {
    const { loginUser } = useContext(ShopContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [role, setRole] = useState("user");


    const getUsers = () => {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    };

    const saveUsers = (users) => {
        localStorage.setItem("users", JSON.stringify(users));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (username && email && password && confirmPassword) {
            if (password === confirmPassword) {
                if (isChecked) {
                    const users = getUsers();

                    if (users.find((user) => user.email === email)) {
                        toast.error("Email already registered", {
                            position: "top-left",
                            autoClose: 1000,
                            hideProgressBar: true,
                            theme: "colored",
                        });
                        return;
                    }
                    const newUser = { name: username, email, password, role };
                    users.push(newUser);
                    saveUsers(users);
                    toast.success("Account Created Successfully", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: true,
                        theme: "colored",
                    });
                    setUsername("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setIsChecked(false);
                    setShowPassword(false);
                    setRole("user");
                    navigate("/login");
                } else {
                    toast.error("Please agree to the terms and conditions", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: true,
                        theme: "colored",
                    });
                }
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
            <div className="bg-white shadow-md rounded-lg p-8 w-1/3 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignup}>
                    <div className="flex flex-col gap-4 mt-6">
                        <input type="text" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        <input type="email" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />


                        {/* <div className="flex items-center gap-4 mt-2">
                            <label className="text-gray-700 text-lg">Select Role:</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="border accent-orange- border-gray-300 rounded-md px-2 py-1">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div> */}


                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-700  cursor-pointer" id="showPassword" onChange={() => setShowPassword(!showPassword)} checked={showPassword} />
                            <label htmlFor="showPassword" className="text-gray-600  cursor-pointer  text-lg">Show Password</label>
                        </div>
                    </div>

                    <button type="submit" className="w-full h-10 mt-6 cursor-pointer text-white bg-red-500 text-lg rounded-md hover:bg-red-600 transition">
                        Continue
                    </button>

                    <p className="text-sm text-gray-600 text-center mt-5">
                        Already have an account? <Link to="/login" className="text-red-500 hover:text-green-500  cursor-pointer">Login Here</Link>
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <input type="checkbox" className="cursor-pointer" onChange={() => setIsChecked(!isChecked)} checked={isChecked} id="agree" />
                        <label htmlFor="agree" className="cursor-pointer text-gray-600 text-sm">By continuing, I agree to the Terms of Use & Privacy Policy</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

//loginpage
export const Login = () => {
    const { loginUser } = useContext(ShopContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");

    const getUsers = () => {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            if (role === "admin") {
                if (email === "rj12@gmail.com" && password === "rj") {
                    const adminUser = { name: "Rishabh", email, role: "admin" };
                    loginUser(adminUser);
                    toast.success("Admin login successful", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: true,
                        theme: "colored",
                    });
                    navigate("/admin");
                    return;
                } else {
                    toast.error("Invalid admin credentials", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: true,
                        theme: "colored",
                    });
                    return;
                }
            }
            const users = getUsers();
            const user = users.find((u) => u.email === email && u.password === password && u.role === role);
            if (user) {
                loginUser(user);
                toast.success("Login successful", {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: true,
                    theme: "colored",
                });
                navigate("/");
            } else {
                toast.error("Invalid email, password or role", {
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
            <div className="bg-white shadow-md rounded-lg p-8 w-1/3 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-4 mt-6">
                        <input type="email" className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        <input type={showPassword ? "text" : "password"} className="h-10 w-full px-4 outline-none border border-gray-300 text-lg rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                        <div className="flex items-center gap-4 mt-2">
                            <label className="text-gray-700 text-lg">Select Role:</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-gray-300 rounded-md px-2 py-1">
                                <option value="user" className="accent-green">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                     
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="showPassword" className="accent-green-700 cursor-pointer" onChange={() => setShowPassword(!showPassword)} />
                            <label htmlFor="showPassword" className="text-gray-600 cursor-pointer text-lg">Show Password</label>
                        </div>
                    </div>

             
                    <button type="submit" className="w-full h-10 mt-6 cursor-pointer text-white bg-red-500 text-lg rounded-md hover:bg-red-600 transition">
                        Continue
                    </button>

                    <p className="text-sm text-gray-600 text-center mt-5">
                        Dont have an account? <Link to="/signup" className="text-red-500 hover:text-green-500  cursor-pointer">Signup Here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;
