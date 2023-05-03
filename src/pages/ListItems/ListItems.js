import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Grid, Image, Text, GridItem, Button,  Box, Spacer ,Heading,Card,CardBody,CardFooter,Stack, Divider} from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'
import Nav from '../../components/Nav/Nav';


 

export default function ListItems() {

  // const wishlistPage=useNavigate();
  const cartPage=useNavigate();
  const [wishList, setWishList] = useState([]);
  const [list, setList] = useState([]);
const [addToCart,setAddToCart]=useState([])



  async function getProduct() {
   const res=await axios.get('https://641d9d2a945125fff3d19460.mockapi.io/api/cart-api')
   const products=await res.data;
  setList(res.data);
  
  }
  useEffect(() => {
    getProduct();

  }, [])

  const addToWishList=(listItem)=>{ 
      setWishList((data)=>
        [...data,listItem]
      )
      console.log(listItem)
    // wishlistPage('/wishlist')
  }

  const addToCartHandle=(listItem)=>{
    setAddToCart((data)=>
    [...data,listItem]
  )
  console.log(listItem)
  cartPage('/cart')
  }

  const removeWishListItem=(id)=>{
  const delItem= wishList.filter((ele)=>ele.id !== id)
    setWishList(delItem)
  }
  

  return ( 
  <>
  <Nav/>  
     
      <Text fontSize={'3xl'} p={1} color={'pink.400'}>
       EXPLORE US!!
      </Text>
       <Box display={'flex'} >
    <Grid p={5} templateColumns='repeat(2, 1fr)' borderRight={'1px solid black'} gap={9}>
      
      {
        list.map((listItem, id) => {
          return (
          
            <GridItem p={9} key={listItem.id} 
            
            bgColor={'rgba(77, 222, 248, 0.185)'}  >
             
              <Image src={listItem.img} />
              <Text fontSize='2xl'>{listItem.title}</Text>
              <Text fontSize='md'>{listItem.description}</Text>
              <Text color={'blue'} fontSize='xl'>{listItem.price}</Text>
              <Box p={5}
               display={'flex'} alignItems={'center'}
               justifyContent={'center'}
              >
                <Button onClick={()=>addToCartHandle(listItem)}
                colorScheme='pink' variant='outline' >Add To Cart</Button>
                <Spacer/> 
                <AiOutlineHeart values={addToCart}
                onClick={()=>addToWishList(listItem)}
                 color='pink' size={33}  />
              </Box>
             
            </GridItem>
          )

        })
      }
     <br/><br/>
    
     
    </Grid><br/>
      
    <Box  display={'flex'} flexDirection={'column'} width={'33%'} height={'200px'}>
  <Text textDecoration={'underline'} color={'pink.300'} p={2}>WISHLIST ITEMS</Text>
    {
      wishList.map((itemShow,id)=>{
        return (
          <Box  key={id} p={2} display={'flex'} flexDirection={'column'}
          justifyContent={'center'} alignItems={'center'}
          >    
      
      <Image
        objectFit='cover'
        maxW={{ base: '100%', md: '150px' }}
        src={itemShow.img} alt='...'
      />
          <Heading size='md'>{itemShow.title}</Heading>
          <Heading size='sm'>{itemShow.price}</Heading>
     <Text size='sm'> {itemShow.description} </Text> 
          <Button maxW={{ base: '100%', sm: '90px' }} variant='solid' colorScheme='pink'>
            Add to Cart
          </Button>
          <Button onClick={()=>removeWishListItem(id)}
           variant={'ghost'} colorScheme='pink'>
            Remove 
          </Button>
       
     
    </Box>
 
        )
      })
    }
  </Box>
    
</Box>
</>
  );
 
}
