import React, { useContext } from 'react'
import '../components/MenuItemStyle.css';
import ContextCoffeeApi from './ContexCoffee';

function MenuItem({menu}) {

    const { AddtoBasket } = useContext(ContextCoffeeApi);

    return (
        <div className='menuİtem'>
            <h1 className='title'>{menu.name}</h1>

            <div className="info">
                <img src={menu.image} alt="menupicture" />
                <div className="desc-price">
                    <p>{menu.description}</p>
                    <div className="price">${menu.price}</div>
                </div>
            </div>
            <button  onClick={()=>AddtoBasket(menu)} type='submit'>Add Basket</button>
        </div>
    )
}

export default MenuItem