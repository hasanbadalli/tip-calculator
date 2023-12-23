import React from "react";
import Header from "./components/Header";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

function App(){
    return(
        <div className="container">
            <Header />
            <div className="box">
                <Box1 />
                <Box2 />   
            </div>
        </div>
        
    )
}

export default App;