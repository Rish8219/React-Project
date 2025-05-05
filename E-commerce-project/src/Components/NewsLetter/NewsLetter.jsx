import React from 'react';

const NewsLetter = () => {
    return (
        <div className='newsletter p-4  bg-gradient-to-r from-pink-200 mt-20 to-gray-300  w-8/12 flex flex-col items-center content py-20 m-auto mb-30 gap-10'>
            <h1 className='text-5xl  max-[520px]:text-3xl text-center font-medium text-[#454545]'>Get Exclusive Offers On Your Email</h1>
  
  <p className='text-[#454545]  max-[520px]:text-xl text-left  text-2xl'>Subscribe to our newsletter and stay updated</p>
       <div className='flex  items-center bg-white w-1/1 h-[70px] rounded-4xl
       border-1 border-solid border-red-400'>
        <input className='w-1/1 max- px-2 ml-10 max-[520px]:ml-0 max-[520px]:w-1/1 border-none outline-none text-[#616161] text-xl' type="email" placeholder="Enter email"/>
       <button className=' bg-black rounded-4xl text-white text-2xl max-[520px]:px-3 hover:bg-orange-500    max-[520px]:text-xl cursor-pointer px-4 py-5 '>Subscribe</button>
       </div>
       
        </div>
    );
}

export default NewsLetter;
