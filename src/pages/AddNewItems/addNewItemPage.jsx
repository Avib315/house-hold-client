import "./addNewItemPage.scss";
import React, { useState } from "react";
import { Input } from "../../components/Input/input.jsx";
import HeaderTitle from "../../components/HeaderTitle/headerTitle.jsx";
import { CategoriesContainer } from "../../components/CategoriesContainer/categoriesContainer.jsx";
import { axiosReq } from "../../functions/webApi.js";
export const AddNewItemPage = ({ }) => {
  const [data, setData] = useState({
    displayName: "",
    categoryId: "",
  });
  
  const saveNewItemData = async () => {
    const res = await axiosReq({ method: "POST", url: "items/add-item", body: { item: data } });
    if (res) {
      alert("המוצר נוסף בהצלחה")
      setData({
        displayName: "",
        categoryId: "",
      })
    }
  }
  return (
    <div className="AddNewItemPage">
      <HeaderTitle title="הוספת מוצר" />
      <div className="main">
        <div className="containerInput">
          <Input
            placeholder="שם מוצר"
            value={data.displayName}
            onChange={(e) => {
              setData({ ...data, displayName: e.target.value });
            }}
          />
        </div>
        <CategoriesContainer
          categorySelected={data.categoryId}
          setCategorySelected={(val) => {
            setData({ ...data, categoryId: val });
          }}
        />
        <button
          onClick={saveNewItemData}
          className="submitBtn"
        > הוסף מוצר חדש</button>
      </div>
    </div>
  );
};
