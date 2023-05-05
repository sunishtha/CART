import {createContext,  useState} from 'react'

export const ListItemContext=createContext();

export const ListItemProvider=({children})=>{
    const [wishListData,setWishListData]=useState([])
   return <ListItemContext.Provider value={{wishListData,setWishListData}} >
        {children}
    </ListItemContext.Provider>
}

