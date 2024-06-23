import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './editItems.scss'
import { useEffect, useState } from 'react';
import { axiosReq } from '../../functions/webApi';
import LoadingPage from '../LoadingPage/LoadingPage';
import { FaTrash } from "react-icons/fa";
import { Input } from '../../components/Input/input';
import Select from '../../components/Select/select';

export default function EditItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addItems, setAddItems] = useState(false);
  const [categories, setCategories] = useState([])
  const [newData, setNewData] = useState({});
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
    const res = await axiosReq({ method: "GET", url: "categories/get-categories" })
    setCategories(res)
  }
  const getItems = async () => {
    const res = await axiosReq({ method: 'POST', url: 'items/get-items', body: { categoryId: null }, withCredentials: true });
    setLoading(false)
    setItems(res);
  };
  useEffect(() => {
    getItems();
    getData()
  }, [savedData]);
  const saveNewItemData = async () => {
    if (!newData?.categoryId || newData?.displayName) {
      alert("יש למלא שם מוצר וקטגוריה")
      return;
    }
  
    const res = await axiosReq({ method: "POST", url: "items/add-item", body: { item: newData } });
    console.log("back");
    if (res) {
      alert("המוצר נוסף בהצלחה")
      setNewData({
        displayName: "",
        categoryId: "",
      })
      setSavedData(true);
      return
    }
    alert("לא בוצעה שמירה")
  }
  return (<>
    <div className='EditItems'>
      <HeaderTitle title={"ערוך מוצרים"} />
      <div className='main'>
        <div className='addItemsContainer'>
          <div
            className={`addItemsForm${!addItems ? " closedForm" : " openForm"}`}>
            <div className='container'>
              <Input
                placeholder={"שם מוצר"}
                value={newData.displayName}
                onChange={(e) => {
                  setNewData({ ...newData, displayName: e.target.value });
                }} />
            </div>
            <div className='container'>
              <Select onChange={(e) => {
                const val = e.target.value;
                setNewData({ ...newData, categoryId: val });
              }}>
                {categories?.map(category => <option key={category.name} value={category._id}>{category.name}</option>)}
              </Select>
            </div>
            <div className='containerBtn'>
              <button onClick={saveNewItemData}>שמור</button>
            </div>
          </div>
          <button className={`openItemsAddForm${addItems ? " closeButton" : ""}`} onClick={() => { setAddItems(true) }}> הוסף מוצר חדש</button>
        </div>
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
                <td>{e.name}</td>
                <td><button className='button trash' onClick={()=>{deleteItem(e._id)}}> <FaTrash /> </button></td>
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
