import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../services/ProductServices';

function Home () {
  const [products, setProducts] = useState();

  useEffect(()=>{
    getAllProducts()
    .then((productsResponseData) => {
      setProducts(productsResponseData.data);
    });
  }, []);

  return (
    <div className="container px-4">
      <div className="h-14 py-4">
        <p className="text-xl font-bold">Products</p>
      </div>
      <div className="container flex space-x-5">
        {products && products.map((product, index) => {
          return (
            <Link key={index} to={`/product/${product.id}`}>
              <div className="inline-flex justify-center items-center flex-col direction-column px-2 my-4 h-40 w-40 box-border border-black border-2">
                <p className="text-base font-bold">{product.name}</p>
                <p className="text-sm">{product.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to={`/dashboard`}>
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Home;