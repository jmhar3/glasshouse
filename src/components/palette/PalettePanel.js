import PaletteTools from './PaletteTools';

const PalettePanel = (key, colour, toolMenu, showTools, hideTools) => {
    return (
        <div className="colour-generator" key={key} style={{ backgroundColor: colour }} onMouseEnter={showTools} onMouseLeave={hideTools}>
            <div style={{ display: (toolMenu ? 'flex' : 'none') }}>
                <PaletteTools />
            </div>
        </div>
    )
}

export default PalettePanel