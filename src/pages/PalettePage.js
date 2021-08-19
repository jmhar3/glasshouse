import Palette from '../components/palette/Palette';
import './palette.css'
import { useContext, useEffect } from 'react';
import { PanelContext } from '../components/palette/PanelContext';
import FetchColours from '../components/palette/fetchPanels'

const PalettePage = () => {
    const [panelState, dispatch] = useContext(PanelContext);
    console.log(panelState, dispatch)

    const fetchColours = () => {
        fetch('http://colormind.io/api/', {
            method: 'POST',
            body: JSON.stringify({
                model: "default"
            })
        })
            .then(res => res.json())
            .then(data =>
                data.result.forEach((colour, i) => dispatch({
                    type: "addPanel",
                    data: `rgba(${colour.join(",")}, 1)`
                }))
            )
    }
    
    useEffect(fetchColours, [])

    return (
        <div id="palette-page">
            <Palette panels={panelState}/>
        </div>
    )
}

export default PalettePage