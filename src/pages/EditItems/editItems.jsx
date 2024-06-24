import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './editItems.scss'
import { useEffect, useState } from 'react';
import { axiosReq } from '../../functions/webApi';
import LoadingPage from '../LoadingPage/LoadingPage';
import { FaTrash } from "react-icons/fa";
import AddNewItem from '../../components/AddNewItem/addNewItem';

export default function EditItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState([])
  const [savedData, setSavedData] = useState(false)
  const deleteItem = async (id) => {
    const res = await axiosReq({ method: "POST", url: "items/delete-item", body: { itemId: id } });
    if (res) {
      alert("המוצר נמחק בהצלחה")
      setSavedData(true);
      return
    }
    alert("לא בוצעה שמירה")
  }
  const getData = async () => {
    const resCategories = await axiosReq({ method: "GET", url: "categories/get-categories" });
    const resItems = await axiosReq({ method: 'POST', url: 'items/get-items', body: { categoryId: null }, withCredentials: true });

    if (!resItems || !resCategories) {
      alert("משהו נדפק");
      return;
    }
    const categoryMap = {};
    resCategories.forEach(category => {
      categoryMap[category._id] = category.name;
    });
    resItems.forEach(item => {
      item.categoryName = categoryMap[item.categoryId] || 'Unknown';
    });
    setLoading(false);
    setCategories(resCategories);
    setItems(resItems);

  };


  useEffect(() => {
    getData()
  }, [savedData]);
  

  return (<>
    <div className='EditItems'>
      <HeaderTitle title={"ערוך מוצרים"} />
      <div className='main'>
        <AddNewItem categories={categories}/>
        <table>
          <thead>
            <tr>
              <th>שם:</th>
              <th>קטגוריה:</th>
              <th>פעולה:</th>
            </tr>
          </thead>
          <tbody className="tbody-wrapper">
            {items?.map(e => (
              <tr key={e._id}>
                <td>{e.displayName}</td>
                <td>{e.categoryName}</td>
                <td><button className='button trash' onClick={() => { deleteItem(e._id) }}> <FaTrash /> </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {loading && <LoadingPage />}
  </>
  )
}
