<<<<<<< Updated upstream
=======
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import ItemListContainer from "./Components/ItemListCointainer";
>>>>>>> Stashed changes
import NavBar from "./Components/NavBar";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
<<<<<<< Updated upstream
    <div>
      <NavBar/>
    </div>
=======
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>        
      </BrowserRouter>
    </> 

>>>>>>> Stashed changes
  );
}

export default App;
