'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../utils/GlobalApi'

function ProductSection() {

    const [productList,setProductList]= useState([]);

    useEffect(()=>{
        getLatestProducts_();
    },[]);

    const getLatestProducts_=()=> {
        GlobalApi.latestProducts().then(resp =>{
            setProductList(resp.data.data);
        })
    }

    const filterProducts=(category)=>{
        const result = productList.filter(item=>
            item.attributes.category == category);
            return result;
    }

  return productList&&(
    <div className='px-10 md:px-20'>
        {/* brand new */}
        <h2 className='font-medium text-[20px] my-3'>Brand New</h2>
        <ProductList productList={filterProducts('Laravel 11')} />

        {/* source codes */}
        <h2 className='font-medium text-[20px] my-3'>Source Code</h2>
        <ProductList productList={filterProducts('Laravel 10')} />

        {/* Icons */}
        <h2 className='font-medium text-[20px] my-3'>Icons</h2>
        <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection