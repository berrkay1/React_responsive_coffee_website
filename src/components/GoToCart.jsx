import React, { useState } from 'react'
import '../components/GoToCart.css';



function GoToCart() {

  const [cart,setCart] = useState('');
  const [cvc,setCvc] = useState('');
  const [date,setDate] = useState('');
  
  const hanndleSubmit = ()=>{
    if(cart === ''){
      alert('bos alan bırakmayın!')
    }else if (cvc === ''){
      alert('bos alan bırakmayın!')
    }else if (date === ''){
      alert('bos alan bırakmayın!')
    }
    else{
      alert('Tebrikler! siparişiniz başarıyla oluşturuldu.')
     
    }
  }
  

  return (
    <div className='gotocart' style={{ color: 'beige' }}>
      <h1>complete the shopping</h1>
      <div className="form-card" >
        <input 
        value={cart} 
        onChange={(e)=>setCart(e.target.value)} type="number" 
        placeholder='Cart Number' 
        />
        <input  
        value={cvc} 
        onChange={(e)=>setCvc(e.target.value)} type="number" 
        placeholder='cvc' 
        />
        <input  
        value={date} 
        onChange={(e)=>setDate(e.target.value)} type="date" 
        placeholder='cart date' 
        />
        <button onClick={hanndleSubmit} type='click' className='gotocard-btn' >Submit</button>
      </div>
    </div>
  )
}

export default GoToCart