import {createContext} from 'react'

export const ListItemContext=createContext({});

export const ListItemProvider=({children})=>{
    <ListItemContext.Provider>
        {children}
    </ListItemContext.Provider>
}