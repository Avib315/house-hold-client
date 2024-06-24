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

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        if (loading) return;
        setLoading(true)
        const res = await axiosReq({ method: 'POST', url: 'user/login', body: formValues })
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
            <HeaderTitle title={"התחברות"} isProtected={false} />
            <form action="" className='form' onSubmit={submitHandler}>
                <div className='inputContainer'>
                    <Input
                        required={true}
                        type="email"
                        name="email"
                        placeholder="אימייל"
                    />
                </div>
                <div className='inputContainer'>
                    <Input
                        required={true}
                        type="password"
                        name="password"
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
