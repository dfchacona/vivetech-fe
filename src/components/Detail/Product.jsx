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
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-lg">{product && product.name}</h1>
      <div className="container">
        {variants && variants.map((variant, index) => {
          return (
            <p key={index} className="text-base">{variant.name}: ${variant.price}</p>
          );
        })}
      </div>
    </div>
  );
}

export default Product;