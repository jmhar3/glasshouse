// import { useContext } from "react";
// import { PanelContext } from "./PanelContext";

// const FetchColours = () => {
//     const [dispatch] = useContext(PanelContext);

//     fetch('http://colormind.io/api/', {
//         method: 'POST',
//         body: JSON.stringify({
//             model: "default"
//         })
//     })
//         .then(res => res.json())
//         .then(data =>
//             data.result.forEach((colour, i) => dispatch({
//                 type: "addPanel",
//                 data: {
//                     key: i,
//                     colour: `rgba(${colour.join(",")}, 1)`
//                 }
//             }))
//         )

//     return null;
// }

// export default FetchColours;