import React, { useState, useEffect } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

const Swatches = ({ swatchData }) => {

    const backgroundColour = randomColor();

    const [background, setBackground] = useState(backgroundColour)

    const mouseLeave = () => {
        document.querySelector('body').style.background = background
    }

    useEffect(mouseLeave)
    console.log(!swatchData)

    return (
        <div id="featured-swatches">
            {
                !swatchData ? <h1>Loading...</h1> :            swatchData.map((swatch, i) => (
                    <SwatchCard swatchName={swatch.name} swatchColours={swatch.colours} mouseLeave={mouseLeave} />
                ))
            }
        </div>
    )
}

export default Swatches;