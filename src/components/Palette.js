import { Component } from 'react';
import PalettePanel from './PalettePanel';
import PaletteTools from './PaletteTools';

export default class Palette extends Component {
    constructor() {
        super()
        this.addPanel = this.addPanel.bind(this);
    }

    addPanel() {
        const palettePanels = document.getElementById("#palette-generator")
        palettePanels.append(<PalettePanel/>)
    }

    render() {
        const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        return (
            <>
                <PaletteTools {...this.props.addPanel}/>
                <div id="palette-generator">
                    {[...Array(n)].map((e, i) => <PalettePanel key={i}/>)}
                </div>
            </>
        )
    }
}