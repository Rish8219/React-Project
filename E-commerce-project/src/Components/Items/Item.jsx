import React from 'react';
import "./item.css"
import { Link } from 'react-router-dom';

const Item = ({image,name,newPrice,oldPrice,id}) => {
    return (
        <div className='item hover:scale-104 hover:z-2 z-1 mt-3 fle-col justify-self-center cursor-pointer transition-all 1s'>
        <Link to={`/product/${id}`}> <img onClick={window.scrollTo(0,0)} src={image} alt="item" /></Link>   
            <p className='text-sm'>{name}</p>
            <div className="item-prices flex gap-4">
                <div className="item-price-new text-[#374151] text-xl font-medium">
                    ${newPrice}
                </div>
                <div className="item-price-old  text-[#8c8c8c] text-xl font-medium line-through">
                    ${oldPrice}
                </div>
            </div>
        </div>
    );
}

export default Item;
