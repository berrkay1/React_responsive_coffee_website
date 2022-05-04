import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function ResponsiveNavbar() {

    

  return (
    <div className="responsive-navbar">
        <Link to='/'>home</Link>
        <Link to='menu' >menu</Link>
        <Link to='products'>products</Link>
        <Link to='contact'>contact</Link>
    </div>
  )
}

export default ResponsiveNavbar