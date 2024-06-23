import React from 'react';
import './homePage.css';
import { NavLink } from 'react-router-dom';
import HeaderTitle from '../../components/HeaderTitle/headerTitle';
const HomePage = ({ }) => {
    return (
        <div className='homePage'>
        <HeaderTitle title="אשף קניות" />
            <div className='navContainer'>
            <NavLink to={"/new-list"} className={"navBtn primeBg"}>רשימה חדשה</NavLink>
            <NavLink to={"/lists"} className={"navBtn primeBg"}>רשימות </NavLink>
            </div>
        </div>
    );
};

export default HomePage;