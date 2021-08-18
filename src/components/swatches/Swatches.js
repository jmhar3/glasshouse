import { Component } from 'react';
import SwatchCard from './SwatchCard'
import randomColor from 'randomcolor';

export default class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            name: "no name creation",
            colours: [[214,78,69],[247,242,163],[201,216,147],[57,141,112],[62,80,64]],
            background: randomColor()
        };
    }

    componentDidMount() {
        document.querySelector('body').style.background = this.state.background
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
        console.log(this.state.colours)
        return (
            <>
                <SwatchCard name={this.state.name} colours={this.state.colours} />
            </>
        )
    }
}