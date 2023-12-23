import React from "react";
import Buttons from "./Buttons";
import BillBox from "./BillBox";

function Box1(){
    return (
        <div className="box-1">
            <BillBox name="Bill" cls1="bill-box"/>
            
            <h1>Select Tip %</h1>
            <div className="tip-box">
                <Buttons cls = {"block"} value={"5%"} /> 
                <Buttons cls = {"block"} value={"10%"} /> 
                <Buttons cls = {"block"} value={"15%"} /> 
                <Buttons cls = {"block"} value={"25%"} /> 
                <Buttons cls = {"block"} value={"50%"} /> 
                <Buttons cls = {"block ablock"} value={"custom"} /> 
            </div>
            <BillBox name="Number of people" cls1="number-input" cls2="inp2"/>
            
        </div>
    )
}

export default Box1;