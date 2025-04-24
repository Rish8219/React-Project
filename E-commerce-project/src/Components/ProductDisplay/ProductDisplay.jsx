import React, { useContext, useState } from 'react';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    width: 0,
    height: 0,
  });
  const [size, setSize] = useState([{}]);
  const { addToCart } = useContext(ShopContext);

  function handleMouse(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({
      x,
      y,
      visible: true,
      width,
      height,
    });
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0, visible: false, width: 0, height: 0 });
  };

  return (
    <div className="productdisplay flex flex-col md:flex-row px-4 md:px-10 lg:px-20">
      {/* Left Section */}
      <div className="productdisplay-left flex flex-col md:flex-row gap-5">
        <div className="productdisplay-img-list flex flex-row md:flex-col gap-4">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              className="h-16 w-16 md:h-20 hover:scale-200 hover:z-4 min-[100px]:max-[400px]:ml-1 min-lg:hover:mb-10 min-lg:hover:mt-10 transition-all duration-100 hover:cursor-zoom-in md:w-20"
              src={product.image}
              alt={product.name}
            />
          ))}
        </div>
        <div className="productdisplay-img relative">
          {position.visible && (
            <div
              className="absolute hidden md:block z-50 border border-gray-300 rounded-full overflow-hidden pointer-events-none"
              style={{
                top: `${position.y - 75}px`,
                left: `${position.x + 100}px`,
                width: '150px',
                height: '150px',
                backgroundImage: `url(${product.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${position.width * 2}px ${position.height * 2}px`,
                backgroundPosition: `-${position.x * 2 - 75}px -${position.y * 2 - 75}px`,
              }}
            />
          )}
          <img
            className="w-full md:w-95"
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouse}
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="productdisplay-right flex flex-col mt-6 md:ml-10">
        <h1 className="text-3xl md:text-5xl text-[#3d3d3d]">{product.name}</h1>

        {/* Star Ratings */}
        <div className="productdisplay-right-star flex items-center gap-2 mt-4">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star_icon} alt="" className="w-5 md:w-6" />
          ))}
          <img src={star_dull_icon} alt="" className="w-5 md:w-6" />
          <p className="text-xl">{product.total_reviews}</p>
        </div>

        {/* Prices */}
        <div className="flex gap-5 text-lg md:text-xl font-medium mt-4">
          <span className="line-through text-[#818181]">${product.old_price}</span>
          <span className="text-[#ff4141]">${product.new_price}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-600">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="productdisplay-right-size mt-10">
          <h2 className="text-lg md:text-xl text-[#656565] font-medium">Select Size</h2>
          <div className="flex gap-3 md:gap-5 mt-4">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className="p-3 md:p-4 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="mt-6 px-6 py-3 text-sm md:text-base bg-[#ff4141] text-white rounded hover:bg-red-700"
        >
          ADD TO CART
        </button>

        {/* Categories & Tags */}
        <p className="mt-4">
          <span className="font-medium">Category:</span> Women, T-Shirt, Crop-Top
        </p>
        <p>
          <span className="font-medium">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
