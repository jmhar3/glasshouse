import React, { useState, useEffect } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

const Swatches = ({ swatchData, removeSwatch }) => {

    const mouseLeave = () => {
        document.querySelector('body').style.background = randomColor()
    }

    useEffect(mouseLeave)

    return (
        <div id="featured-swatches">
            { swatchData.map((swatch) => (
                    <SwatchCard
                        swatch={swatch}
                        removeSwatch={removeSwatch}
                        mouseLeave={mouseLeave}
                    />
                )) }
        </div>
    )
}

export default Swatches;