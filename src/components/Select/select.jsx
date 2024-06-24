import './select.scss'

export default function Select({ children, placeholder = "בחר" ,onChange = ()=>{} , name="select"}) {
    return (
        <label htmlFor="select" defaultValue={placeholder} className='Select'>
            <select name={name} onChange={onChange}>
                <option value={"0"} disabled>{placeholder}</option>
                {children}
            </select>
            <span> {placeholder}</span>
        </label>
    )
}
