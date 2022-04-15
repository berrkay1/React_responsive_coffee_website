import React, { useState } from 'react'
import MenuItem from './MenuItem'
import {data} from '../MenuData';
import '.././components/MenuListStyle.css';

function MenuList() {
  const [state,setState] = useState({
    menuData:data,
    sepet:[]
  });
  


  
  const AddtoBasket = (coffe) => setState({
    ...state,
    sepet: state.sepet.find(coffeItem => coffeItem.id === coffe.id) ? state.sepet.map(coffeItem => coffeItem.id === coffe.id ? {...coffeItem ,count:coffeItem.count +1 } : coffeItem  )
    : [...state.sepet, {...coffe, count:1}] 
  });

  console.log(state.sepet);

  return (
    
    <div className="menuList">
      <ul>
        {state.menuData.map((item,idx) => (
          <li><MenuItem sepet={state.sepet} AddtoBasket={AddtoBasket} menu={item} key={idx} /></li>
        )) }
      </ul>
    </div>
  )
}

export default MenuList