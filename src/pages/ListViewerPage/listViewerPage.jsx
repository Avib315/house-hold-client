import './listViewerPage.scss'
import { axiosReq } from "../../functions/webApi.js"
import { useState } from 'react';
import { useEffect } from 'react';
import { useUserInfo } from '../../functions/UserInfoContext.jsx';
import { NavLink } from 'react-router-dom';

export default function ListViewerPage({  }) {
  const [item, setItem] = useState([]);
  const { userInfo } = useUserInfo();
  const getDate = async () => {
    const res = await axiosReq({ method: 'POST', url: 'items/get-items', body: { itemsId:userInfo.itemsSelected } , withCredentials: true });
    setItem(res);
  }
  useEffect(() => {
    getDate();
  }, [])
  return (
    <div className='ListViewerPage'>
      <NavLink className={"navBack"} to={-1}>סגור</NavLink>
      <div className='container'>
      {item.map((item , i) => (<p key={i + " lv"}>{item.displayName} </p>))}
      </div>
    </div>
  )
}
