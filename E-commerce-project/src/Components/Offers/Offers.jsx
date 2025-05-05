import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Offer.css"
import exclusive_image from ".././../assets/exclusive_image.png"
const Offers = () => {
    const navigate = useNavigate();

    const handleCheckNowClick = () => {
        navigate("/men");
    };

    return (
        <div className='offers flex flex-col md:flex-row w-11/12 mx-auto bg-gradient-to-r from-pink-200 mt-20 to-gray-300 px-10 py-20 items-center'>
     
        <div className="offers-left w-full md:w-1/2 text-center md:text-left">
            <h1 className='text-[#171717] text-6xl max-[850px]:text-2xl font-medium'>Exclusive</h1>
            <h1 className='text-[#171717] text-6xl max-[850px]:text-2xl font-medium'>Offers For You</h1>
            <p className='text-[#171717] text-xl max-[850px]:text-sm font-medium'>ONLY BEST SELLERS PRODUCTS</p>
            <button onClick={handleCheckNowClick} className='border-none text-xl font-bold max-[550px]:p-2 max-[450px]:text-sm bg-amber-500 rounded-2xl px-6 py-3 mt-8 cursor-pointer hover:bg-amber-600 transition duration-300'>
                Check Now
            </button>
        </div>
    
     
        <div className="offers-right flex justify-center md:w-1/2">
            <img src={exclusive_image} className='w-full max-w-lg md:w-1/2 sm:w-2/3 object-contain' alt="Exclusive offers illustration" />
        </div>
    </div>

    )
}
export default Offers;