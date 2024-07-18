import React from 'react'

function SkeletonEffect() {
  return (
    <div className='flex flex-col gap-3'>
            <div className='h-[20px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
            <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse rounded-lg'></div>
            <div className='h-[20px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
            <div className='h-[20px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
            <div className='h-[20px] w-full bg-slate-200 animate-pulse rounded-lg'></div>
            <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse rounded-lg'></div>
        </div>
  )
}

export default SkeletonEffect