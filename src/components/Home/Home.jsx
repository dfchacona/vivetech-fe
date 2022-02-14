import React from 'react';
import { Link } from 'react-router-dom';

import useProducts from '../../hooks/useProducts';

function Home () {
  const {products, loading, error} = useProducts();

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="header">
        <p className="text-xl font-bold">Products</p>
      </div>
      <div className="container flex space-x-5 p-4">
        {loading &&
          <div className="card">
            <p className="text-m my-4">Loading</p>
          </div>
        }
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
        {error &&
          <div className="card">
            <p className="text-m my-4">Error getting products</p>
          </div>
        }
      </div>
      <div className="inline-flex justify-center items-center h-14 w-screen">
        <Link to={'/dashboard'}>
          <button className="button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;