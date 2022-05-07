import React from 'react'
import '../components/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='home'>
        <div className="content">
            <h3>fresh coffee in the morning</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid ad atque beatae officiis ea omnis, laudantium vel at quibusdam enim hic corporis vitae sed quisquam deserunt non reiciendis.</p>
            <Link to='menu'>get yours now</Link>
        </div>
    </section>
  )
}

export default Home