import { Component } from 'react';
import randomColor from 'randomcolor';
import bin from '../../images/garbage.png';
import swatchColour from '../../images/swatches.png';
import { SliderPicker } from 'react-color';

export default class PalettePanel extends Component {
    state = {
        toolMenu: false,
        colourTool: false,
        background: randomColor()
    };
    
    showTools = () => {
        this.setState({ toolMenu: true})
    }
    
    hideTools = () => {
        this.setState({ toolMenu: false})
        this.setState({ colourTool: false})
    }

    showColourTool = () => {
        this.setState({ colourTool: true})
    }

    handleChange = (color) => {
        this.setState({ background: color.hex });
      };

    render(onRemove) {
        const {toolMenu, colourTool} = this.state
        return (
            <div className="colour-generator" style={{ backgroundColor: this.state.background}} onMouseEnter={this.showTools} onMouseLeave={this.hideTools}>
                <div className="panel-tools" style={{ display: (toolMenu ? 'flex' : 'none') }} >
                    <img src={bin} alt="delete colour" onClick={onRemove} />
                    <img src={swatchColour} alt="change colour" onMouseEnter={this.showColourTool}/>
                </div>
                <div style={{ display: (colourTool ? 'block' : 'none') }}>
                    <SliderPicker
                    color={ this.state.background }
                    onChange={ this.handleChange } />
                </div>
            </div>
        )
    }
}