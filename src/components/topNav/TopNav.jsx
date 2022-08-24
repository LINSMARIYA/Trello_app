import "./TopNav.css"
import SelectField from "../selectField/SelectField";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import { MdErrorOutline,MdNotificationsNone } from "react-icons/md";


function TopNav(){
   
    return(
        <div className="navtop"> 
        <img id="menu" src={require("../../images/menu.png")} alt=""/>
        <img id="Trellologo" src={require("../../images/Trello.png")} alt="This is Trello logo"/>
        <SelectField
         label=" " id="Workspace" //onChange={(value) => onChangeValue("role", value)}
         options ={[
             {key:'1', label:'Workspace'},
             {key:'2', label:'option'},
             {key:'3', label:'option'},
             {key:'4', label:'option'}
         ]}
        />
         <SelectField
         label=" " id="" 
         options ={[
             {key:'1', label:'Recent' },
             {key:'2', label:'option'},
             {key:'3', label:'option'},
             {key:'4', label:'option'}
         ]}
        />
         <SelectField
         label=" " id="Starred" //onChange={(value) => onChangeValue("role", value)}
         options ={[
             {key:'1', label:'Starred'} ,
             {key:'2', label:'option'},
             {key:'3', label:'option'},
             {key:'4', label:'option'}
         ]}
        />
         <SelectField
         label=" " id="Templates" //onChange={(value) => onChangeValue("role", value)}
         options ={[
             {key:'1', label:'Templates'},
             {key:'2', label:'option'},
             {key:'3', label:'option'},
             {key:'4', label:'option'}
         ]}
        />
        <Button id="create" label="Create"/>
        <div id="search_nav">
        <svg id="search_icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"/></svg>
            <InputField type="search" id="search" placeholder="Search"/>
        </div>
        <div id="error"><MdErrorOutline size={20}/></div>
        <div id="notification"><MdNotificationsNone size={15}/></div>
        <p id="dp"><img src={require("../../images/bg.jpeg")}/></p>
        </div>
    );
}
export default TopNav;