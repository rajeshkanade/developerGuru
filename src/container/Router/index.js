import React from 'react'
import Home from '../Home';
import About from '../About';
import Services from '../Services'
import ContactUs from '../ContactUs';
import Portfolio from '../Portfolio';
import {Routes, Route} from 'react-router-dom';
import StudentFullDetails from '../pages/StudentFullDetails';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path='/StudentFullDetails' element={<StudentFullDetails/>}></Route>
    </Routes>
  )
}

export default Router

