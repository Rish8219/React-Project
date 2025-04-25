import React from 'react';
import data_product from "../../assets/data.js"
import Item from '../Items/Item';
const ReleatedPoducts = () => {
    return (
       <div className="releatedProducts flex flex-col w-full items-center mt-20 px-4">
        <h1 className='text-[#171717] max-[400px]:text-center text-5xl font-medium'>RELEATED PRODUCTS</h1>
<hr className='w-40 bg-[#252525] rounded-2xl mt-5 h-1'/>
<div className="releatedproducts-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-screen-lg mx-auto">
{
data_product.map((item,index)=>{
    return (
        <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
    )
})
}
</div>
       </div>
    );
}

export default ReleatedPoducts;
