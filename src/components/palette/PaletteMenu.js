import { Component } from 'react';
import addDivIcon from '../../images/plus.png';
import uploadIcon from '../../images/right-arrow.png';
import saveIcon from '../../images/save.png';

export default class PaletteTools extends Component {
    state = {
        addDiv: false,
        upload: false,
        save: false
    };

    showAddDiv = () => {
        this.setState({ addDiv: true })
    }

    hideAddDiv = () => {
        this.setState({ addDiv: false })
    }

    showUpload = () => {
        this.setState({ upload: true })
    }

    hideUpload = () => {
        this.setState({ upload: false })
    }

    showSave = () => {
        this.setState({ save: true })
    }

    hideSave = () => {
        this.setState({ save: false })
    }

    uploadPalette = () => {
        
    }

    savePalette = () => {

    }

    render() {
        const { addDiv, upload, save } = this.state
        return (
            <>
                <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                <div id="palette-menu">
                    <div class="palette-menu-item" onMouseEnter={this.showAddDiv} onMouseLeave={this.hideAddDiv} onClick={this.props.addPanel}>
                        <img src={addDivIcon} alt="add colour" style={{ display: (addDiv ? 'none' : 'block') }} />
                        <h4 style={{ display: (addDiv ? 'block' : 'none') }}>Add Colour</h4>
                    </div>
                    <div class="palette-menu-item" onMouseEnter={this.showUpload} onMouseLeave={this.hideUpload} onClick={this.uploadPalette}>
                        <img src={uploadIcon} alt="upload" style={{ display: (upload ? 'none' : 'block') }} />
                        <h4 style={{ display: (upload ? 'block' : 'none') }}>Upload</h4>
                    </div>
                    <div class="palette-menu-item" onMouseEnter={this.showSave} onMouseLeave={this.hideSave} onClick={this.savePalette}>
                        <img src={saveIcon} alt="save" style={{ display: (save ? 'none' : 'block') }} />
                        <h4 style={{ display: (save ? 'block' : 'none') }}>Save</h4>
                    </div>
                </div>
            </>
        )
    }
}