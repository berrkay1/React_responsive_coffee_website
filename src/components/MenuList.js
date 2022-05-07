import React from 'react'
import MenuItem from './MenuItem'
import '.././components/MenuListStyle.css';
import ContextCoffeeApi from './ContexCoffee';
import { useContext } from 'react';

function MenuList() {

  const { menuData,input } = useContext(ContextCoffeeApi);
  

  return (
    
    <div className="menuList">
      <ul className='list'>
        {menuData.filter(val=> val.name.toLowerCase().includes(input.toLowerCase()))
        .map((item) => (
          <li><MenuItem menu={item}  key={item.id} /></li>
        )) }
      </ul>
    </div>
  )
}

export default MenuList