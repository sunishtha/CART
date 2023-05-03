import React from 'react'
import MainPage from '../MainPage/MainPage'
import Footer from '../Footer/Footer'
import Nav from '../../components/Nav/Nav'
import InfoPage from '../InfoPage/InfoPage'


const Home = () => {
  return (
    <div>
     <Nav/>
      <MainPage/>
      <InfoPage/>
      <Footer/>
    </div>
  )
}

export default Home;
