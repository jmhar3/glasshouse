import { Component } from 'react';
import bin from '../../images/garbage.png';
import swatchColour from '../../images/swatches.png';
import { SliderPicker } from 'react-color';

export default class PalettePanel extends Component {
    state = {
        colourTool: false
    };

    showColourTool = () => {
        this.setState({ colourTool: true })
    }

    handleChange = color => {
        this.setState({ background: color.hex });
      };

    render(onRemove) {
        const {  colourTool } = this.state
        return (
            <div>
                <div className="panel-tools">
                    <img src={bin} alt="delete colour" onClick={onRemove} />
                    <img src={swatchColour} alt="change colour" onMouseEnter={this.showColourTool} />
                </div>
                <div style={{ display: (colourTool ? 'block' : 'none') }}>
                    <SliderPicker
                        color={this.state.background}
                        onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}