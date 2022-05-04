import React from 'react'
import MenuList from './MenuList'
import '../components/Menu.css';
import ContextCoffeeApi from './ContexCoffee';
import { useContext, useState } from 'react';

function Menu() {

  const { input, setInput } = useContext(ContextCoffeeApi);
  const [modal, setModal] = useState(false)

  return (
    <div className='menu'>
      <div className="menu-header">
        <h3>Menu</h3>
        <div onClick={() => setModal(true)} className='search-icon'><i className="fas fa-search"></i></div>
      </div>
    {modal && <div className="menu-input">
    <input className='search-form' onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='search coffe...' />
    <div onClick={() => setModal(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i style={{ marginTop:10, color: 'beige', fontSize: 20 }} class="fa-solid fa-x"></i>
          </div>
    </div>}
      

      <MenuList />
      </div>
  )
}

export default Menu