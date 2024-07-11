import React from 'react'
import Image from 'next/image'
import { SquareChevronRight } from 'lucide-react'

function ProductItem({item}) {
  return (
    <div>
        <div className='hover:border p-1 rounded-lg border-blue-500'>
            <Image src={item?.attributes?.banner?.data?.attributes?.url} className='rounded-t-lg h-[175px] object-cover' alt={'banner'} height={400} width={350}/>    
        <div className='flex justify-between items-center bg-gray-50 p-3 rounded-b-lg'>
        <div className=''>
            <h2 className='text-[13px] font-medium line-clamp-2'>{item?.attributes?.title}</h2>
            {item?.attributes?.category&&<h2 className='text-[11px] text-gray-500 flex gap-2  line-clamp-1'>
            <SquareChevronRight className='h-4 w-4'/>
                {item?.attributes?.category}</h2>}
        </div>
        <h2 className='font-medium'>${item?.attributes?.pricing}</h2>
        </div>
        </div>


    </div>
    
  )
}

export default ProductItem