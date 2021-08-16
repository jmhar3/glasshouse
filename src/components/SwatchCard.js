import React from 'react';
import {Link} from 'react-router-dom';

const SwatchCard = ({ name, colours, index, setBackground }) => (
    <div className="swatch-card" key={index} onMouseEnter={setBackground}>
        <div className="card-head">
            <Link to="/palette" className="swatch-name">{name}</Link>
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