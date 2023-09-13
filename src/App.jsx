import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import './main.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { DetailsItemContainer } from './components/DetailsItemContainer/DetailsItemContainer';
import { ItemListContainer } from './components/ItemListContainer2/ItemListContainer2';
import { NotFound } from './pages/404/NotFound';
import { Cart } from './pages/Cart/Cart';

function App() {
  return (
    <>
    <Router>
        <NavBar title="Logo" />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/products' element={ <ItemListContainer /> } />
        <Route path='/category/:category' element={ <ItemListContainer/> } />
        <Route path='/item/:id' element={ <DetailsItemContainer/> } />
        <Route path='/cart' element={ <Cart /> } />
        
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
    </>
  );
};

export default App;