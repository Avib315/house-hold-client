import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './registerPage.scss'
import {axiosReq} from '../../functions/webApi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {Input} from "../../components/Input/input.jsx"
export default function RegisterPage() {
  const [data, setData] = useState({ fName: '' ,lName:'' , email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axiosReq({
        method: 'POST',
        url: 'user/register',
        body: data
      })
      console.log(res)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div className='RegisterPage'>
      <HeaderTitle title={"הרשמה"} isProtected={false} />
      <form className='form' onSubmit={submitHandler}>
        <div className='inputContainer'>
          <Input
            required={true}
            type="text"
            onInput={(e) => setData((perv) => { return { ...perv, fName: e.target.value } })}
            value={data.value}
            placeholder="שם פרטי"
          />
        </div>
        <div className='inputContainer'>
          <Input
            required={true}
            type="text"
            onInput={(e) => setData((perv) => { return { ...perv, lName: e.target.value } })}
            value={data.value}
            placeholder="שם משפחה"
          />
        </div>
        <div className='inputContainer'>
          <Input
            required={true}
            type="email"
            onInput={(e) => setData((perv) => { return { ...perv, email: e.target.value } })}
            value={data.value}
            placeholder="אימייל"
          />
        </div>
        <div className='inputContainer'>
          <Input
            required={true}
            type="password"
            onInput={(e) => setData((perv) => { return { ...perv, password: e.target.value } })}
            value={data.value}
            placeholder="סיסמה"
          />
        </div>
        <button type='submit' disabled={loading}>{!loading ? "הרשמה" : <div className='loadingBtn'></div>}</button>
        <p>
          יש לך חשבון?
          <NavLink to="/login"> התחברות </NavLink>
        </p>
      </form>
    </div>
  )
}
