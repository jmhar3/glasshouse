import AddPanel from '../components/palette/AddPanel';
import SavePalette from '../components//palette/SavePalette';
import Panel from '../components/palette/Panel';
import './palette.css';
import { useContext } from 'react';
import { PanelContext } from '../components/palette/PanelContext';

const PalettePage = () => {

    const [panelState, dispatch] = useContext(PanelContext);

    return (
        <div id="palette-page">
            <div id="palette-menu">
                {panelState.length == 6 ? null : <AddPanel />}
                <SavePalette />
            </div>
            <div id="palette-generator">
                {panelState.map((panel, index) => (
                    <Panel key={index} colour={panel} />
                ))}
            </div>
        </div>
    )
}

export default PalettePage;