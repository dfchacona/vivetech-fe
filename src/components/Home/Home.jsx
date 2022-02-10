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
    <div className="container mx-auto px-4">
      <h1 className="text-lg">Products</h1>
      <div className="container flex space-x-5">
        {products && products.map((product, index) => {
          return (
            <Link key={index} to={`/product/${product.id}`}>
              <div className="px-2 h-40 w-40 box-border border-black border-2">
                <p className="text-base">{product.name}</p>
                <p className="text-sm">{product.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;