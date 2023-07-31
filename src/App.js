import './App.css'
import Header from '../src/components/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/products' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
       
      </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
