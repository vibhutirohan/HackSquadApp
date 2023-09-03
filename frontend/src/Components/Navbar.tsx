import React, { Dispatch } from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Logout } from '../redux/authReducer/action';
export const Navbar = () => {
    const navigate=useNavigate()
    const dispatch:Dispatch<any>=useDispatch()
    const isAuth=useSelector((store:RootState)=>store.authReducer.isAuth)
    const user=useSelector((store:RootState)=>store.authReducer.user)
  
    console.log(isAuth,user)

    const handleLogout = () => {
      console.log("Logout");
      dispatch(Logout());
      navigate("/");
      
    };

  return (
    <nav className="bg-custom-blue shadow-xl  p-5 flex justify-evenly">
      <div className='m-auto'>
      <NavLink to='/' className="text-custom-teal  text-xl font-semibold ">PrepInterview</NavLink>
      </div>
      <div className='pr-3'>
      {isAuth?<NavLink onClick={handleLogout}  className="text-custom-teal hover:font-bold text-md font-semibold" to='/'>Logout</NavLink>:
      <NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/login'>Login</NavLink>
      }
      </div>
  </nav>
  )
}
