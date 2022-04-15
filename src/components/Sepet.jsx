import React, { useContext } from 'react'
import ContextCoffeeApi from './ContexCoffee'

function Sepet() {

    const {sepet} = useContext(ContextCoffeeApi);
    
    console.log(sepet);
  return (
    <div className='sepet'>
        <h1>Sepetim</h1>

        {sepet.map((item)=>(
            <div key={item.id} className="sepetDiv">
               <img src={item.image} alt="sepetimage" /> 
               <div className="sepet-info">
                   <h4>{item.name}</h4>
                   <p>{item.description}</p>
                   <p>${item.price}</p>
               </div>
            </div>
        ))}

       

    </div>
  )
}

export default Sepet