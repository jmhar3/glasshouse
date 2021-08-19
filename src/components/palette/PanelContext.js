import randomColor from "randomcolor";
import {createContext, useReducer} from "react";

export const PanelContext = createContext(null)

export const PanelContextProvider = props => {
    const [panelState, dispatch] = useReducer(PanelReducer, []);

    return (
        <PanelContext.Provider value={[panelState, dispatch]}>
            {props.children}
        </PanelContext.Provider>
    )
}

const PanelReducer = (state, action) => {
    switch(action.type) {
        case "addPanel":
            return [...state, action.data]
        case "removePanel":
            return state.filter(panel => action.data !== panel)
        case "updatePanel":
            console.log("bye")
            console.log(action.data.oldColour, action.data.newColour)
            return state.map((panel) => {
                if (panel === action.data.oldColour) {
                    panel = action.data.newColour
                }
                return panel
            })
        case "replacePanel":
            return [...action.data]
        default:
            return state;
    }
}