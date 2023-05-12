import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios'
import { Grid, Image, Text, GridItem, Button,  Box, Spacer } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
import Nav from '../../components/Nav/Nav';
import { ListItemContext } from '../../context/ListItemContext';
import { CartContext } from '../../context/CartContecxt';
import './ListItems.css'
 

export default function ListItems() {

  const wishlistPage=useNavigate();
  const cartPage=useNavigate();
  const [list, setList] = useState([]);


const {wishListData,setWishListData}=useContext(ListItemContext);
const {cartData,setCartData}=useContext(CartContext)

  async function getProduct() {
   const res=await axios.get('https://fakestoreapi.com/products')

  setList(res.data);
  
  }
  useEffect(() => {
    getProduct();

  }, [])

  const addToWishList=(listItem)=>{ 
      setWishListData((data)=>
        [...data,listItem]
      )
      console.log(listItem)
    wishlistPage('/wishlist')
  }

  const addToCartHandle=(listItem)=>{
    setCartData((data)=>
    [...data,{...listItem,quantity:1,totalPrice:Number(listItem?.price)}]
  )
  console.log(listItem)
  cartPage('/cart')
  }

  
  

  return ( 
  <>
  <Nav/>  
     
      <Text fontSize={'3xl'} p={1} color={'pink.400'}>
       EXPLORE US!!
      </Text>
       <Box   display={'flex'} >
    <Grid  className='list-item-container'p={5} templateColumns='repeat(3, 1fr)'  gap={9}>
      
      {
        list.map((listItem, id) => {
          return (
          
            <GridItem
            className='list-item-box' p={9} key={listItem.id} 
            bgColor={'rgba(77, 222, 248, 0.185)'}  >
             
              <Image src={listItem.image} />
              <Text fontSize='2xl'>{listItem.title}</Text>
              {/* <Text fontSize='md'>{listItem.description}</Text> */}
              <Text color={'blue'} fontSize='xl'>${listItem.price}</Text>
              <Box p={5}
               display={'flex'} alignItems={'center'}
               justifyContent={'center'}
              >
                <Button onClick={()=>addToCartHandle(listItem)}
                colorScheme='pink' variant='outline' >Add To Cart</Button>
                <Spacer/> 
                <AiOutlineHeart 
                onClick={()=>addToWishList(listItem)}
                 color='pink' size={33}  />
              </Box>
             
            </GridItem>
          )

        })
      }
     <br/><br/>
    
     
    </Grid><br/>
      
  
    
</Box>
</>
  );
 
}
