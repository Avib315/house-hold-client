import { NavLink } from 'react-router-dom'
import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './editItems.scss'
import { useEffect, useState } from 'react';
import { axiosReq } from '../../functions/webApi';
import LoadingPage from '../LoadingPage/LoadingPage';

export default function EditItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const getItems = async () => {
    const res = await axiosReq({ method: 'POST', url: 'items/get-items', body: { categoryId: null }, withCredentials: true });
    setLoading(false)
    setItems(res);
  };
  useEffect(() => {
    getItems();
    console.log(items);
  }, []);
  return (<>
    <div className='EditItems'>
      <HeaderTitle title={"ערוך מוצרים"} />
      <div className='main'>
        <table>
          <thead>
            <tr>
              <th>שם:</th>
              <th>קטגוריה:</th>
              <th>פעולה:</th>
            </tr>
          </thead>
          <div className="tbody-wrapper">
            <tbody>
              {items?.map(e => (
                <tr key={e._id}>
                  <td>{e.displayName}</td>
                  <td>{e.name}</td>
                  <td>{e.name}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>
    </div>
    {loading && <LoadingPage />}
  </>
  )
}
