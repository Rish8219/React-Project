import React, { useContext, useState, useMemo } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
    const all_products = useContext(ShopContext);

    // State for sorting criteria
    const [sortCriteria, setSortCriteria] = useState('default');
    // State for number of products to show
    const [productsToShow, setProductsToShow] = useState(12);

    // Filter products by category
    const filteredProducts = useMemo(() => {
        return all_products.all_product.filter(item => item.category === props.category);
    }, [all_products.all_product, props.category]);

    // Sort filtered products based on sortCriteria
    const sortedProducts = useMemo(() => {
        let sorted = [...filteredProducts];
        switch (sortCriteria) {
            case 'price-asc':
                sorted.sort((a, b) => a.new_price - b.new_price);
                break;
            case 'price-desc':
                sorted.sort((a, b) => b.new_price - a.new_price);
                break;
            default:
                // default order, no sorting
                break;
        }
        return sorted;
    }, [filteredProducts, sortCriteria]);

    // Products to display based on productsToShow
    const displayedProducts = sortedProducts.slice(0, productsToShow);

    // Handler for sorting dropdown change
    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    // Handler for "Explore More" button click
    const handleLoadMore = () => {
        setProductsToShow((prev) => Math.min(prev + 12, sortedProducts.length));
    };

    return (
        <div className='w-full shop-category pt-16'>
            <img src={props.banner} alt="Shop Banner" className="w-full object-cover" />

            <div className="shopcategory-indexSort mt-10 flex justify-between items-center w-full max-w-screen-lg mx-auto px-6 md:px-10 py-4">
                <p className="text-lg text-gray-700">
                    <span className="font-bold">Showing {displayedProducts.length} out of {filteredProducts.length} products</span>
                </p>

                <div className="sortcategory-sort relative flex items-center gap-2 bg-transparent text-gray-600 border border-gray-600 px-4 py-2 rounded-md cursor-pointer shadow-sm transition duration-300 hover:bg-gray-600 hover:text-white focus-within:bg-gray-600 focus-within:text-white max-w-max">
                    <label htmlFor="sort-select" className="cursor-pointer select-none">Sort by</label>
                    <select
    id="sort-select"
    value={sortCriteria}
    onChange={handleSortChange}
    className="bg-transparent text-gray-600 border-none rounded-md outline-none cursor-pointer pl-2 pr-6 py-1 hover:text-white focus:text-white"
>
    <option className="bg-white text-black hover:bg-gray-600 hover:text-white" value="default">Default</option>
    <option className="bg-white text-black hover:bg-gray-600 hover:text-white" value="price-asc">Price: Low to High</option>
    <option className="bg-white text-black hover:bg-gray-600 hover:text-white" value="price-desc">Price: High to Low</option>
</select>

                </div>
            </div>

            <div className="shop-category-products grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-screen-lg mx-auto mt-10">
                {displayedProducts.map((item, index) => (
                    <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                ))}
            </div>

            {productsToShow < sortedProducts.length && (
                <button
                    onClick={handleLoadMore}
                    className="shopcaregory-loadmore flex flex-col justify-self-center m-20 w-30 cursor-pointer hover:bg-gray-700 text-white rounded-4xl bg-gray-500 p-2"
                >
                    Explore More
                </button>
            )}
        </div>
    );
};

export default ShopCategory;
