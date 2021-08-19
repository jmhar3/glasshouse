import { Component } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

export default class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            name: "no name creation",
            colours: [[43, 42, 44], [90, 83, 81], [171, 127, 110], [220, 188, 108], [235, 237, 182]],
            background: randomColor()
        };
    }

    mouseEnter = () => {
        const swatchColours = Array.from(this.state.colours)
        const colours =             swatchColours.map((colour, index) => `, rgba(${colour[0]},${colour[1]},${colour[2]},1)`)
        document.querySelector('body').style.background = `linear-gradient(to right${colours.join('')})`
    }

    mouseLeave = () => {
        document.querySelector('body').style.background = this.state.background
    }

    componentDidMount() {
        this.mouseLeave()
        // fetch('http://colormind.io/api/', {
        // method: 'POST',
        // body: JSON.stringify({
        //     model : "castlevania",
	    //     input : [[44,43,44],[90,83,82],"N","N","N"]
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data => this.setState({ colours: Object.values(data) })
        // )
    }

    render() {
        console.log(this.state.colours)
        return (
            <div id="featured-swatches">
                <SwatchCard name={this.state.name} colours={this.state.colours} mouseLeave={this.mouseLeave} mouseEnter={this.mouseEnter} />
            </div>
        )
    }
}