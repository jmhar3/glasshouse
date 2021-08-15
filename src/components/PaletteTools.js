import { Component } from 'react';
import upload from '../images/right-arrow.png'
import addDiv from '../images/plus.png'
import save from '../images/save.png'

export default class PaletteTools extends Component {
    render() {
        return(
            <div id="palette-menu">
            <div class="palette-menu-item"><img src={upload} /></div>
            <div class="palette-menu-item"><img src={addDiv} /></div>
            <div class="palette-menu-item"><img src={save} /></div>
            </div>
        )
    }
}