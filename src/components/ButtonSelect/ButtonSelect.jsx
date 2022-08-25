import "./ButtonSelect.css"
const ButtonSelect= ({
    label,
    onChange,
    value,
    name,
    id,
    options,
    statusId
   
}) => {
    return (
        <div   id={id}  value={value} name={name} >
            <select id="white"  name={label}>
                {
                    options.map((item)=>(
                      <option  key={item.key} selected={item.key === value} id={statusId}>{item.label}</option>  
                    ))
                }
            </select><br/>        
            
        </div>
    );
};

export default ButtonSelect;