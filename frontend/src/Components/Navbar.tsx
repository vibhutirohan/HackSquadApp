import React from 'react'
import {NavLink} from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'
import { RootState } from '../redux/store'
export const Navbar = () => {

    const isAuth=useSelector((store:RootState)=>store.authReducer.isAuth)
    const user=useSelector((store:RootState)=>store.authReducer.user)
  return (
    <nav className="bg-custom-blue shadow-xl  p-5 flex justify-evenly">
      <div className='m-auto'>
      <NavLink to='/' className="text-custom-teal  text-xl font-semibold ">PrepInterview</NavLink>
      </div>
      <div className='pr-3'>
      {isAuth?<NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/'>Logout</NavLink>:
      <NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/login'>Login</NavLink>
      }
      </div>
  </nav>
  )
}
