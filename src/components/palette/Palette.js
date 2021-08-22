import AddPanel from './AddPanel';
import SavePalette from './SavePalette';
import Panel from './Panel';
import { useContext } from 'react';
import { PanelContext } from './PanelContext';

const Palette = ({panels}) => {
    const [panelState, dispatch] = useContext(PanelContext);

    return (
        <>
            <div id="palette-menu">
                {panelState.length == 6 ? null : <AddPanel />}
                <SavePalette />
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