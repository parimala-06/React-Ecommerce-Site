
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop.js';
import Product from './Pages/Product.js';
import Cart from './Pages/Cart.js';
import LoginSignUp from './Pages/LoginSignUp.js';
import ShopContextProvider from './Context/ShopContext.js';
import Display from './Pages/Display.js';
import Goodness from './Pages/Goodness.js';


function App() {
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
