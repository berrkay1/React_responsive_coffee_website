import './App.css';
import {Link} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <header className="header">
        <a className='logo' href="#">
          <img src="./images/logo.png" alt="logo" />
        </a>


        <nav className="navbar">
          <a href="">home</a>
          <a href="">about</a>
          <a href="">menu</a>
          <a href="">products</a>
          <a href="">review</a>
          <a href="">contact</a>
          <a href="">blogs</a>
        </nav>

        <div className="icons">
          <div className="fas fa-search"></div>
          <div className="fas fa-shopping-cart"></div>
          <div className="fas fa-bars"></div>
        </div>


      </header>
    </div>
  );
}

export default App;
