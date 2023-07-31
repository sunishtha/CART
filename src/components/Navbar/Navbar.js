import React from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart,AiFillHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import logo from '../../images/a.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <div className='navbar-container'>
       <div className='nav-img'><img src={logo} alt='..' /></div> 
      
        <div className='nav-content'>
        <p>Home</p>
        <p>Explore</p>
         <div className='nav-icons'>
          
          <AiFillHeart/>
          <NavLink to='/cart'> <AiOutlineShoppingCart /></NavLink>
          <CgProfile />
         </div>
         </div>
      </div>
     
    </div>
  )
}

export default Navbar
