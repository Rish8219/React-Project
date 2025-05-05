// import React from 'react';
// import new_collections from "../../assets/new_collections"
// import Item from '../Items/Item';
// const NewCollections = () => {
//     return (
//         <div className='new-collections flex-col w-11/11 justify-items-center z-0 mt-20'>
//             <h1 className='text-4xl font-medium text-[#171717] max-sm:text-center'>NEW COLLECTIONS</h1>
//             <hr className='w-40 bg-[#252525] rounded-2xl mt-5 h-1' />
//             <div className="collections mt-10 grid-cols-4 max-sm:flex-col ml-5 max-[400px]:ml-0 max-[400px]:w-1/2">
//                 {
// new_collections.map((item,index)=>{
//     return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
// })
//                 }
//             </div>
//         </div>
//     );
// }

// export default NewCollections;




import React from 'react';
import new_collections from "../../assets/new_collections";
import Item from '../Items/Item';

const NewCollections = () => {
    return (
        <div id="new-collections" className='new-collections flex flex-col w-full items-center mt-20 px-4'>

        <h1 className='text-4xl font-medium text-[#171717] text-center'>NEW COLLECTIONS</h1>
        <hr className='w-40 bg-[#252525] rounded-2xl mt-5 h-1' />
    
       
        <div className="collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-screen-lg mx-auto">
            {new_collections.map((item, index) => (
                <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            ))}
        </div>
    </div>
    );
}

export default NewCollections;