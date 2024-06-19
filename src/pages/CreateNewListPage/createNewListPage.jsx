import React, { useEffect, useState } from 'react';
import './createNewListPage.css';
import { Input } from '../../components/Input/input';
import { axiosReq } from '../../functions/webApi';
import HeaderTitle from '../../components/HeaderTitle/headerTitle';
import { useUserInfo } from '../../functions/UserInfoContext';
import { CategoriesContainer } from '../../components/CategoriesContainer/categoriesContainer';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

export const CreateNewListPage = () => {
    const { userInfo, setUserInfo } = useUserInfo();
    const [categorySelected, setCategorySelected] = useState('');
    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const getItems = async () => {
        const res = await axiosReq({ method: 'POST', url: 'items/get-items', body: { categoryId: categorySelected } , withCredentials: true }) ;
        const filteredItems = getDisplayItems(res, userInfo.itemsSelected);
        setItems(filteredItems);
    };

    useEffect(() => {
    
        getItems();
    }, [categorySelected, userInfo.itemsSelected]);

    const toggleSelectItem = (id) => {
        const updatedSelectedItems = userInfo.itemsSelected.includes(id) ? userInfo.itemsSelected.filter((itemId) => itemId !== id) : [...userInfo.itemsSelected, id];
        setUserInfo({ ...userInfo, itemsSelected: updatedSelectedItems });
    };

    function getDisplayItems(items, selectedItems) {
        const selectedSet = new Set(selectedItems);
        return items.map((item) => ({
            ...item,
            selected: selectedSet.has(item._id),
        }));
    }

    return (
        <div className="createNewListPage">
            <HeaderTitle title={'רשימה חדשה'} />
            <div className="main">
                <div className="inputBtnContainer">
                    <div className="containerInput">
                        <Input placeholder={'חיפוש מוצר'} />
                        <div className='searchIcon'>
                            <CiSearch />
                        </div>
                    </div>
                    <NavLink to="view-list">  הצג רשימה    </NavLink>
                </div>
                <CategoriesContainer categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
                <div className="itemContainer">
                    {items.map((e) => (
                        <button
                            className={`itemsButton${e.selected ? ' buttonSelected' : ''}`}
                            onClick={() => toggleSelectItem(e._id)}
                            key={e._id}
                        >
                            {e.displayName}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
};
