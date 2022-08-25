import "./InputArea.css"
const InputArea=(props)=>{
    const {id,placeholder,type}=props
    return(
        <div>
            <p  className="textarea" type={type} id={id} placeholder={placeholder} contentEditable data-autogrow draggable="true"></p>

        </div>
    )
}
export default InputArea;