import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import About from './Pages/Products';
import Analytics from './Pages/Analytics';
import Products from './Pages/Products';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/settings' exact element={<Settings />}></Route>
        <Route path='/analytics' exact element={<Analytics />}></Route>
        <Route path='/products' exact element={<Products />}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
