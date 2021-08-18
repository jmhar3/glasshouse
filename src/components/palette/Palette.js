import { Component } from 'react';
import PalettePanel from './PalettePanel';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette';
import randomColor from 'randomcolor';

export default class Palette extends Component {
    constructor(props) {
        super(props);
        const panelColours = [];
        const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;

        for (let i = 0; i < n; i++) {
            panelColours.push({
                colour: randomColor(),
                toolMenu: false
            });
        }
      
        this.state = {
            panelColours: panelColours
        }
    }

    addPanel() {
        const newPanel = this.state.currentPanel;
        console.log(newPanel);
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

    renderPanels = () => {
        const panelColours = Array.from(this.state.panelColours)
        const panel =             panelColours.map((panel, index) => <PalettePanel key={index} colour={panel.colour} toolMenu={panel.toolMenu} showTools={this.showTools()} hideTools={this.hideTools()} />)
        return panel;
    }

    render() {
        return (
            <>
                <div id="palette-menu">
                    <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                    <AddPanel  addPanel={this.addPanel}/>
                    <UploadPalette />
                    <SavePalette />
                </div>
                <div id="palette-generator">
                    {this.renderPanels()}
                </div>
            </>
        )
    }
}