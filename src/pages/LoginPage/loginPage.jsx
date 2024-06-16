import { useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import { Input } from '../../components/Input/input'
import './loginPage.scss'
import { NavLink, useNavigate } from "react-router-dom"
import { axiosReq } from '../../functions/webApi'
import { useUserInfo } from '../../functions/UserInfoContext'
export default function LoginPage() {
    const navigate = useNavigate()
    const { setUserInfo } = useUserInfo()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const submitHandler = async (e) => {
        e.preventDefault()
        if (loading) return;
        setLoading(true)

        const res = await axiosReq({ method: 'POST', url: 'user/login', body: data })
        setLoading(false)

        if (!res.login || !res) {
            alert(res.message ? res.message : "משהו נדפק")
            return;
        }
        console.log(res);
        setUserInfo((perv) => ({ ...res.user, ...perv, isLoggedIn: true }))
        navigate("/home")

    }
    return (
        <div className='LoginPage'>
            <HeaderTitle title={"התחברות"} />
            <form action="" className='form' onSubmit={submitHandler}>
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
                <button type='submit' disabled={loading}>{!loading ? "התחברות" : <div className='loadingBtn'></div>}</button>
                <p>
                    אין לך חשבון?
                    <NavLink to="/register"> הרשמה </NavLink>
                </p>
            </form>

        </div>
    )
}
