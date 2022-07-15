import { useState } from "react";
import "./cards.css"
import React from "react";

function Cards({frontSide, backSide}){
const [isFront,changeFace] = useState(frontSide);


function handleClick(){
    changeFace(oldState => !oldState); };

const text = isFront ? frontSide : backSide;
const sideClass= isFront ? "front" : "back";
const classList = `cards ${sideClass}`;
return(
    
<div className={classList} onClick={handleClick}>{text}</div>
);

}

export default Cards;