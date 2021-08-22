import { useContext } from 'react';
import { PanelContext } from '../palette/PanelContext';
import { useHistory } from 'react-router';
import heartIcon from '../../images/heart.png';
import binIcon from '../../images/garbage.png';

const SwatchCard = ({swatchName, swatchColours, mouseLeave}) => {

    const mouseEnter = () => {
        document.querySelector('body').style.background = `linear-gradient(to right, ${swatchColours.join(', ')})`
    }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const handleClick = e => {
        dispatch({
            type: "openPalette",
            data: swatchColours
        })
        history.push('/palette')
    }

    return (
        <div className="swatch-card" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <div className="card-head">
                <h4 className="swatch-name" onClick={handleClick}>{swatchName}</h4>
                {window.location.href.indexOf("creations") ? <img className="like-button" src={heartIcon} /> : <img className="delete-button" src={binIcon} />}
            </div>
            <div className="swatch-colours">
                {swatchColours.map((colour, index) =>
                    <div key={index} className="colour-div" style={{ background: colour }} />
                )}
            </div>
        </div>
    )
}

export default SwatchCard;