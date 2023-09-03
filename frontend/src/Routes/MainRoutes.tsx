import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Pages/HomePage';
import {  CategoryPage } from '../Pages/CategoryPage';
import Dashboard from '../Components/Dashboard';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Feedback from '../Components/Feedback';
import PrivateRoute from './PrivateRoute';


export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/category' element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
            }></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/signup' element={<SignupPage />}></Route>
            <Route path='/feedback' element={<Feedback />}></Route>

        </Routes>
    </div>
  )
}
