import saveIcon from '../../images/save.png';
import { useState } from 'react';

const SavePalette = savePalette => {
    const [save, setSave] = useState(true)

    const showSave = e => {
        setSave(false)
    }

    const hideSave = e => {
        setSave(true)
    }

    return (
        <div className="palette-menu-item" onMouseEnter={showSave} onMouseLeave={hideSave} onClick={savePalette}>
            {save ? <img src={saveIcon} alt="save" /> : <h4>Save</h4>}
        </div>
    )
}

export default SavePalette;