import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const SizePage = () => {
  const { size } = useParams();
  const { all_product } = useContext(ShopContext);

  
  const filteredProducts = all_product.filter(
    (product) =>
      product.size &&
      product.stock_per_size &&
      product.stock_per_size[size] > 0
  );

  return (
    <div className="size-page max-w-screen-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products Available in Size: {size}</h1>
      {filteredProducts.length === 0 ? (
        <p>No products available in this size.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-green-600 font-bold">${product.new_price.toFixed(2)}</p>
              <p>Stock Available: {product.stock_per_size[size]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SizePage;
