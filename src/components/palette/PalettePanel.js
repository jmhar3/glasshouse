import PaletteTools from './PaletteTools';

const PalettePanel = (key, colour, showTools, hideTools) => {
    return (
        <div className="colour-generator" key={key} style={{ backgroundColor: colour }} onMouseEnter={showTools} onMouseLeave={hideTools}>
            <PaletteTools {...showTools()} {...hideTools()} />
        </div>
    )
}

export default PalettePanel