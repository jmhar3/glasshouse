import randomColor from 'randomcolor';
import addDivIcon from '../../images/plus.png';
import { useState } from 'react';

const AddPanel = props => {
    const [addDiv, setAddDiv] = useState(true)

    const showAddDiv = e => {
        setAddDiv(false)
    }

    const hideAddDiv = e => {
        setAddDiv(true)
    }

    const createPanel = e => {
        e.preventDefault();
        const colour = randomColor()
        this.props.addColour(colour)
    }

    return (
        <div className="palette-menu-item"
            onMouseEnter={showAddDiv} onMouseLeave={hideAddDiv}
            onClick={createPanel}>
            {addDiv ? <img src={addDivIcon} alt="add colour" /> : <h4>Add Colour</h4>}
        </div>
    )
}

export default AddPanel;