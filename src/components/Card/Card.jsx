import InputArea from "../InputArea/InputArea"
import {MdMoreHoriz,MdDeveloperBoard} from "react-icons/md";
import "./Card.css"
import React, { useState } from 'react';
// import {useRef, useEffect} from 'react';
const Card=({id,label})=>{
   
    let dragged = null;
    // const ref = useRef(null);
    const [cardCount, addCard] = useState([ <InputArea />]);
    const onClickAddCard=()=>{
        addCard(prevArray => [...prevArray, <InputArea />])
    }
    
    document.addEventListener("dragstart", (event) => {
        // store a ref. on the dragged elem
        dragged = event.target;
      });
      document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
      });
      document.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if (event.target.className === "dropzone") {
          dragged.parentNode.removeChild(dragged);
          event.target.appendChild(dragged);
        }
      });
   
    return(
             <>
             <p id="head">
                <span>{label}</span>
                <span id="more">{<MdMoreHoriz />}</span>
            </p>
             <div id={id} className="dropzone">
              <p id="list-todo">{cardCount}</p>
              </div>
              <p id="footer">
                <span id="addCard" onClick={() => onClickAddCard()}>+ Add a card</span>
                <span>{<MdDeveloperBoard />}</span>
            </p></>
    )

}
export default Card;