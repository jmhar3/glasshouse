import { Component } from 'react';
import uploadIcon from '../../images/right-arrow.png';

export default class PaletteTools extends Component {
    state = {
        upload: false
    };

    showUpload = () => {
        this.setState({ upload: true })
    }

    hideUpload = () => {
        this.setState({ upload: false })
    }

    uploadPalette = () => {

    }

    render() {
        const { upload } = this.state
        return (
            <div class="palette-menu-item" onMouseEnter={this.showUpload} onMouseLeave={this.hideUpload} onClick={this.uploadPalette}>
                <img src={uploadIcon} alt="upload" style={{ display: (upload ? 'none' : 'block') }} />
                <h4 style={{ display: (upload ? 'block' : 'none') }}>Upload</h4>
            </div>
        )
    }
}