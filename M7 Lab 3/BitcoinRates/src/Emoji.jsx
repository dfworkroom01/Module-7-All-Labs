import React from 'react';
import { useEmoji } from './EmojiContext';

function Emoji() {
    const { emoji, switchEmoji } = useEmoji();

    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={switchEmoji}>Switch Emoji</button>
        </div>
    );
}

export default Emoji;
