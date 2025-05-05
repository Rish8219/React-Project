import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import one_star from "../../assets/one_star.png";
import two_star from "../../assets/two_star.png";
import three_star from "../../assets/three_star.png";
import four_star from "../../assets/four_star.png";
import five_star from "../../assets/five_star.png";
import { useNavigate, useLocation } from 'react-router-dom';

const ProductDisplay = ({ product, selectedSize: selectedSizeProp }) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
    width: 0,
    height: 0,
  });
  const [averageRating, setAverageRating] = useState(0);
  const [selectedSize, setSelectedSize] = useState(selectedSizeProp || (product.size && product.size.length > 0 ? product.size[0] : null));

  const { addToCart, stock: globalStock } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (selectedSizeProp && selectedSizeProp !== selectedSize) {
      setSelectedSize(selectedSizeProp);
    }
  }, [selectedSizeProp]);

  const getCurrentStock = () => {
    const globalStockValue = globalStock[product.id]?.[selectedSize];
    const productStockValue = product.stock_per_size ? product.stock_per_size[selectedSize] : undefined;
    return globalStockValue !== undefined ? globalStockValue : (productStockValue !== undefined ? productStockValue : 0);
  };

  const stock = getCurrentStock();

  useEffect(() => {
    if (product?.reviews?.length) {
      const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
      const average = totalRating / product.reviews.length;
      setAverageRating(average.toFixed(1));
    }
  }, [product]);

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

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // Update URL query parameter without navigation
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('size', size);
    navigate({ pathname: location.pathname, search: searchParams.toString() }, { replace: true });
  };

  const handleBuyNow = () => {
    addToCart(product.id, selectedSize);
    navigate("/checkout");
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
            className="w-full md:w-95 hover:cursor-zoom-in"
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
        <div className="productdisplay-right-star flex items-center w-60 h-15 gap-2 mt-4">

          <img src={
            averageRating <= 1 ? one_star :
              averageRating > 1 && averageRating <= 2 ? two_star :
                averageRating > 2 && averageRating <= 3 ? three_star :
                  averageRating > 3 && averageRating <= 4 ? four_star :
                    five_star
          } alt="" className='w-40 h-5 ' />
          <p style={{ backgroundColor: averageRating <= 1 ? "red" : averageRating > 1 && averageRating <= 2 ? "orange" : averageRating > 2 && averageRating <= 3 ? "yellowgreen" : averageRating > 3 && averageRating <= 4 ? "orange" : averageRating > 4 && averageRating <= 5 ? "green" : "" }} className="text-lg font-medium  align-center h-10 py-1 text-center w-15">{averageRating}</p>
        </div>

        {/* Prices */}
        <div className="flex gap-5 text-lg md:text-xl font-medium">
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
            {product.size && product.size.map((size) => {
              const sizeStock = globalStock[product.id]?.[size] ?? product.stock_per_size?.[size] ?? 0;
              return (
                <div key={size} className="flex flex-col items-center">
                  <button
                    onClick={() => handleSizeSelect(size)}
                    className={`p-3 md:p-4 border rounded-lg cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
                    disabled={sizeStock <= 0}
                  >
                    {size}
                  </button>
                  <span className="text-sm mt-1 text-green-600">
                    {sizeStock > 0 ? `In Stock (${sizeStock})` : 'Not available'}
                  </span>
                </div>
              );
            })}
            <p className="mt-4 text-xl md:text-base text-green-600">
              {stock > 0 ? `In Stock (${stock})` : 'Not available in stock'}
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => {
            addToCart(product.id, selectedSize);
          }}
          className="mt-6 px-6 py-3 text-sm md:text-base bg-[#ff4141] text-white rounded hover:bg-red-700"
          disabled={stock <= 0}
          style={{
            cursor: stock > 0 ? 'pointer' : 'not-allowed',
            backgroundColor: stock > 0 ? '#ff4141' : '#ccc',
          }}
        >
          ADD TO CART
        </button>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="mt-4 px-6 py-3 text-sm md:text-base bg-green-600 text-white rounded hover:bg-green-700"
          disabled={stock <= 0}
          style={{
            cursor: stock > 0 ? 'pointer' : 'not-allowed',
            backgroundColor: stock > 0 ? '#22c55e' : '#ccc',
          }}
        >
          BUY NOW
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
