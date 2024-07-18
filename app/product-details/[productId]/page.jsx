'use client'
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import GlobalApi from '@/app/utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProductInfo from './_components/ProductInfo';
import ProductBanner from './_components/ProductBanner';
import ProductList from '@/app/_components/ProductList';
import { usePathname } from 'next/navigation';

function ProjectDetail({params}) {
	const path = usePathname();
    // console.log("project id",params?.productId);
    const [productDetails,setProductDetails] = useState();
    const [productList,setProductList] = useState([]);

    useEffect(()=>{
        getProductById_();
    },[]);

    const getProductById_=()=>{
        GlobalApi.getProductById(params?.productId).then(resp=>{
            // console.log(resp.data.data);
            setProductDetails(resp.data.data);
            getProductByCategory(resp.data.data);
        })
    }

    const getProductByCategory=(product)=>{
      GlobalApi.getProductByCategory(product?.attributes?.category).then(resp=>{
        // console.log(resp);
        setProductList(resp.data.data);
      })
    }
  return (
    <div className='p-5 py-12 px-10 md:px-28'>
      <Breadcrumbs path={path}/>
      <div className='grid grid-cols-1 sm:grid-cols-2
        mt-10 gap-3 sm:gap-10'>
          <ProductBanner product={productDetails} />
          <ProductInfo product={productDetails} />
          	
          
      </div>
	  {productList&&<div className='mt-20'>
            	<h2 className='font-medium text-[20px] mb-4'>Similar Products</h2>
            	<ProductList productList={productList} />
          	</div>}
    </div>
  )
}

export default ProjectDetail