import { useState, useEffect } from 'react';
import axios from 'axios';

const useBitcoinPrice = (currency) => {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                setBitcoinPrice(response.data.bitcoin[currency]);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBitcoinPrice();
    }, [currency]);

    return { bitcoinPrice, loading, error };
};

export default useBitcoinPrice;
