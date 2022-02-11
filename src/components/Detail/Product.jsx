import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getProductById } from '../../hooks/ProductServices';

function Product (props) {
  let params = useParams();
  const [product, setProduct] = useState();
  const [variants, setVariants] = useState();

  useEffect(()=>{
    getProductById(params.id)
    .then((productResponseData) => {
      setProduct(productResponseData.data[0]);
      setVariants(productResponseData.data[0].variants);
    });
  }, [params.id]);

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="header flex-col	h-16">
        <p className="text-3xl font-bold">{product && product.name}</p>
        <p className="text-l leading-3">{product && product.description}</p>
      </div>
      <div className="w-screen inline-flex flex-col items-center p-5">
        <p className="text-l font-bold">Variants:</p>
        <table class="table-auto shadow-lg border rounded border-gray-200">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {variants && variants.map(({id, name, price}) => {
              return (
                <tr key={id}>
                  <td class="border px-4 py-2">{name}</td>
                  <td class="border px-4 py-2">{price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="inline-flex justify-center items-center h-14 w-screen space-x-5">
        <Link to={`/`}>
          <button className="button">All Products</button>
        </Link>
        <Link to={`/`}>
          <button className="button">Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Product;