import "./addNewItem.css";
import React, { useState } from "react";
import { Input } from "../../components/Input/input.jsx";
import { CategoriesContainer } from "../../components/CategoriesContainer/categoriesContainer.jsx";

export const AddNewItem = ({}) => {
  const [data, setData] = useState({
    name: "",
    categoryIcon: "",
  });

  return (
    <div className="AddNewItem">
      <div className="container">
        <Input
          placeholder="שם מוצר"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <CategoriesContainer
          selectedValue={data.categoryIcon}
          setSelectedValue={(val) => {
            setData({ ...data, categoryIcon: val });
          }}
        />
      </div>
    </div>
  );
};
