import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

function Product () {
  let params = useParams();
  const {product, loading, error} = useProducts(params.id);

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="header h-16">
        {loading ? (
            <p className="text-3xl font-bold">{product && product.name}</p>
          ) : (
            <div className="inline-flex items-center flex-col">
              <p className="text-3xl font-bold">{product && product.name}</p>
              <p className="text-l leading-3">{product && product.description}</p>
            </div>
        )}
        {error && 
            <p className="text-3xl font-bold">Error getting product</p>
        }
      </div>
      {product && 
        <div className="w-screen inline-flex flex-col items-center p-5">
          <p className="text-l font-bold">Variants:</p>
          <table className="table-auto shadow-lg border rounded border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {product.variants.map(({id, name, price}) => {
                return (
                  <tr key={id}>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2">{price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      }
      <div className="inline-flex justify-center items-center h-14 w-screen space-x-5">
        <Link to={'/'}>
          <button className="button">All Products</button>
        </Link>
        <Link to={'/dashboard'}>
          <button className="button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;