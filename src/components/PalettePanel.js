import { Component } from 'react';
import randomColor from 'randomcolor';
import bin from '../images/garbage.png';
import swatchColour from '../images/swatches.png';
import ColourTool from './ColourTool';

export default class PalettePanel extends Component {
    state = {
        toolMenu: false,
        colourTool: false,
        background: randomColor()
    };
    
    showTools = () => {
        const {toolMenu} = this.state
        this.setState({ toolMenu: !toolMenu})
    }

    showColourTool = () => {
        const {colourTool} = this.state
        this.setState({ colourTool: !colourTool})
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };

    render(onRemove) {
        const {toolMenu, colourTool} = this.state
        return (
            <div className="colour-generator" style={{ backgroundColor: this.state.background}} onMouseEnter={this.showTools} onMouseLeave={this.showTools}>
                <div className="panel-tools" style={{ display: (toolMenu ? 'flex' : 'none') }} >
                    <img src={bin} alt="delete colour" onClick={onRemove} />
                    <img src={swatchColour} alt="change colour" onClick={this.showColourTool}/>
                </div>
                <div style={{ display: (colourTool ? 'block' : 'none') }}>
                    <ColourTool
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete }
     />
                </div>
            </div>
        )
    }
}