import React ,{createContext, useState} from "react";

export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [cartData,setCartData]=useState([])
    return (
        <CartContext.Provider value={{cartData,setCartData}}>
  {children}
        </CartContext.Provider>
    )
}