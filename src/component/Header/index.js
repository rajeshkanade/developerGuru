import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { NavLink  ,useLocation as location} from 'react-router-dom'
const Header = () => {
  return (
    <>
        <header>
            <h1 className="heading">Developer Guru</h1>
            <ul>
                <li><NavLink exact to="/"  >
              Home
            </NavLink></li>
                <li><NavLink to="/About" >About</NavLink></li>
                <li><NavLink to="/Services" >Services</NavLink></li>
                <li><NavLink to="/ContactUs" >Contact Us</NavLink></li>
                <li><NavLink to="/Portfolio" >Portfolio</NavLink></li>
                <li><NavLink to="/Navigate" >Navigate</NavLink></li>
                <li><NavLink to="/Blog" >Blog</NavLink></li>
                <button className='btn'>Log In</button>
            </ul>
        </header> 
    </>
  )
}

export default Header
