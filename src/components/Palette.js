import {Component} from 'react';
import { ChromePicker } from 'react-color';
import bin from '../images/garbage.png'

export default class Palette extends Component {

  render() {
    return (
      <>
        <input type="text" placeholder="Name Your Creation" id="name-swatch" />
        <div id="palette-generator">
            <div className="colour-generator" style={{backgroundColor: "lavenderblush"}}>
                <img src={bin} class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "lavender"}}>
                <img src={bin}class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "aliceblue"}}>
                <img src={bin}class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "lightpink"}}>
                <img src={bin}class="hidden" />
                <h5>3WC503</h5>
            </div>
            <div className="colour-generator" style={{backgroundColor: "lightblue"}}>
                <img src={bin}class="hidden" />
                <h5>3WC503</h5>
            </div>
        </div>
        {/* <ChromePicker /> */}
      </>
    )
  }
}