import React from 'react';
import arrow_icon from "../../assets/breadcrum_arrow.png"
const Breadcrum = (props) => {
    const {product}=props
    return (<div className="breadcrum flex flex-wrap pt-20 lg:pt-20 md:pt-30 min-[585px]:max-[770px]:pt-25  items-center gap-2 text-[#5e5e5e] text-sm font-medium mx-5 mb-5 md:mx-10 md:mb-10 lg:mx-20">
    HOME <img src={arrow_icon} alt="icon"/>
    SHOP <img src={arrow_icon} alt="icon"/>
    {product.category} <img src={arrow_icon} alt="icon"/>
    {product.name}
</div>
    );
}

export default Breadcrum;
