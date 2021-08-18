import React from 'react';
import {Link} from 'react-router-dom';

const SwatchCard = ({ name, colours, index, mouseEnter, mouseLeave }) => (
    <div className="swatch-card" key={index} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <div className="card-head">
            <Link to="/palette" className="swatch-name">{name}</Link>
            <h4 className="like-button">❤️</h4>
        </div>
        <div className="swatch-colours">
            {colours.map((colour, index) => (
                <div key={index} className="colour-div" style={{background: `rgba(${colour.join(", ")}, 1)`}} ></div>
            ))}
        </div>
    </div>
)

export default SwatchCard;