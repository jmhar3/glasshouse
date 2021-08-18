import { Component } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

export default class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            name: "no name creation",
            colours: [[42, 41, 48], [90, 83, 84], [191, 157, 175], [188, 138, 125], [215, 170, 66]],
            background: randomColor()
        };
    }

    mouseEnter = () => {
        const swatchColours = Array.from(this.state.colours)
        const colours =             swatchColours.map((colour, index) => `, rgba(${colour[0]},${colour[1]},${colour[2]},1)`)
        console.log(colours.join(''))
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
        //     model : "default",
	    //     input : [[44,43,44],[90,83,82],"N","N","N"]
        //     })
        // })
        //     .then(res => res.json())
        //     .then(data => this.setState({ colours: data })
        // )
    }

    render() {
        return (
            <>
                <SwatchCard name={this.state.name} colours={this.state.colours} mouseLeave={this.mouseLeave} mouseEnter={this.mouseEnter} />
            </>
        )
    }
}