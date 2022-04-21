import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import ContextCoffeeApi from './ContexCoffee';



function Header() {

  const {sepet} = useContext(ContextCoffeeApi);

  const sepetCount = sepet.reduce((top,item) => (top = top+item.count),0)
 

  return (



    <header className="header">
      <a className='logo' href="#">
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </a>


      <nav className="navbar">
        <Link to='/'>home</Link>
        <Link to='menu' >menu</Link>
        <Link to='products'>products</Link>
        <a >review</a>
        <a >map</a>

      </nav>

      <div className="icons">
        <div className="fas fa-search"></div>
        <Link  to='sepet'>
          <div className="fas fa-shopping-cart"></div>
        </Link>
        <div className="fas fa-bars"></div>
      </div>

      <span  className='basket-count'>{sepetCount}</span>
      


    </header>
  )
}

export default Header