import bin from '../../images/garbage.png';
import swatch from '../../images/swatches.png';
import { SliderPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
// import { useReducer } from 'react';

const PaletteList = (swatches) => {
    // useReducer

    return (
        <div id="palette-generator">
            {
                Object.keys(swatches).map(function (key) {
                    return (
                        <div className="colour-generator" key={key} style={{ backgroundColor: swatches }} >
                            <EditableInput  />
                            <div>
                                <div>
                                    <div className="panel-tools">
                                        <img src={bin} alt="delete colour" />
                                        <img src={swatch} alt="change colour" 
                                        // onMouseEnter={showColourTool} 
                                        />
                                    </div>
                                    <div>
                                        <SliderPicker
                                            color={swatches}
                                            // onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }.bind(this))
            }
        </div>
    )
}

export default PaletteList;