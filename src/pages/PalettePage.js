import {Component} from 'react';
import Palette from '../components/Palette';
import PaletteTools from '../components/PaletteTools'
import './palette.css'

const PalettePage = () => {
    return (
        <>
            <PaletteTools />
            <Palette />
        </>
    )
}

export default PalettePage