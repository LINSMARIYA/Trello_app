import InputArea from "../InputArea/InputArea"
import {MdMoreHoriz,MdDeveloperBoard} from "react-icons/md";
import "./Card.css"
const Card=({id,label,inputid,body=[]})=>{
    // const addCard=()=>{
        // body.push(<InputArea/>)
        // {body[]}.push("a");
        // alert("Hello");
        //}
    return(
            <div id={id}>
            <p id="head">
            <span>{label}</span>
            <span id="more">{<MdMoreHoriz/>}</span>
            </p>
            
            <p>{body}</p>
            <p id="footer">
            <span id="addCard" onClick="{addCard}">+ Add a card</span>
            <span>{<MdDeveloperBoard/>}</span>
            </p>
        </div>
    )

}
export default Card;