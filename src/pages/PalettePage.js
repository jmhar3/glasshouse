import Palette from '../components/palette/Palette';
import './palette.css'
import { useContext, useEffect } from 'react';
import { PanelContext } from '../components/palette/PanelContext';

const PalettePage = () => {
    const [panelState, dispatch] = useContext(PanelContext);

    return (
        <div id="palette-page">
            <Palette panels={panelState}/>
        </div>
    )
}

export default PalettePage