import bin from '../../images/garbage.png';
import swatch from '../../images/swatches.png';
import { SliderPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import { useReducer, useState } from 'react';

const PaletteList = (swatches) => {

    // useReducer

    const [panelTools, setPanelTools] = useState(false)
    const [sliderTool, setSliderTool] = useState(false)

    const showPanelTools = e => {
        setPanelTools(true)
    }

    const hidePanelTools = e => {
        setPanelTools(false)
        setSliderTool(false)
    }

    const showSliderTool = e => {
        setSliderTool(true)
    }

    const handleChange = e => {

    }

    return (
        <div id="palette-generator">
            {
                Object.keys(swatches).map(function (key) {
                    return (
                        <div className="colour-generator" key={key} style={{ backgroundColor: swatches[key] }} onMouseEnter={showPanelTools} onMouseLeave={hidePanelTools} >
                            <EditableInput onChange={handleChange}/>
                            <div className="panel-tools"  style={{ display: (panelTools ? 'flex' : 'none') }}>
                                <img src={bin} alt="delete colour" />
                                <img src={swatch} alt="change colour"
                                onMouseEnter={showSliderTool} 
                                />
                            </div>
                            <div  style={{ display: (sliderTool ? 'block' : 'none') }}>
                                    <SliderPicker
                                        color={swatches}
                                    onChange={handleChange}
                                    />
                                </div>
                        </div>
                    )
                }.bind(this))
            }
        </div>
    )
}

export default PaletteList;