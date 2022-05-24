import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import ItemListContainer from "./Components/ItemListCointainer";
import NavBar from "./Components/NavBar";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>        
      </BrowserRouter>
    </> 

  );
}

export default App;
