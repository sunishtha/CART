import Login from './pages/Login/Login';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import WishList from './pages/WishList/WishList';
import Products from './pages/Product/Products';
import ListItems from './pages/ListItems/ListItems';



function App() {
  return (
    <div className="App"> 
    
      <Routes>
       
           <Route path='/' element={<Login/>}/>
        
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/listitems' element={<ListItems/>}/>
    
      </Routes>
    
    </div>
  );
}

export default App;
