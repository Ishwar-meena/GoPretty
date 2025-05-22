import { useState } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import BestSell from './components/BestSell'
import TopBrands from './components/TopBrands'
import NewArrivals from './components/NewArrivals'
import Footer from './components/Footer'


function App() {
 
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar/>
    <MainSection/>
    <BestSell/>
    <TopBrands/>
    <NewArrivals/>
    </div>
    <Footer/>
    </>
  )
}

export default App
