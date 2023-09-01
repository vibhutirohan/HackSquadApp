import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Pages/HomePage';
import {  CategoryPage } from '../Pages/CategoryPage';

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/category' element={<CategoryPage />}></Route>
        </Routes>
    </div>
  )
}
