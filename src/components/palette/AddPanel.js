import addDivIcon from '../../images/plus.png';
import { useState } from 'react';
import {useContext} from 'react';
import { PanelContext } from '../palette/PanelContext';
import { useHistory } from 'react-router';
import randomColor from 'randomcolor';

const AddPanel = props => {
    const [addDiv, setAddDiv] = useState(true)

    const showAddDiv = e => {
        setAddDiv(false)
    }

    const hideAddDiv = e => {
        setAddDiv(true)
    }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const createPanel = e => {
        dispatch({
            type: "addPanel",
            data: randomColor()
        })
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