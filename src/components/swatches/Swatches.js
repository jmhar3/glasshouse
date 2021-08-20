import { Component } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

export default class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            name: "no name creation",
            colours: ["#540D6E", "#EE4266", "#FFD23F" ,"#3BCEAC", "#0EAD69"],
            background: randomColor()
        };
    }

    mouseEnter = () => {
        const swatchColours = Array.from(this.state.colours)
        const colours =             swatchColours.map((colour, index) => `, rgba(${colour[0]},${colour[1]},${colour[2]},1)`)
        document.querySelector('body').style.background = `linear-gradient(to right${colours.join(', ')})`
    }

    mouseLeave = () => {
        document.querySelector('body').style.background = this.state.background
    }

    componentDidMount() {
        this.mouseLeave()
    }

    render() {
        return (
            <div id="featured-swatches">
                <SwatchCard name={this.state.name} colours={this.state.colours} mouseLeave={this.mouseLeave} mouseEnter={this.mouseEnter} />
            </div>
        )
    }
}