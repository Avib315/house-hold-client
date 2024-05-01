import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { CreateNewList } from './pages/CreateNewList/createNewList';
import { AddNewItem } from './pages/AddNewItems/addNewItem';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AddNewItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
