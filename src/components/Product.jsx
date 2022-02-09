import React from 'react';
import { useParams } from "react-router-dom";

function Product (props) {
  let params = useParams();

  return <h1>Product with id: {params.id}</h1>;
}

export default Product;