import React from 'react';

const SwatchCard = ({ name, colours, index }) => (
    <div className="swatch-card" key={index}>
        <div className="card-head">
            <h4 className="swatch-name">{name}</h4>
            <h4 className="like-button">❤️</h4>
        </div>
        <div className="colours">
            {colours.map((colour, index) => (
                <div key={index} style={{backgroundColour: colour}} />
            ))}
        </div>
    </div>
)

export default SwatchCard;