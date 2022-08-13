import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
