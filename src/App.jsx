import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element ={ <ItemListContainer/> } />
          <Route path='/category/:categoryId' element ={ <ItemListContainer/> } />
          <Route path='/item-detail/:detailId' element ={ <ItemDetailContainer/> } />
          <Route path='/my-order' element ={ <ItemListContainer/> } />
          <Route path='/cart' element ={ <Cart/> } />
          <Route path='/login' element ={ <ItemListContainer/> } />
          <Route path='*' element ={ <ItemListContainer/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
