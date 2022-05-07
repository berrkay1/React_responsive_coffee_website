import React, { useContext } from 'react'
import ContextCoffeeApi from './ContexCoffee'
import '../components/SepetStyle.css';
import {Link} from 'react-router-dom';

function Sepet() {

    const { sepet,artir,azalt,deleteItem } = useContext(ContextCoffeeApi);

    const totalPrice = sepet.reduce((top,item)=> (top = top + item.count*item.price),0)

    
    console.log(sepet);

    return (
        <div className='sepet'>
            
            
            <div className="sepet-container">
            <h1>My Basket</h1>

            {sepet.map((item) => (
                <div key={item.id} className="sepet-cart">
                    <img src={item.image} alt="sepetimage" />
                    <div className="sepet-info">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p className='price'>Price : ${item.price}</p>

                    </div>
                    <div className="buttons">
                        <button type='button'  onClick={()=>artir(item.id)} >+</button>
                        <div className='count'>{item.count}</div>
                        <button type='button' onClick={()=>azalt(item.id)} >-</button>
                    </div>
                    <div onClick={()=>deleteItem(item.id)}><i class="fa-solid fa-trash-can"></i></div>
                </div>


            ))}
            </div>
            

            <div className="total-cart">
                <h2>Basket summary</h2>
                <div className='total'>
                    <span>Toplam price : $ {totalPrice}</span>
                   < Link  to='/goCart'><button style={{width:'100%'}}>Go to Cart</button></Link> 
                </div>
             
            </div>

            

        </div>
    )
}

export default Sepet