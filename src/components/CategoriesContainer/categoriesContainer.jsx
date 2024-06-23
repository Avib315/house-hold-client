import React, { useEffect, useState } from "react"
import "./categoriesContainer.css"
import { axiosReq } from "../../functions/webApi"
export const CategoriesContainer = ({ categorySelected = "", setCategorySelected }) => {
    const [categories, setCategories] = useState([])

    const getData = async () => {
        const res = await axiosReq({ method: "GET", url: "categories/get-categories" })
        setCategories(res)
    }
    useEffect(() => {
        getData()
    }, [])
    const selectCategoryHandler = (id) => {
        setCategorySelected(categorySelected === id ? '' : id);
    };
    return <div className="CategoriesContainer">
                    {categories.map((e, i) => (
                        <div className={`btnNameContainer ${categorySelected === e._id ? 'selectedCategory' : ''}`} key={`cnp-categories-${i}`}>
                            <button
                                className={`categoriesBtn categories-${e.categoryIcon} `}
                                onClick={() => {
                                    selectCategoryHandler(e._id);
                                }}
                            ></button>
                        </div>
                    ))}
                </div>
} 