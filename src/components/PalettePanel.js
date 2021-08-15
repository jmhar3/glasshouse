import { Component } from 'react';
import { ChromePicker } from 'react-color';
import randomColor from 'randomcolor';
import bin from '../images/garbage.png';
import swatchColour from '../images/swatches.png';

export default class PalettePanel extends Component {
    state = {
        showing: false
    };

    showState = () => {
        const {showing} = this.state
        this.setState({ showing: !showing})
    }

    render() {
        const {showing} = this.state
        return (
            <div className="colour-generator" style={{ backgroundColor: randomColor()}} onMouseEnter={this.showState} onMouseLeave={this.showState}>
                <div className="panel-tools" style={{ display: (showing ? 'flex' : 'none') }} >
                    <img src={bin} />
                    <img src={swatchColour}/>
                </div>
                {/* <ChromePicker /> */}
            </div>
        )
    }
}