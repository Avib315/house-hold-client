import { useState } from 'react';
import { axiosReq } from '../../functions/webApi';
import './addNewItem.scss'
import { Input } from '../Input/input';
import Select from '../Select/select';

export default function AddNewItem({ categories }) {
  const [addItems, setAddItems] = useState(false);
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

  return (
    <div className='addNewItem'>
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
  )
}
