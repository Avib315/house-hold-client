import './listViewerPage.scss'
import { axiosReq } from "../../functions/webApi.js"
import { useState } from 'react';
import { useEffect } from 'react';
import { useUserInfo } from '../../functions/UserInfoContext.jsx';
import { NavLink } from 'react-router-dom';

export default function ListViewerPage({ }) {
  const [items, setItem] = useState([]);
  const { userInfo } = useUserInfo();
  const [isCopyString, setIsCopyString] = useState(false);
  const getDate = async () => {
    const res = await axiosReq({ method: 'POST', url: 'items/get-items', body: { itemsId: userInfo.itemsSelected }, withCredentials: true });
    if(res)
    setItem(res);
  }
  useEffect(() => {
    getDate();
  }, [])
  const copyTextClickHandler = () => {
    const copyText = "-רשימת קניות- \n "+items.map(item => item.displayName).join('\n');
    navigator.clipboard.writeText(copyText);
    setIsCopyString(true)
  }
  return (
    <div className='ListViewerPage'>
      <NavLink className={"navBack"} to={-1}>סגור</NavLink>
      <button onClick={copyTextClickHandler}>{!isCopyString ? "העתק רשימה" : "הועתק!"} </button>
      <div className='container'>
        <ul>
          {items.map((item, i) => (<li key={i + " lv"}>{item.displayName} </li>))}
        </ul>
      </div>
    </div>
  )
}
