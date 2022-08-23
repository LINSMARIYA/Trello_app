import "./MainSection.css"
import Card from "../Card/Card";
import TopSection from "../TopSection/TopSection";
import { GoPlus } from "react-icons/go";
const MainSection=()=>{
    return(
        <div>
        <TopSection/>
        <div id="TodoSection">
            
            <div>
            <Card label="To Do" inputid="Todo1"/>
            </div>
          
            <div>
            <Card label="Doing" inputid="Doing1" />
            </div>

            <div>
            <Card label="Done" inputid="Done1"/>
            </div>

            <div id="add_list">
                <GoPlus/> Add another list
            </div> 

            </div>
            
            
        
        
        </div>
    )
}
export default MainSection;