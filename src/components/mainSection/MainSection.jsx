import "./MainSection.css"
import Card from "../Card/Card";
import TopSection from "../TopSection/TopSection";
import InputArea from "../InputArea/InputArea";
import { GoPlus } from "react-icons/go";
const MainSection=()=>{
    return(
        <div>
        <TopSection/>
        <div id="TodoSection">
            
            <div className="card" id="todo">
            <Card label="To Do" inputid="Todo1" body={[<InputArea />]}/>
            
            </div>
          
            <div className="card" id="doing">
            <Card label="Doing" inputid="Doing1" 
            body={
                [<InputArea/>,<InputArea/>]
                 }/>

            </div>

            <div className="card" id="done">
            <Card label="Done" inputid="Done1" 
            body={
                [<InputArea/>,<InputArea/>,<InputArea/>]
                 }
            />

            </div>

            <div id="add_list">
                <GoPlus/> Add another list
            </div> 

            </div>
            
            
        
        
        </div>
    )
}
export default MainSection;