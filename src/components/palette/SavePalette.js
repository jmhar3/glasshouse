import saveIcon from '../../images/save.png';
import { useState, useContext } from 'react';
import { PanelContext } from './PanelContext';
import { useHistory } from 'react-router';

const SavePalette = () => {
    const [save, setSave] = useState(true)

    const showSave = e => {
        setSave(false)
    }

    const hideSave = e => {
        setSave(true)
    }

    const [inputValue, setInputValue] = useState("no name creation")

    const setValue = e => {
        setInputValue(e.target.value)
    }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const savePalette = e => {
        dispatch({
            type: "savePalette",
            data: inputValue
        })
        history.push('/creations')
    }

    return (
        <>
            <input type="text" placeholder="Name Your Creation" id="name-swatch" onKeyUp={setValue} />
            <div className="palette-menu-item" onMouseEnter={showSave} onMouseLeave={hideSave} onClick={savePalette}>
                {save ? <img src={saveIcon} alt="save" /> : <h4>Share</h4>}
            </div>
        </>
    )
}

export default SavePalette;