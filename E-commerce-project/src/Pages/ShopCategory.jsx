import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {

    const all_products=useContext(ShopContext)
//  console.log( all_products.all_product )
 
    return (
        <div className='w-full shop-category pt-16'>
        <img src={props.banner} alt="Shop Banner" className="w-full  object-cover" />
    
     
        <div className="shopcategory-indexSort mt-10 flex justify-between items-center w-full max-w-screen-lg mx-auto px-6 md:px-10 py-4">
          
            <p className="text-lg text-gray-700">
                <span className="font-bold">Showing 1-12</span> out of 36 products
            </p>
    
           
            <div className="sortcategory-sort flex items-center gap-2 bg-amber-500 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-amber-600 transition duration-300">
                Sort by
                <img src={dropdown_icon} alt="Dropdown icon" className="w-5 h-5" />
            </div>
        </div>
    
        <div className="shop-category-products grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-screen-lg mx-auto mt-10">
            {all_products.all_product.map((item, index) => (
                item.category === props.category && (
                    <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                )
            ))}
        </div>
        <button className="shopcaregory-loadmore flex flex-col justify-self-center m-20 w-30 cursor-pointer hover:bg-gray-700 text-white rounded-4xl bg-gray-500  p-2">
          Explore More  
        </button>
    </div>
    );
}

export default ShopCategory;
