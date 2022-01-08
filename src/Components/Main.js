import React from "react";
import Accessibility from "./Accessibility";


function Main(){
    return(
        <div style={{minHeight:"200vh",minWidth:"100vh"}}>
            <Accessibility />
            <div style={{width:"100%",height:"100vh",backgroundColor:"lightgreen"}}></div>
            <div style={{width:"100%",height:"100vh",backgroundColor:"green"}}></div>
        </div>
    )
}

export default Main;