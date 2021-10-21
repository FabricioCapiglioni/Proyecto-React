
const Input = ({mb, type, value, setValue, label}) => {

    return (
        <div className={`form-floating ${mb}`}>
            <input 
            type={type} 
            value={value} 
            onChange={({ target }) => setValue(target.value)} 
            className="form-control" 
            required />
            <label>{label}</label>
        </div>
    )
}

export default Input;