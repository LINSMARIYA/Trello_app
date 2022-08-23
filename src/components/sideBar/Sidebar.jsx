import "./Sidebar.css"
import {MdPersonOutline, MdSettings,MdStickyNote2 ,MdKeyboardArrowDown,MdStarOutline,MdMoreHoriz} from "react-icons/md";
import {BiTable, BiCalendarAlt } from "react-icons/bi";
import Item from "../item/Item";
import { GoChevronRight,GoChevronLeft ,GoPlusSmall } from "react-icons/go";

function Sidebar(){
return(
        
        <div id="aside">
            <div className="account">
                <p id="K">K</p>
               <div> <p id="keyvalue">KeyValue </p>
               <p id="free">Free</p>
               </div>
               <p id="right"><GoChevronLeft/></p>
            </div>
            <hr/>
            <div className="items">
                <Item label="Boards" iconName= {< MdStickyNote2 size={12}/>} />
                <Item label="Members" iconName= {< MdPersonOutline size={12}/>} iconName2={<GoPlusSmall/>} id2="plus"/>
                <Item label="Settings" iconName= {< MdSettings size={12}/>} iconName2={<MdKeyboardArrowDown/>} id2="d_arrow"/>
                <br/>
                <p id="topic"><b>Workspace views</b></p>
                <Item label="Table" iconName= {< BiTable size={12}/>} />
                <Item label="Calendar" iconName= {< BiCalendarAlt size={12}/>} /><br/>
                <div id="topic"><span>Your Boards</span> <span id="title_icon"><GoPlusSmall size={16}/></span></div>
                <Item label="G&T" iconName= {<img id="pic" src={require("../../images/bg.jpeg")} alt=""  />} iconName2={<MdMoreHoriz size={13}/>} id2="more1" iconName3={<MdStarOutline size={14} />} id3="important"/><br/>
                
            </div>
        
        </div>
    


);
}
export default Sidebar;