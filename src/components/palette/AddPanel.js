import { Component } from 'react';
import addDivIcon from '../../images/plus.png';

export default class PaletteTools extends Component {
    state = {
        addDiv: false,
    };

    showAddDiv = () => {
        const { addDiv } = this.state
        this.setState({ addDiv: !addDiv })
    }

    render() {
        const { addDiv } = this.state
        return (
            <>
                <input type="text" placeholder="Name Your Creation" id="name-swatch" />
                <div id="palette-menu">
                    <div class="palette-menu-item" onMouseEnter={this.showAddDiv} onMouseLeave={this.showAddDiv} onClick={this.props.addPanel}>
                        <img src={addDivIcon} alt="add colour" style={{ display: (addDiv ? 'none' : 'block') }} />
                        <h4 style={{ display: (addDiv ? 'block' : 'none') }}>Add Colour</h4>
                    </div>
                </div>
            </>
        )
    }
}