// App.js
import React from 'react';
import { EmojiProvider } from './EmojiContext.jsx';
import Emoji from './Emoji.jsx';
import BitcoinRates from './BitcoinRates.jsx';

function App() {
    return (
        <EmojiProvider>
            <div className="App">
                <Emoji />
                <BitcoinRates />
            </div>
        </EmojiProvider>
    );
}

export default App;
