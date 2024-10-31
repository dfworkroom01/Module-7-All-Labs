import React, { useState } from 'react';
import useBitcoinPrice from './useBitcoinPrice.jsx';
import { useEmoji } from './EmojiContext.jsx';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { bitcoinPrice, loading, error } = useBitcoinPrice(currency);
    const { emoji, switchEmoji } = useEmoji();

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
            <p>Current Mood: {emoji}</p>
            <button onClick={switchEmoji}>Change Mood</button>
        </div>
    );
}

export default BitcoinRates;
