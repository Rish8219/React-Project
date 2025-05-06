import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import one_star from "../../assets/one_star.png"
import two_star from "../../assets/two_star.png"
import three_star from "../../assets/three_star.png"
import four_star from "../../assets/four_star.png"
import five_star from "../../assets/five_star.png"
import { ShopContext } from '../../Context/ShopContext';

const DescriptionBox = ({ product }) => {
    const [active, setActive] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [reviewRating, setReviewRating] = useState(5);
    const colors = ["red", "yellowgreen", "orange", "blue", "green"];

    const { addReview, user } = useContext(ShopContext);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            alert("You must be logged in to submit a review.");
            return;
        }
        if (reviewText.trim() === "") {
            alert("Please enter a review.");
            return;
        }
        const newReview = {
            user: user.name || "Anonymous",
            rating: reviewRating,
            comment: reviewText,
            date: new Date().toISOString(),
        };
        addReview(product.id, newReview);
        setReviewText("");
        setReviewRating(5);
    };

    return (
        <div className="descriptionbox mx-auto w-full max-w-screen-lg mt-10 px-4 md:px-10">
       
            <div className="descriptionbox-navigator flex justify-center md:justify-start gap-4">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(true)}
                    className={`cursor-pointer text-lg font-medium border border-[#d0d0d0] px-6 py-3 rounded-full transition 
                        ${active ? "bg-gray-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"}
                    `}
                >
                    Description
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(false)}
                    className={`cursor-pointer text-lg font-medium border border-[#d0d0d0] px-6 py-3 rounded-full transition 
                        ${!active ? "bg-gray-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"}
                    `}
                >
                    Reviews ({product.reviews.length})
                </motion.div>
            </div>

            
            {active ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.4 }} 
                    className="descriptionbox-description flex flex-col gap-6 border-2 border-[#d0d0d0] p-6 md:p-10 mt-6 rounded-lg shadow-lg bg-white"
                >
                    <h2 className="text-2xl font-bold text-gray-700">Product Description:</h2>
                    <p className="text-lg md:text-xl font-medium text-gray-600">{product.description}</p>
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.4 }} 
                   id='section1' className="descriptionbox-description flex flex-col gap-6 border-2 border-[#d0d0d0] p-6 md:p-10 mt-6 rounded-lg shadow-lg bg-white"
                >

        
            <div className="review-form mt-">
              <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
              <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                <label>
                  Rating:
                  <select value={reviewRating} onChange={(e) => setReviewRating(Number(e.target.value))} className="ml-2 p-1 border rounded">
                    {[1,2,3,4,5].map((num) => (
                      <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Review:
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                    placeholder="Write your review here..."
                    required
                  />
                </label>
                <button type="submit" className="bg-orange-500 text-white py-2 cursor-pointer rounded hover:bg-orange-700">
                  Submit Review
                </button>
              </form>
            </div>
            <h2 className="text-2xl font-bold text-gray-700">Reviews & Comments</h2>
             
             {
               showMore ? <p className="text-lg md:text-sm font-medium text-gray-600">Showing {product.reviews.length} out of {product.reviews.length} reviews </p> : <p className="text-lg md:text-sm font-medium text-gray-600">Showing 2 out of {product.reviews.length} reviews</p>
             }
            

            {product.reviews.slice(0, showMore ? product.reviews.length : 2).map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                    <p className="text-lg md:text-xl font-bold mt-2 ">Certified Buyer : <input type="checkbox" className='rounded-xl accent-green-800' readOnly checked /></p>
                    <p className="text-lg md:text-xl font-medium mt-2">Name : <span className="font-semibold">{item.user}</span></p>
                    <p className="text-lg md:text-xl font-medium mt-2">
                        Rating : <span style={{ backgroundColor: colors[item.rating - 1] }} className=" rounded-sm  p-1 px-2 text-md font-bold text-white" >{item.rating} </span>
                        <span className='h-2 w-10'>        <img style={{display:"inline"}} src={
                        item.rating <= 1 ? one_star :
                          item.rating > 1 && item.rating <= 2 ? two_star :
                        item.rating > 2 && item.rating <= 3 ? three_star :
                        item.rating > 3 && item.rating <= 4 ? four_star :
                          five_star
                        } alt="" className='w-20 h-2 ' /></span>
                    </p>
                    <p className="text-lg md:text-xl font-medium mt-2">Comment : <span className="font-bold">{item.comment}</span></p>
                </div>
            ))}

                    <div className="flex justify-center mt-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-gray-700 transition duration-300"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DescriptionBox;
