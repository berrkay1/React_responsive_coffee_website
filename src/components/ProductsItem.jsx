import React from 'react'
import '../components/ProductsItem.css';
import { useContext } from 'react';
import ContextCoffeeApi from './ContexCoffee';


function ProductsItem({ item }) {

    const { FromProductaddToBasket } = useContext(ContextCoffeeApi);

    return (
        <div className='productİtem'>
            <img src={item.image} alt="productpicture" />

            <div className="info">
                <h3 className='title'>{item.name}</h3>
                <div className="desc-price">
                    <p>{item.description}</p>
                    <div className="price">${item.price}</div>
                </div>
            </div>
            <button onClick={()=>FromProductaddToBasket(item)} className='addbasket' type='submit'>Add Basket</button>
        </div>
    )
}

export default ProductsItem