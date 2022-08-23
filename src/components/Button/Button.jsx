const Button=(props)=>{
    const {label,id,button_icon}=props;
    return(
     <button id={id}>
        <span>{button_icon}</span>
        {label}</button>
    )
}
export default Button;