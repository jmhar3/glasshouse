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

    mouseLeave = () => {
        document.querySelector('body').style.background = this.state.background
    }

    componentDidMount() {
        this.mouseLeave()
    }

    render() {
        return (
            <div id="featured-swatches">
                <SwatchCard swatchName={this.state.name} swatchColours={this.state.colours} mouseLeave={this.mouseLeave} />
            </div>
        )
    }
}