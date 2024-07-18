import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div className='w-full'>
        {product?
        <Image src={product?.attributes?.banner?.data?.attributes?.url} 
            alt="Banner"
            width={400}
            height={400}
            className='rounded-lg object-cover  text-center sm:float-right'
        />:
        <div className='h-[300px] w-[400px] rounded-lg bg-slate-200 animate-pulse'></div>}
    </div>
  )
}

export default ProductBanner