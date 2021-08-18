import { Component } from 'react';
import addDivIcon from '../../images/plus.png';

export default class PaletteTools extends Component {
    state = {
        addDiv: false,
    };

    showAddDiv = () => {
        this.setState({ addDiv: true })
    }

    hideAddDiv = () => {
        this.setState({ addDiv: false })
    }

    render(addPanel) {
        const { addDiv } = this.state
        return (
            <div className="palette-menu-item" onMouseEnter={this.showAddDiv} onMouseLeave={this.hideAddDiv} onClick={addPanel}>
                <img src={addDivIcon} alt="add colour" style={{ display: (addDiv ? 'none' : 'block') }} />
                <h4 style={{ display: (addDiv ? 'block' : 'none') }}>Add Colour</h4>
            </div>
        )
    }
}