import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Pages/HomePage';
import {  CategoryPage } from '../Pages/CategoryPage';
import Dashboard from '../Components/Dashboard';

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/category' element={<CategoryPage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
    </div>
  )
}
