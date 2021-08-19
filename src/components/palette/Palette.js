import { useContext, useEffect } from 'react';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import Panel from './Panel';
import { PanelContext } from './PanelContext';

const Palette = ({panels}) => {
    const [panelState, dispatch] = useContext(PanelContext);

    return (
        <>
            <div id="palette-menu">
                <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                <AddPanel add={colour => dispatch({ type: "addPanel", colour: colour })} />
                <UploadPalette />
                <SavePalette />
            </div>
            <div id="palette-generator">
                {panels.map((panel, index) => (
                    <Panel panel={panel} key={index} colour={panel} remove={() => dispatch({ type: "removePanel", data: panel })} />
                ))}
            </div>
        </>
    )
}

export default Palette;