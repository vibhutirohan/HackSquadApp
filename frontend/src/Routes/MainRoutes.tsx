import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Pages/HomePage';
import {  CategoryPage } from '../Pages/CategoryPage';
import Dashboard from '../Components/Dashboard';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Feedback from '../Components/Feedback';
import History from '../Components/History';


export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/category' element={<CategoryPage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignupPage />}></Route>
            <Route path='/feedback' element={<Feedback />}></Route>
            <Route path='/history' element={<History />}></Route>


        </Routes>
    </div>
  )
}
