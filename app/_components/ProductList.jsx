import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productList }) {
  console.log(productList);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      {productList.map((item, index) => index<=3&&(
        <div key={index}>
          <ProductItem item={item}/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
