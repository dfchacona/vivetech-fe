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
    <div className="container mx-auto px-4">
      <div className="h-14 py-4">
        <p className="text-3xl font-bold">{product && product.name}</p>
        <p className="text-l leading-3">{product && product.description}</p>
      </div>
      <div className="container my-5">
      <p className="text-l font-bold">Variants:</p>
        <ul className="list-disc px-4">
          {variants && variants.map((variant, index) => {
            return (
              <li key={index} className="text-base">{variant.name}: ${variant.price}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Product;