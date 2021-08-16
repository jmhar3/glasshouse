import { Component } from 'react';
import PalettePanel from './PalettePanel';
import PaletteMenu from './PaletteMenu';
// import AddPanel from './AddPanel';

export default class Palette extends Component {
    onRemove = () => {
    };

    render() {
        const n = Math.floor(Math.random() * (6 - 4 + 1)) + 4;
        return (
            <>
                <PaletteMenu />
                {/* <div id="palette-menu">
                    <AddPanel />
                </div> */}
                <div id="palette-generator">
                    {[...Array(n)].map((swatch, i) => <PalettePanel onRemove={this.onRemove} />)}
                </div>
            </>
        )
    }
}