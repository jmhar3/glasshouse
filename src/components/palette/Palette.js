import { Component } from 'react';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import randomColor from 'randomcolor';
import PaletteList from './PaletteList';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        // const panelColours = [];
        // const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;

        // for (let i = 0; i < n; i++) {
            // panelColours.push({
            //     colour: randomColor()
            // });
        // }
      
        this.state = {
            panelColours: {
                'colour-1' : randomColor(),
                'colour-2' : randomColor(),
                'colour-3' : randomColor(),
                'colour-4' : randomColor(),
                'colour-5' : randomColor()
            }
        }
    }

    
    addColour(colour) {
        let timestamp = (new Date()).getTime();
        this.state.panelColours['colour-' + timestamp ] = colour;
        this.setState({ colours : this.state.colours });
    }

    addPanel = () => {
        this.state.panelColours.push({colour: randomColor()})
        console.log(this.state.panelColours)
    }

    removePanel() {
    };

    showTools = () => {
        // this.setState({ panelColours: { toolMenu: true }})
    }

    hideTools = () => {
        // this.setState({ panelColours: { toolMenu: false }})
        // this.setState({ panelColours: { colourTool: false }})
    }
    
    showColourTool = () => {
        // this.setState({ colourTool: true })
    }

    handleChange = color => {
        this.setState({ background: color.hex });
      };

    render() {
        return (
            <>
                <div id="palette-menu">
                    <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                    <AddPanel addColour={this.addColour}/>
                    <UploadPalette />
                    <SavePalette />
                </div>
                <PaletteList swatches={this.state.swatches} />
            </>
        )
    }
}