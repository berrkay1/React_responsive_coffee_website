import React from 'react'
import MenuList from './MenuList'

function Menu() {


  return (
    <>
        <div className="form">
            <input className='search-form' type="text" placeholder='search coffe' />
        </div>

        <MenuList/>
    </>
  )
}

export default Menu