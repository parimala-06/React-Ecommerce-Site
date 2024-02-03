
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import ShopContextProvider, { ShopContext } from './Context/ShopContext';
import { useContext } from 'react';
import Display from './Pages/Display';
import Goodness from './Pages/Goodness';


function App() {
  const {allProducts} = useContext(ShopContext);
  return (
    <div>
    <BrowserRouter>
    <ShopContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Shop/>}/>
      <Route path='/goodness' element={<Goodness/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/product' element = {<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/login' element = {<LoginSignUp/>}/>
    </Routes>
    <Footer/>
    </ShopContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
