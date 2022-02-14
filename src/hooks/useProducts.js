import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../consts';


const useProducts = (id) => {
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        // If the hook recieves an id the axios request gets only one product,
        // otherwise it will get all the products
        const axiosRequest = id ? `/product/${id}` : "/products";
        async function getProducts() {
            axios.defaults.baseURL = API_URL;
            axios.get(axiosRequest)
            .then(({data}) => {
                if (id) {
                  setProduct(data[0]);
                } else {
                  setProducts(data);
                }
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
        }
        getProducts();
    }, [id]);

    return {products, product, loading, error}
}

export default useProducts
