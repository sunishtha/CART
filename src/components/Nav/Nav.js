import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import {
    Box ,Text
} from '@chakra-ui/react'
import { LoginContext } from '../../context/LoginContext'


export default function Nav() {
    const {email}=useContext(LoginContext)
    return (
 <>
        <div className='nav-container-inside'

        >

            
            <Box p={7} flexDirection={'row'} >
     

                <NavLink end to='/home' className="link" >
                 HOME 
                </NavLink>

                

                <NavLink end to='/cart' className="link" >
                CART 
                </NavLink>
                <NavLink end to='/products' className="link" >
                PRODUCTS
                </NavLink>
                <NavLink end to='/wishlist' className="link" >
                WISHLIST
                </NavLink>
                

                
               

            </Box>
            <Box padding={5} gap={3} display={'flex'} alignItems={'center'} justifyContent={'center'} p={1} bgColor={'pink'}>
                
                <Text   color={'blue.400'} fontSize='md'>  Logged in as: 
                </Text>
                <Text textTransform={'uppercase'}  color={'white'} fontSize='md'>  {email}
                </Text>
            </Box>
            
        </div><br/>
         
        
        </>
    )
}