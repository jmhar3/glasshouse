import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import Panel from './Panel';

const Palette = ({panels}) => {
    return (
        <>
            <div id="palette-menu">
                <AddPanel />
                <SavePalette />
                <UploadPalette />
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