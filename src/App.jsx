import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';

function App() {

  return (
    <>
      <BrowserRouter>
          <CartProvider>
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
          </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
