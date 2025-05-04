import React from 'react';
import data_product from '../../assets/data';
import Item from '../Items/Item';
import "./Popular.css"
const Popular = () => {
    return (
        <div className='popular flex flex-col w-full items-center z-0 mt-20 px-4'>
        <h1 className='text-4xl font-medium text-[#171717] text-center'>POPULAR IN WOMEN</h1>
        <hr className='w-40 bg-[#252525] rounded-2xl mt-5 h-1'/>
    
        {/* Grid for Products */}
        <div className="popular-item grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 w-full max-w-screen-xl mx-auto mt-10 justify-center">
            {data_product.map((item, index) => (
                <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            ))}
            
        </div>
    </div>
    );
}

export default Popular;
