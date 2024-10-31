import React, { useState, useEffect } from 'react';
import axios from 'axios';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
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
                console.error(error); // Log full error for debugging
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBitcoinPrice();
    }, [currency]);

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>{curr}</option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {bitcoinPrice !== null && <p>Current Price: {bitcoinPrice} {currency}</p>}
        </div>
    );
}

export default BitcoinRates;
