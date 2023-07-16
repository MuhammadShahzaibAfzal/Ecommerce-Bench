import React from 'react';
import { Routes , Route } from 'react-router-dom';
import TopBar from './components/common/TopBar';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Amazon from './pages/Services/Amazon';
import Ebay from './pages/Services/Ebay';
import Shopify from './pages/Services/Shopify';
import Walmart from './pages/Services/Walmart';
import Etsay from './pages/Services/Etsay';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import GraphicDesigning from './pages/Services/GraphicDesigning';

const App = () => {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/amazon' element={<Amazon/>}/>
            <Route path='/ebay' element={<Ebay/>}/>
            <Route path='/shopify' element={<Shopify/>}/>
            <Route path='/walmart' element={<Walmart/>}/>
            <Route path='/etsy' element={<Etsay/>} />
            <Route path='/digital-marketing' element={<DigitalMarketing/>} />
            <Route path='/graphic-designing' element={<GraphicDesigning/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App