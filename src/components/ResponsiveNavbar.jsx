import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import ContextCoffeeApi from './ContexCoffee';
import { useContext } from 'react'


function ResponsiveNavbar() {

  const { setOpenResBar, openResBar } = useContext(ContextCoffeeApi);

  return (
    <div>
      {openResBar &&
        <div className="res-navbar">

          <div
            style={{ textAlign: 'right', width: "100%", marginBottom: '10px', color: 'beige' }}
            onClick={() => setOpenResBar(false)} >
            <i
              style={{  color: 'beige' }}
              className="fa-solid fa-x">

            </i>
          </div>

          <div className='responsive-navbar'>
            <Link to='/'>home</Link>
            <Link to='menu' >menu</Link>
            <Link to='products'>products</Link>
            <Link to='contact'>contact</Link>
          </div>

        </div>
      }

    </div>

  )
}

export default ResponsiveNavbar