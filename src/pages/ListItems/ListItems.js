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
  const [shoeMensItem,setShowMensItem]=useState(false)
  const [shoeWomensItem,setShowWomensItem]=useState(false);
  const [showLowHighPrice,setShowLowHighPrice]=useState(false);
  const [showHighLowPrice,setShowHighLowPrice]=useState(false);




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

  

  const handleMen=(categoryMen)=>{
     let result=list.filter((items)=>{
      return items.category === categoryMen
     })
     setList(result);
     setShowMensItem(!shoeMensItem)
  }
  const handleWomen=(categoryWomen)=>{
    let result=list.filter((items)=>{
      return items.category === categoryWomen
     })
     setList(result);
     setShowWomensItem(!shoeWomensItem)
  }
  const handleLowToHighPrice=(priceLow)=>{
    let result = list.filter((items) => {
      return items.price < priceLow;
    });
    setList(
      result.sort((a, b) => {
        return a.price - b.price;
      })
    );
 setShowLowHighPrice(!showLowHighPrice)
  }
  const handleHighToLowPrice=(priceHigh)=>{
    let result = list.filter((items) => {
      return items.price < priceHigh;
    });
    setList(
      result.sort((a, b) => {
        return b.price - a.price;
      })
    )
    setShowHighLowPrice(!showHighLowPrice)
  }
  

  return ( 
  <>
  <Nav/>  
     
      <Text fontSize={'3xl'} p={1} color={'pink.400'}>
       EXPLORE US!!
      </Text>
      <Box display={'flex'} >
 {/* Category */}
    
      <Box width={'15%'} display={'flex'} position={'relative'}   flexDirection={'column'} alignItems={'start'}>
       
       <Text p={2} style={{cursor:'pointer'}} fontSize='xl' >Category</Text>
       <Box m={4} display={'flex'} flexDirection={'column'} alignItems={'start'} >
       <Button 
     variant={'link'} style={{color:'orange'}}>All Items</Button>
       <Button 
       onClick={()=>handleMen("men's clothing")} variant={'link'} style={{color:'orange'}}>Men</Button>
       <Button onClick={()=>handleWomen("women's clothing")} 
        variant={'link'} style={{color:'orange'}}>Women</Button>
       
     </Box> 
       
   
     
 
   
      <Text p={2} style={{cursor:'pointer'}} fontSize='xl'>Price</Text>
      
      <Box m={4} display={'flex'} flexDirection={'column'} alignItems={'start'} >
 
       <Button onClick={()=>handleLowToHighPrice(2000)}
         variant={'link'} style={{color:'orange'}} >
         low to high
         </Button>
       <Button onClick={()=>handleHighToLowPrice(2000)}
        variant={'link'} style={{color:'orange'}}>high to low</Button>
      </Box> 
       </Box>
      {/*  */}
    
      
       <Box width={'85%'}  display={'flex'}justifyContent={'center'} alignItems={'center'} >
    <Grid  className='list-item-container'p={3} templateColumns='repeat(3, 1fr)'  gap={5}>
      
      {
        list.map((listItem, id) => {
          return (
            <>   { shoeMensItem && shoeWomensItem && showLowHighPrice  && showHighLowPrice?
            <GridItem height={'72vh'} width={'95%'}
            className='list-item-box' p={5} key={listItem.id} 
            bgColor={'rgba(77, 222, 248, 0.185)'}  >
             
              <Image height={'47vh'} width={'100%'} src={listItem.image} />
              <Text fontSize='sm'>{listItem.title}</Text>
              <Text  color={'blue'} fontSize='sm'>${listItem.price}</Text>
              <Box p={5}
               display={'flex'} alignItems={'center'}
               justifyContent={'center'}
              >
                <Button size='sm' onClick={()=>addToCartHandle(listItem)}
                colorScheme='pink' variant='outline' >Add To Cart</Button>
                <Spacer/> 
                <AiOutlineHeart 
                onClick={()=>addToWishList(listItem)}
                 color='pink' size={27}  />
              </Box>
             
            </GridItem>
             : 
            <GridItem height={'72vh'} width={'95%'}
            className='list-item-box' p={5} key={listItem.id} 
            bgColor={'rgba(77, 222, 248, 0.185)'}  >
             
              <Image height={'47vh'} width={'100%'} src={listItem.image} />
              <Text fontSize='sm'>{listItem.title}</Text>
              <Text  color={'blue'} fontSize='sm'>${listItem.price}</Text>
              <Box p={5}
               display={'flex'} alignItems={'center'}
               justifyContent={'center'}
              >
                <Button size='sm' onClick={()=>addToCartHandle(listItem)}
                colorScheme='pink' variant='outline' >Add To Cart</Button>
                <Spacer/> 
                <AiOutlineHeart 
                onClick={()=>addToWishList(listItem)}
                 color='pink' size={27}  />
              </Box>
             
            </GridItem> 
              }
            </>
          )

        })
      }
     <br/><br/>
    
     
    </Grid><br/>
      
  
    
</Box> 


</Box>
</>
  );
 
}
