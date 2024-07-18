import Image from 'next/image'
import React from 'react'

function ProductBanner({product}) {
  return (
    <div className='w-full'>
        <Image src={product?.attributes?.banner?.data?.attributes?.url} 
            alt="Banner"
            width={400}
            height={400}
            className='rounded-lg object-cover  text-center sm:float-right'
        />
    </div>
  )
}

export default ProductBanner