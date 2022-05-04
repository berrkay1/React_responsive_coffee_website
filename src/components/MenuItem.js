import React, { useContext } from 'react'
import '../components/MenuItemStyle.css';
import ContextCoffeeApi from './ContexCoffee';

function MenuItem({ menu }) {

    const { AddtoBasket } = useContext(ContextCoffeeApi);

    return (
        <div className='menuİtem'>
            <img src={menu.image} alt="menupicture" />

            <div className="info">
                <h3 className='title'>{menu.name}</h3>

                <div className="desc-price">
                    <p>{menu.description}</p>
                    <div className="price">${menu.price}</div>
                </div>
            </div>
            <button className='addbasket' onClick={() => AddtoBasket(menu)} type='submit'>Add Basket</button>
        </div>
    )
}

export default MenuItem