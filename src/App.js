import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Routes>
          <Route path='menu' element={<Menu/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
