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
            console.log(state)
            if (state.length < 6) {
                return [...state, action.data]
            }
        case "removePanel":
            if (state.length > 4) {
                return state.filter(panel => action.data !== panel)
            }
        case "updatePanel":
            return state.map((panel) => {
                if (panel === action.data.oldColour) {
                    panel = action.data.newColour
                }
                return panel
            })
        case "openPalette":
            return [...action.data]
        case "savePalette":
            console.log(state, action.data)
        default:
            return state;
    }
}