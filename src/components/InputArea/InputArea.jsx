import "./InputArea.css"
const InputArea=(props)=>{
    const {id,placeholder,type}=props
    return(
        <div>
            <p  className="textarea" type={type} id={id} placeholder={placeholder} contentEditable data-autogrow></p>
            {/* <input  className="textarea" type={type} id={id} placeholder={placeholder} data-autogrow></input> */}

        </div>
    )
}
export default InputArea;