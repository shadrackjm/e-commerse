import { BadgeCheck, ShoppingCart } from 'lucide-react';
import React from 'react'

function ProductInfo({product}) {
    console.log(product);
  return (
    <div>
        <h2
            className='text-[20px]'
        >{product?.attributes?.title}
        </h2>
        <h2
            className='text-[15px] text-gray-400'
        >{product?.attributes?.category}
        </h2>
        <h2
            className='text-[15px] text-gray-700'
        >{product?.attributes?.description}
        </h2>
        <h2
            className='text-[13px] text-gray-500 my-3 flex gap-3'
        > <BadgeCheck className='text-green-500'/>
        Eligible for instant delivery
        </h2>
         <h2
            className='text-[32px] text-primary font-medium'
        >$ {product?.attributes?.pricing}
        </h2>
        <button className='flex gap-2 p-2
         bg-primary hover:bg-blue-700 text-white 
         px-6 mt-4
         rounded-lg'>
            <ShoppingCart />
            Add to cart
        </button>
    </div>
  )
}

export default ProductInfo