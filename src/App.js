import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Sepet from './components/Sepet';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='sepet' element={<Sepet/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
