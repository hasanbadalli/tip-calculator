import React from "react";

function Buttons(props){
    return(
        <button className={props.cls}>{props.value}</button>
    )
}

export default Buttons;