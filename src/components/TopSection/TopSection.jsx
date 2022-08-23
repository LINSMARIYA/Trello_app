import SelectField from "../selectField/SelectField";
import "./TopSection.css"
const TopSection=()=>{
    return(
        <div id="TopSection">

        <SelectField
         label=" " id="board" 
         options ={[
             {key:'', label:'Board' },
             {key:'', label:'option'},
             {key:'', label:'option'},
             {key:'', label:'option'}
         ]}
        />
            
        </div>
    )
}
export default TopSection;