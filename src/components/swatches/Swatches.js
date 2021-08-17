import { Component } from 'react';
import SwatchCard from './SwatchCard'

export default class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            name: "no name creation",
            colours: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
        };
    }

    componentDidMount() {
        fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({
        model : "default",
	    input : [[44,43,44],[90,83,82],"N","N","N"]
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    }

    setBackground(colours) {
        document.body.style.backgroundImage = `linear-gradient(to right, ${colours})`;
    }

    render() {
        return (
            <>
                <SwatchCard name={this.state.name} colours={this.state.colours} setBackground={this.setBackground(this.state.colours)}/>
            </>
        )
    }
}