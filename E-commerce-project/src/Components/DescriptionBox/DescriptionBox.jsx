import React, { useState } from 'react';

const DescriptionBox = ({ product }) => {
    const [active, setActive] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const color=["red","orange","blue","yellow","green"]
    return (
        <div className="descriptionbox mx-auto w-full max-w-screen-lg mt-10 px-4 md:px-10">
        {/* Tabs for Description & Reviews */}
        <div className="descriptionbox-navigator flex justify-center md:justify-start gap-4">
            <div 
                onClick={() => setActive(true)} 
                className={`cursor-pointer text-lg font-medium border border-[#d0d0d0] px-4 py-2 rounded-md transition ${
                    active ? "bg-gray-400 text-white" : "bg-[#fbfbfb] hover:bg-gray-300"
                }`}
            >
                Description
            </div>
            <div 
                onClick={() => setActive(false)} 
                className={`cursor-pointer text-lg font-medium border border-[#d0d0d0] px-4 py-2 rounded-md transition ${
                    !active ? "bg-gray-400 text-white" : "bg-[#fbfbfb] hover:bg-gray-300"
                }`}
            >
                Reviews {product.reviews.length}
            </div>
        </div>
    
        {/* Description or Reviews Section */}
        {active ? (
            <div className="descriptionbox-description flex flex-col gap-6 border-2 border-[#d0d0d0] p-6 md:p-10 mt-4">
                <h2 className="text-2xl font-bold text-[#333333]">Product Description :</h2>
                <p className="text-lg md:text-xl font-medium text-gray-700">{product.description}</p>
            </div>
        ) : (
            <div className="descriptionbox-description flex flex-col gap-6 border-2 border-[#d0d0d0] p-6 md:p-10 mt-4">
                <h2 className="text-2xl font-bold text-[#333333]">Reviews & Comments</h2>
                {
                    product.reviews.length<3? <div className="grid gap-6">
                    {product.reviews.map((item, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <p className="text-lg md:text-xl font-medium mt-2">{index + 1}</p>
                            <p className="text-lg md:text-xl font-medium mt-2">Name: <span className="font-semibold">{item.user}</span></p>
                            <p className="text-lg md:text-xl font-medium mt-2">
                                Rating: <span style={{ backgroundColor: `${color.at(item.rating - 1)}` }} className="rounded-sm p-1 font-bold">{item.rating}/5</span>
                            </p>
                            <p className="text-lg md:text-xl font-medium mt-2">Comment: <span className="font-bold">{item.comment}</span></p>
                        </div>
                    ))}   {/* Show More / Show Less Button */}
                </div>: <div className="flex justify-center mt-6">
                    <button 
                        className="bg-black text-white rounded-md px-6 py-3 font-medium hover:bg-gray-700 transition duration-300"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
                }
               
            </div>
        )}
    </div>
    );
}

export default DescriptionBox;
