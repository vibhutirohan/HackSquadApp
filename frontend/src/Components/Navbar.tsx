import React from 'react'
import {NavLink} from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'
import { RootState } from '../redux/store'
export const Navbar = () => {

    const isAuth=useSelector((store:RootState)=>store.authReducer.isAuth)
    const user=useSelector((store:RootState)=>store.authReducer.user)
    // user added in reducer
    console.log(user);
  return (
    <nav className="bg-custom-blue shadow-xl  p-5 flex justify-evenly">
      <div className='m-auto'>
      <NavLink to='/' className="text-custom-teal  text-xl font-semibold ">PrepInterview</NavLink>
      </div>
      <div>
      
      {isAuth && <NavLink to='/history' className="mr-3 bg-white p-2 md:rounded-xl">history</NavLink>}
      </div>
      <div className='pr-3'>
      {isAuth?<NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/'><span className='mr-3 bg-white p-2 md:rounded-xl'>{user.name}</span>  Logout</NavLink>:
      <NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/login'>Login</NavLink>
      }
      </div>
  </nav>
  )
}
