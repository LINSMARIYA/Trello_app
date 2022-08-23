import "./item.css"
function Item(props){
    const {label,iconName,iconName2,id2,id3,iconName3}=props;
    return(

        <div className="list">
            <span id="icon">{iconName}</span>
            <span id="title"> {label}</span>
            <span id={id2}>{iconName2}</span>
            <span id={id3}>{iconName3}</span>
        </div>

        
    )
}
export default Item;