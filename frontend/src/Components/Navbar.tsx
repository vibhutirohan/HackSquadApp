import React from 'react'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-custom-blue shadow-xl  p-5 text-center ">
    
      <NavLink to='/' className="text-custom-teal  text-xl font-semibold text-center">PrepInterview</NavLink>
  
  </nav>
  )
}
