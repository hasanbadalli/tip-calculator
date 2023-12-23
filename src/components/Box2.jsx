import React from "react";
import Total from "./Total";

function Box2(){
    return(
        <div className="box-2">
            <Total name="Tip Amount"/>
            <Total name="Total"/>
            <button className="bt">RESET</button>        
        </div>
    )
}

export default Box2;
