import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Categories from '../Categories/Categories'

const Header = () => {
  const productPage = useNavigate()
  const handleProduct = () => {
    productPage('/products')
  }
  return (
    <div>
      <Navbar />
      <div className='header'>
        <div className='header-container'>
          <div className='header-main'> <h1>Exclusive Collection</h1>
            <button onClick={handleProduct}>Explore Us!</button>
          </div>
        </div>
      </div>
      <Categories />
    </div>
  )
}

export default Header
