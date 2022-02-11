import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/ProductServices';

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
    <div className="container px-4">
      <div className="h-14 py-4">
        <p className="text-3xl font-bold">{product && product.name}</p>
        <p className="text-l leading-3">{product && product.description}</p>
      </div>
      <div className="container my-5">
        <p className="text-l font-bold">Variants:</p>
        <table class="table-auto shadow-lg border rounded border-gray-200">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {variants && variants.map((variant, index) => {
              return (
                <tr key={index}>
                  <td class="border px-4 py-2">{variant.name}</td>
                  <td class="border px-4 py-2">{variant.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;