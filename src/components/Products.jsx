import React, { useState } from 'react'
import ContextCoffeeApi from './ContexCoffee';
import { useContext } from 'react';
import ProductsItem from './ProductsItem';
import '../components/Products.css';

function Products() {

  const { ProductData } = useContext(ContextCoffeeApi);

  const [input, setInput] = useState('');
  const [modal, setModal] = useState(false)


  return (
    <div className='products' style={{ color: 'beige' }}>
      <div className="products-header">
        <h2  >Coffee Products</h2>
        <div onClick={() => setModal(true)} className='search-icon'><i className="fas fa-search"></i></div>
      </div>

      {modal &&
        <div className="input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onChange={(e) => setInput(e.target.value)} >
          <input type="text" placeholder='Products...' />
          <div onClick={() => setModal(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i style={{ marginBottom:10, color: 'beige', fontSize: 20 }} class="fa-solid fa-x"></i>
          </div>
        </div>
      }

      <ul className="products-list" >
        {ProductData.filter(val => val.name.toLowerCase().includes(input))
          .map(item => (
            <li key={item.id}><ProductsItem item={item} /></li>
          ))}
      </ul>

    </div>
  )
}

export default Products