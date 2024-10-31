import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
    const [emoji, setEmoji] = useState('😊');

    const switchEmoji = () => {
        setEmoji(prev => (prev === '😊' ? '😒' : '😊'));
    };

    return (
        <EmojiContext.Provider value={{ emoji, switchEmoji }}>
            {children}
        </EmojiContext.Provider>
    );
};

export const useEmoji = () => {
    return useContext(EmojiContext);
};
