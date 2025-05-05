import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLatestCollectionClick = () => {
        if (location.pathname === "/") {
            const element = document.getElementById("new-collections");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/", { replace: false });
           
            setTimeout(() => {
                const element = document.getElementById("new-collections");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
<div className='flex flex-col md:flex-row bg-gradient-to-r from-white to-gray-500 min-h-screen items-center px-4 md:px-16 py-10'>
  
    <div className="hero-left flex flex-col justify-center text-center md:text-left md:w-1/2">
        <h2 className='text-gray-700 text-3xl font-bold mt-10 md:mt-0'>NEW ARRIVALS ONLY</h2>

        <div>
            <div className="hand-icon flex justify-center md:justify-start items-center gap-6">
                <p className='text-[#171717] text-5xl font-bold'>new</p>
                <img className='w-16 md:w-20' src={hand_icon} alt="Hand pointing to new arrivals" />
            </div>
            <p className='text-[#171717] text-5xl md:text-6xl py-2 font-bold'>collections</p>
            <p className='text-[#171717] text-5xl md:text-6xl py-2 font-bold'>for everyone</p>
        </div>

        <div className="hero-latest-btn flex justify-center md:justify-start mt-10">
            <button onClick={handleLatestCollectionClick} className='bg-[#ff4141] flex cursor-pointer  min-[100px]:max-[550px]:text-xl min-[100px]:max-[550px]:text-px-2 min-[100px]:max-[550px]:py-3  items-center gap-4 text-white text-lg md:text-2xl px-6 py-4 rounded-full hover:bg-orange-800 transition-all'>
                Latest Collection  
                <img src={arrow} className='w-5 h-5 md:w-7 md:h-7' alt="Arrow icon" />
            </button>
        </div>
    </div>


    <div className="hero-right flex justify-center md:w-1/2 flex-wrap">
        <img src={hero_image} className='w-full max-w-md md:max-w-lg object-contain' alt="Hero section image showing latest arrivals" />
    </div>
</div>
    );
}

export default Hero;
