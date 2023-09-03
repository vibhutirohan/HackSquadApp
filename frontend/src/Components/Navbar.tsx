import React from 'react'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-custom-blue shadow-xl  p-5 flex justify-evenly">
      <div className='m-auto'>
      <NavLink to='/' className="text-custom-teal  text-xl font-semibold ">PrepInterview</NavLink>
      </div>
      <div className='pr-3'>
      <NavLink className="text-custom-teal hover:font-bold text-md font-semibold" to='/login'>Login</NavLink>
      </div>
  </nav>
  )
}
