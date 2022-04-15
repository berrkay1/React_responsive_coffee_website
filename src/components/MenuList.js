import React from 'react'
import MenuItem from './MenuItem'
import '.././components/MenuListStyle.css';
import ContextCoffeeApi from './ContexCoffee';
import { useContext } from 'react';

function MenuList() {

  const { menuData } = useContext(ContextCoffeeApi);


  
  

  return (
    
    <div className="menuList">
      <ul>
        {menuData.map((item) => (
          <li><MenuItem menu={item}  key={item.id} /></li>
        )) }
      </ul>
    </div>
  )
}

export default MenuList