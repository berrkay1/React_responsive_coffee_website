import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Sepet from './components/Sepet';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import {useContext} from 'react';
import ContextCoffeeApi from './components/ContexCoffee';
import GoToCart from './components/GoToCart';


function App() {

  const {openResBar} = useContext(ContextCoffeeApi);

  return (
    <div className="App">
      <Router>
      <Header/>
      {openResBar && <ResponsiveNavbar/>}
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='contact' element={<Contact/> }/>
          <Route path='basket' element={<Sepet/>}/>
          <Route path='/goCart' element={<GoToCart/>}/>
        </Routes>
       
      
      </Router>

    </div>
  );
}

export default App;
