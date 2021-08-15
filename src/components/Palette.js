import {Component} from 'react';
import { ChromePicker } from 'react-color';

export default class Palette extends Component {

  render() {
    return (
      <>
        <input type="text" placeholder="Name Your Creation" id="name-swatch" />
        <div id="palette-generator">
            <div className="colour-generator" style={{backgroundColor: "rgb(107, 64, 46)"}}>
                <img src="./images/garbage.png" class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "rgb(33, 24, 18)"}}>
                <img src="./images/garbage.png" class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "rgb(17, 65, 43)"}}>
                <img src="./images/garbage.png" class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "rgb(103, 62, 33)"}}>
                <img src="./images/garbage.png" class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "rgb(97, 24, 44)"}}>
                <img src="./images/garbage.png" class="hidden" />
                <h5>3WC503</h5>
            </div>
        </div>
        <ChromePicker />
      </>
    )
  }
}