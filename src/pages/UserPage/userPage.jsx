import { NavLink } from 'react-router-dom';
import './userPage.scss';
import { useEffect, useState } from 'react';
import { axiosReq } from '../../functions/webApi.js';
import LoadingPage from '../LoadingPage/LoadingPage.jsx';
import { FaBook, FaUser, FaShoppingBag, FaUserFriends, FaClipboardList ,  FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function UserPage() {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function getUserData() {
    const res = await axiosReq({ method: 'GET', url: 'user/get-user-data', withCredentials: true });
    setLoading(false);
    if (res) {
      setUserInfo(res);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/home'); 
    }
  };

  return (
    <>
      {!loading ?
        <div className='UserPage'>
          <div className='main'>
            <div className='header'>
              <button className='back' onClick={handleBack}><FaArrowLeft/></button>
              <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="userImage" />
              <p>שלום, {userInfo.name} </p>
            </div>
            <div className='buttonsContainer'>
              <NavLink to="">
                <div className='iconContainer user'><FaUser /></div>
                <p>חשבון</p>
              </NavLink>
              <NavLink to="edit-items">
                <div className='iconContainer items'>
                  <FaShoppingBag/>
                </div>
                <p>מוצרי קניות </p>
              </NavLink>
              <NavLink to="">
                <div className='iconContainer lists'>
                  <FaClipboardList/>
                </div>
                <p>רשימות </p>
              </NavLink>
              <NavLink to="">
                <div className='iconContainer friends'>
                  <FaUserFriends/>
                </div>
                <p>חברים</p>
              </NavLink>
              <NavLink to="">
                <div className='iconContainer recipes'>
                  <FaBook/>
                </div>
                <p>מתכונים </p>
              </NavLink>
            </div>
            
          </div>
        </div>
        : <LoadingPage />
      }
    </>
  );
}
