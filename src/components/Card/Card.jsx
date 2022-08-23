import InputArea from "../InputArea/InputArea"
import {MdMoreHoriz,MdDeveloperBoard} from "react-icons/md";
import "./Card.css"
const Card=({label,more,inputid})=>{
    return(
        <div className="card">
            <p id="head">
            <span>{label}</span>
            <span id="more">{<MdMoreHoriz/>}</span>
            </p>
            <InputArea id={inputid}/>
            <p id="footer">
            <span>+ Add a card</span>
            <span>{<MdDeveloperBoard/>}</span>
            </p>
        </div>
    )

}
export default Card;