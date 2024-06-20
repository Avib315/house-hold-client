import { NavLink } from 'react-router-dom';
import './userPage.scss' 
import { useEffect, useState } from 'react';
import {axiosReq} from '../../functions/webApi.js';
import LoadingPage from '../LoadingPage/LoadingPage.jsx';
export default function UserPage(){
  const [userInfo, setUserInfo] = useState({}) 
  const [loading , setLoading] = useState(true)
  async function getUserData(){
    const res = await axiosReq({ method: 'GET', url: 'user/get-user-data', withCredentials: true });
    setLoading(false)
    if(res){
      setUserInfo(res);
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
    return (<>
{loading ?
<div className='UserPage'>
  <div className='main'>
    <div className='header'>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="userImage" />
      <p>שלום, {userInfo.name} </p>
    </div>
    <div className='buttonsContainer'> 
      <button>מוצרי קניות <span>({userInfo?.items?.length})</span></button>
      <button> רשימות <span>({userInfo?.buttonsts?.length})</span></button>
      <button> חברים <span>({userInfo?.friends?.length})</span></button>
      <button> מתכונים <span>({userInfo?.recipes?.length}0)</span></button>
    </div>
<NavLink to="new-items"> הוסף מוצרים</NavLink>
  </div>
</div>
: <LoadingPage/>}
    </>
  )
}
