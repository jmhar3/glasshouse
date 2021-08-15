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
        fetch('http://colormind.io/api/')
            .then(res => res.json())
            .then(swatchData => this.setState({ name: swatchData.name, colours: swatchData.colours }))
    }

    render() {
        return (
            <>
                <SwatchCard name={this.state.name} colours={this.state.colours} />
            </>
        )
    }
}