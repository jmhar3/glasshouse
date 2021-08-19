import React from 'react';
import randomColor from 'randomcolor';
import bin from '../../images/garbage.png';
import swatchColour from '../../images/swatches.png';
import { SliderPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';


const PalettePanel = (key, colour, toolMenu, showTools, hideTools, showColourTool, handleChange) => {
    return (
        <div className="colour-generator" key={key} style={{ backgroundColor: randomColor() }} onMouseEnter={showTools} onMouseLeave={hideTools}>
            <EditableInput onChange={handleChange} />
            <div className="panel-tools" style={{ display: (toolMenu ? 'flex' : 'none') }}>
                <div
                // style={{ display: (this.state ? 'block' : 'none') }}
                >
                    <SliderPicker
                        // color={this.state.background}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <img src={bin} alt="delete colour" />
                    <img src={swatchColour} alt="change colour" onMouseEnter={showColourTool} />
                </div>
            </div>
        </div>
    )
}

export default PalettePanel