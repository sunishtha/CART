import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ListItemProvider } from './context/ListItemContext';
import {CartContextProvider} from './context/CartContecxt'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ListItemProvider>
    <CartContextProvider>
      <BrowserRouter>
        <ChakraProvider>
 
          <App />
             
        </ChakraProvider>
      </BrowserRouter>
</CartContextProvider>
</ListItemProvider>


   </React.StrictMode>
);


