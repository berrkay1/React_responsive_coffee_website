import React from 'react'
import {Link} from 'react-router-dom'; 
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="header">
        <a className='logo' href="#">
          <img src={logo} alt="logo" />
        </a>


        <nav className="navbar">
          <Link to='/'>home</Link>
          <a href="">about</a>
          <Link to='menu' href="">menu</Link>
          <a href="">products</a>
          <a href="">review</a>
          <a href="">contact</a>
          <a href="">blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search"></div>
          <Link to='sepet'> <div className="fas fa-shopping-cart"></div> </Link>
          <div className="fas fa-bars"></div> 
        </div>


      </header>
  )
}

export default Header