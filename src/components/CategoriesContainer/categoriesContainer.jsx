import React, { useEffect, useState } from "react"
import "./categoriesContainer.css"
import { axiosReq } from "../../functions/webApi"
export const CategoriesContainer = ({ selectedValue, setSelectedValue }) => {
    const [categories, setCategories] = useState([])
    const getData = async () => {
        const res = await axiosReq({ method: "GET", url: "categories/get-categories" })
        setCategories(res)
    }
    useEffect(() => {
        getData()
    }, [])
    return <div className="CategoriesContainer">
        {categories.map((e, i) => (
            <button
                key={"categories" + i}
                onClick={()=>{setSelectedValue(e.categoryIcon)}}
                className={`categoryBtn${selectedValue === e.categoryIcon ? " selected-btn" :""}`}>
                {e.name}
            </button>))}
    </div>
} 