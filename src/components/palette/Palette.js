import { Component } from 'react';
import PalettePanel from './PalettePanel';
import AddPanel from './AddPanel';
import UploadPalette from './UploadPalette';
import SavePalette from './SavePalette'

export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panels: [],
            currentPanel: {
                colour: '',
                key: ''
            }
        }
    }

    onRemove = () => {
    };

    render() {
        const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        return (
            <>
                <div id="palette-menu">
                    <AddPanel />
                    <UploadPalette />
                    <SavePalette />
                </div>
                <div id="palette-generator">
                    {[...Array(n)].map((swatch, i) => <PalettePanel onRemove={this.onRemove} />)}
                </div>
            </>
        )
    }
}