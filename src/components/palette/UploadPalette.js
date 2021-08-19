import uploadIcon from '../../images/right-arrow.png';
import { useState } from 'react';

const UploadPalette = props => {
    const [upload, setUpload] = useState(true)

    const showUpload = e => {
        setUpload(false)
    }

    const hideUpload = e => {
        setUpload(true)
    }


    const uploadPalette = () => {

    }

    return (
        <div className="palette-menu-item" onMouseEnter={showUpload} onMouseLeave={hideUpload} onClick={uploadPalette}>
            {upload ? <img src={uploadIcon} alt="upload"/> : <h4>Upload</h4>}
        </div>
    )
}

export default UploadPalette;