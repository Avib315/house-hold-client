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
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    if (!formValues.categoryId || !formValues.displayName) {
      alert("יש למלא שם מוצר וקטגוריה")
      return;
    }

    const res = await axiosReq({ method: "POST", url: "items/add-item", body: { item: formValues } });
    if (res) {
      alert("המוצר נוסף בהצלחה")

      setSavedData(true);
      setAddItems(false)
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
            <form onSubmit={submitHandler}>
              <div className='container'>
                <Input
                  name="displayName"
                  placeholder={"שם מוצר"}
                />
              </div>
              <div className='container'>
                <Select name="categoryId">
                  {categories?.map(category => <option key={category.name} value={category._id}>{category.name}</option>)}
                </Select>
              </div>
              <div className='containerBtn'>
                <button type='submit'>שמור</button>
              </div>
            </form>
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
