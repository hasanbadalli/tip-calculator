import React from "react";

function Total(props){
    return(
        <div className="total">
            <div className="tip">
                <h3>{props.name}</h3>
                <p>/ Person</p>
            </div>
            <div className="cost">
                <p>0.00$</p>
            </div>
        </div>
    )
}

export default Total;