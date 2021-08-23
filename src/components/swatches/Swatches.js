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

    return (
        <div id="featured-swatches">
            { swatchData.map((swatch, i) => (
                    <SwatchCard swatchKey={i} swatchName={swatch.name} swatchColours={swatch.colours} mouseLeave={mouseLeave} />
                )) }
        </div>
    )
}

export default Swatches;