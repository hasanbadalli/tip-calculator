import React from "react";

function BillBox(props){
    return(
        <div className={props.cls1}>        
            <label htmlFor="name">{props.name}</label>
            <input type="text" name="bill" id="bill-input" placeholder="0"className={props.cls2}/>
        </div>
    )
}

export default BillBox;