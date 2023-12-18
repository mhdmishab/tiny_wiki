import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import ContentPage from '../pages/ContentPage';

function WikiRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
        <Route path='/content' element={<ContentPage/>}></Route>
    </Routes>
  )
}

export default WikiRoute