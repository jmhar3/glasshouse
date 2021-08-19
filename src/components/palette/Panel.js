import bin from '../../images/garbage.png';
import swatch from '../../images/swatches.png';
import { SliderPicker } from 'react-color';
import { EditableInput } from 'react-color/lib/components/common';
import { useState, useContext, useEffect } from 'react';
import { PanelContext } from './PanelContext';


const Panel = ({ remove, key, colour, panel }) => {
    const [panelTools, setPanelTools] = useState(false)
    const [sliderTool, setSliderTool] = useState(false)

    const [panelState, dispatch] = useContext(PanelContext)

    // useEffect()

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

    const handleChange = color => {
        console.log(color.hex)
        dispatch({
            type: "updatePanel",
            data: {
                newColour: color.hex,
                oldColour: colour
            }
        })
    };


    // const [background, setBackground] = useState('#fff')
    
    // const handleChangeComplete = (color) => {
    //     setBackground(color.hex);
    // };

    return (
        <div key={key} className="colour-generator"  onMouseEnter={showPanelTools} onMouseLeave={hidePanelTools} 
        style={{backgroundColor: colour}}>
            <EditableInput value={colour} onChange={handleChange} />
            <div className="panel-tools" style={{ display: (panelTools ? 'flex' : 'none') }}>
                <img src={bin} alt="delete colour" onClick={remove} />
                <img src={swatch} alt="change colour"
                    onMouseEnter={showSliderTool}
                />
            </div>
            <div style={{ display: (sliderTool ? 'block' : 'none') }}>
                <SliderPicker
                    color={colour}
                    onChangeComplete={handleChange}
                />
            </div>
        </div>
    );
}

export default Panel;