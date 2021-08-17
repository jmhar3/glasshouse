import { Component } from 'react';
import PalettePanel from './PalettePanel';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import randomColor from 'randomcolor';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        const swatchColours = [];
        const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;

        for (let i = 0; i < n; i++) {
            swatchColours.push({
                colour: randomColor(),
                toolMenu: false
            });
        }
      
        this.state = {
            swatchColours: {}
        }
    }

    addPanel() {
        const newPanel = this.state.currentPanel;
        console.log(newPanel);
    }

    removePanel() {
    };

    showTools = () => {
        this.setState({ swatchColours: { toolMenu: true }})
    }

    hideTools = () => {
        this.setState({ swatchColours: { toolMenu: false }})
        this.setState({ swatchColours: { colourTool: false }})
    }

    render() {
        const swatches = Array.from(this.state.swatchColours)
        return (
            <>
                <div id="palette-menu">
                    <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                    <AddPanel  addPanel={this.addPanel}/>
                    <UploadPalette />
                    <SavePalette />
                </div>
                <div id="palette-generator">
                    {swatches.map((swatch, index) => <PalettePanel key={index} colour={swatch.colour} toolMenu={swatch.toolMenu} showTools={this.showTools()} hideTools={this.hideTools()} />)}
                </div>
            </>
        )
    }
}