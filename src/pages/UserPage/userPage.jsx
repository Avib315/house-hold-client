import { NavLink } from 'react-router-dom';
import './userPage.scss' 
import { useEffect, useState } from 'react';
import {axiosReq} from '../../functions/webApi.js';
export default function UserPage(){
  const [userInfo, setUserInfo] = useState({}) 
  async function getUserData(){
    console.log("reerer");
    const res = await axiosReq({ method: 'GET', url: 'user/get-user-data', withCredentials: true });
    console.log(res);
    if(res){
      setUserInfo(res);
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
    return (
<div className='UserPage'>
  <div className='main'>
    <div className='header'>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="userImage" />
      <p>שלום, {userInfo.name} </p>
    </div>
    <ul>
      <li>מוצרי קניות <span>({userInfo?.items?.length})</span></li>
      <li> רשימות <span>({userInfo?.lists?.length})</span></li>
      <li> חברים <span>({userInfo?.friends?.length})</span></li>
      <li> מתכונים <span>({userInfo?.recipes?.length}0)</span></li>
    </ul>
    <div> </div>
<NavLink to="new-items"> הוסף מוצרים</NavLink>
  </div>
</div>
  )
}
