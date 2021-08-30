import addDivIcon from '../../images/plus.png';
import { useState, useContext } from 'react';
import { PanelContext } from '../palette/PanelContext';
import randomColor from 'randomcolor';

const AddPanel = props => {
    const [addDiv, setAddDiv] = useState(true)

    const showAddDiv = e => {
        setAddDiv(false)
    }

    const hideAddDiv = e => {
        setAddDiv(true)
    }

    const [panelState, dispatch] = useContext(PanelContext);

    const createPanel = e => {
        dispatch({
            type: "addPanel",
            data: randomColor()
        })
    }

    return (
        <div className="palette-menu-item"
            onMouseOver={showAddDiv} onMouseLeave={hideAddDiv}
            onClick={createPanel}>
            {addDiv ? <img src={addDivIcon} alt="add colour" /> : <h4>Add Colour</h4>}
        </div>
    )
}

export default AddPanel;