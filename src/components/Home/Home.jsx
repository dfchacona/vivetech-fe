import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../hooks/ProductServices';

function Home () {
  const [products, setProducts] = useState();

  useEffect(()=>{
    getAllProducts()
    .then((productsResponseData) => {
      setProducts(productsResponseData.data);
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="header">
        <p className="text-xl font-bold">Products</p>
      </div>
      <div className="container flex space-x-5 p-4">
        {products && products.map(({id, name, description}) => {
          return (
            <Link key={id} to={`/product/${id}`}>
              <div className="card hover:bg-slate-200">
                <p className="text-base font-bold">{name}</p>
                <p className="text-sm">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="inline-flex justify-center items-center h-14 w-screen">
        <Link to={`/dashboard`}>
          <button className="button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;