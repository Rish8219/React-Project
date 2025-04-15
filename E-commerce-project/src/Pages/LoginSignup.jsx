import React from 'react';

const LoginSignup = () => {
    return (
        <div className='loginsignup pt-40 min-w-screen min-h-screen bg-gradient-to-r from-white to-gray-500'>
<div className="loginsignup-container w-1/3 h-1/2 bg-white m-auto p-10 ">
    <h1 className='text-4xl '>Sign Up</h1>
    <div className="loginsignup-fields flex flex-col gap-6 mt-6 ">
        <input type="text" className='h-11 w-f pl-5 outline-0 text-xl text-[#5c5c5c] border-1 border-[#c9c9c9]' placeholder="Username"/>
        <input type="email" className='h-11 w-f pl-5 outline-0 text-xl text-[#5c5c5c] border-1 border-[#c9c9c9]' placeholder="Email Address"/>
        <input type="password" className='h-11 w-f pl-5 outline-0 text-xl text-[#5c5c5c] border-1 border-[#c9c9c9]' placeholder="Password"/>
    </div>
    <button className='w-full h-11 text-white bg-[#ff4141] border-none text-xl font-medium cursor-pointer text-center mt-10 hover:bg-red-800'>Continue</button>
    <p className="loginsignup-login mt-5 text-[#5c5c5c] text-sm font-semibold">Already have an account? <span className='text-[#ff4141] font-medium'>Login Here</span></p>
    <div className="loginsignup-agree flex gap-5 font-sm mt-2 text-[#5c5c5c] ">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use privacy policies</p>
    </div>
    
    
    </div>        
            </div>
    
    );
}

export default LoginSignup;
