import React from "react";

const Square = (props) => {
return (
    <div 
    onClick={props.onClick} //props onclick fun is called on click on this div
    style = {{
        border:"1px solid", 
        height:"100px", 
        width:"100%", 
        display:"flex", 
        justifyContent: "center", 
        alignItems:"center" 
    }} 
    //can give inline style in react, style accepts an object prop where css value can be added
    className="square"
    >
        <h5>{props.value}</h5>
    </div>
);
};

export default Square;