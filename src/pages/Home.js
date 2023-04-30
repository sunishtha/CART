import React from 'react'
import MainPage from './MainPage'
import Footer from './Footer'
import Nav from '../components/Nav/Nav'
// import Search from '../pages/Search.js'

const Home = () => {
  return (
    <div>
     <Nav/>
     {/* <Search/> */}
      <MainPage/>
      <Footer/>
    </div>
  )
}

export default Home;
