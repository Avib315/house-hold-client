// App.jsx
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CreateNewListPage } from './pages/CreateNewListPage/createNewListPage';
import { AddNewItemPage } from './pages/AddNewItems/addNewItemPage.jsx';
import HomePage from './pages/HomePage/homePage';
import NavBar from './components/NavBar/navBar';
import ShowListsPage from './pages/ShowListsPage/showListsPage';
import { UserInfoProvider } from './functions/UserInfoContext.jsx';
import UserPage from './pages/UserPage/userPage.jsx';
import ListViewerPage from './pages/ListViewerPage/listViewerPage.jsx';
import LoginPage from './pages/LoginPage/loginPage.jsx';
import RegisterPage from './pages/RegisterPage/registerPage.jsx';
import ProtectedRout from './functions/ProtectedRout.jsx';
import EditItems from './pages/EditItems/editItems.jsx';

function App() {
  return (
    <div className='App'>
      <UserInfoProvider>

        <Routes>
          <Route path='/*' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<ProtectedRout element={<HomePage />} />} />
          <Route path='/new-list' element={<ProtectedRout element={<CreateNewListPage />} />} />
          <Route path='/new-list/view-list' element={<ProtectedRout element={<ListViewerPage />} />} />
          <Route path='/lists' element={<ProtectedRout element={<ShowListsPage />} />} />
          <Route path='/recipes' element={<ProtectedRout element={<CreateNewListPage />} />} />
          <Route path='/setting' element={<ProtectedRout element={<UserPage />} />} />
          <Route path='setting/edit-items' element={<ProtectedRout element={<EditItems />} />} />
          <Route path='/new-items' element={<ProtectedRout element={<AddNewItemPage />} />} />
        </Routes>
      </UserInfoProvider>
    </div>
  );
}

export default App;
