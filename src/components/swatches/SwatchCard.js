import {useContext} from 'react';
import { PanelContext } from '../palette/PanelContext';
import { useHistory } from 'react-router';

const SwatchCard = ({ name, colours, index, mouseEnter, mouseLeave }) => {
    // const handleClick = e => {
    //     if (liked) {
    //         dispatchEvent({

    //         })
    //     } else {
    //         dispatchEvent({

    //         })
    //     }
    // }

    const history = useHistory()

    const [panelState, dispatch] = useContext(PanelContext);

    const handleClick = e => {
        dispatch({
            type: "replacePanel",
            data: colours
        })
        history.push('/palette')
    }

    return (
        <div className="swatch-card" key={index} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <div className="card-head">
            <h4 onClick={handleClick}>{name}</h4>
            <h4 className="like-button">❤️</h4>
        </div>
        <div className="swatch-colours">
            {colours.map((colour, index) => 
                <div key={index} className="colour-div" style={{background: colour}} />
            )
            }
        </div>
    </div>
    )
}

export default SwatchCard;