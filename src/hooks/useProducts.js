import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../consts';


const useProducts = (id) => {
    const [products, setProducts] = useState();
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
            .then((productsResponse) => {
                if (id) {
                  setProducts(productsResponse.data[0]);
                } else {
                  setProducts(productsResponse.data);
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

    return {products, loading, error}
}

export default useProducts
