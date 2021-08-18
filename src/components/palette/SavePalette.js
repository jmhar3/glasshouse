import { Component } from 'react';
import saveIcon from '../../images/save.png';

export default class PaletteTools extends Component {
    state = {
        save: false
    };

    showSave = () => {
        this.setState({ save: true })
    }

    hideSave = () => {
        this.setState({ save: false })
    }

    savePalette = () => {

    }

    render() {
        const { save } = this.state
        return (
            <div className="palette-menu-item" onMouseEnter={this.showSave} onMouseLeave={this.hideSave} onClick={this.savePalette}>
                <img src={saveIcon} alt="save" style={{ display: (save ? 'none' : 'block') }} />
                <h4 style={{ display: (save ? 'block' : 'none') }}>Save</h4>
            </div>
        )
    }
}