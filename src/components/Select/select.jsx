import './select.scss'

export default function Select({ children, placeholder = "בחר" ,onChange = ()=>{}}) {
    return (
        <label htmlFor="select" defaultValue={placeholder} className='Select'>
            <select name="selectBar" onChange={onChange}>
                <option value={"0"} disabled>{placeholder}</option>
                {children}
            </select>
            <span> {placeholder}</span>
        </label>
    )
}
