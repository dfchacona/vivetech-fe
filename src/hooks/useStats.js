import { useEffect, useState } from 'react';
import axios from "axios";
import { API_URL } from '../consts';


const useStats = () => {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getStats() {
            axios.defaults.baseURL = API_URL;
            axios.get("/stats")
            .then(({data}) => {
                setStats(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
        }
        getStats();
    }, []);

    return {stats, loading, error};
}

export default useStats;
