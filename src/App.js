import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Sepet from './components/Sepet';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      
        <Routes>
          <Route path='menu' element={<Menu/>}/>
          <Route path='sepet' element={<Sepet/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
