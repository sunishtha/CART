import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "../reducer/product-reducer";
export const ProductContext=createContext();


export const ProductContextProvider=({children})=>{
    const [
        { sortby, priceRange,cart,qty },
        dispatch
      ] = useReducer(reducerFunc, {
        sortby: null,
        priceRange: 10000,cart:[],qty:1
      });

   return <ProductContext.Provider value={{sortby,priceRange,dispatch,cart,qty}}>
    {children}
   </ProductContext.Provider>
}

export const useProductContext = () => useContext(ProductContext);