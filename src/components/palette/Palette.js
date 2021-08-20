import { useContext, useEffect } from 'react';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import Panel from './Panel';
import { PanelContext } from './PanelContext';

const Palette = ({panels}) => {

    let inputValue;

    const setValue = e => {
        inputValue = e.target.value;
    }

    const [panelState, dispatch] = useContext(PanelContext);

    const savePalette = e => {
        dispatch({
            type: "savePalette",
            data: inputValue
        })
    }

    return (
        <>
            <div id="palette-menu">
                <input type="text" placeholder="Name Your Creation" id="name-swatch" onKeyUp={setValue}/>
                <AddPanel />
                <UploadPalette />
                <SavePalette savePalette={savePalette} />
            </div>
            <div id="palette-generator">
                {panels.map((panel, index) => (
                    <Panel panel={panel} key={index} colour={panel} />
                ))}
            </div>
        </>
    )
}

export default Palette;