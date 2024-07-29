import React from 'react'
import Home from '../Home';
import About from '../About';
import Services from '../Services'
import ContactUs from '../ContactUs';
import Portfolio from '../Portfolio';
import {Routes, Route} from 'react-router-dom';
import Blog from '../Blog';
import StudentFullDetails from '../StudentFullDetails';
import Navigate from '../Navigate';
import Student_details from '../../../component/Student_details';
import ApiCalling from '../ApiCalling';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path='/Navigate' element={<Navigate/>}/>
      <Route path="/Student_details" element={<Student_details/>}/>
      <Route path='/StudentFullDetails/:id' element={<StudentFullDetails/>}></Route>
      <Route path='/ApiCalling' element={<ApiCalling/>}></Route>

    </Routes>
  )
}

export default Router

