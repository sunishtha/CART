import React, { useContext } from 'react'
import { Card, Image, Stack, Heading, Button, CardBody, CardFooter, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { ListItemContext } from '../../context/ListItemContext'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {useNavigate}  from 'react-router-dom'
import { CartContext } from '../../context/CartContecxt';
import './WishList.css'

const WishList = () => {
  const { wishListData, setWishListData } = useContext(ListItemContext);
  const {cartData,setCartData}=useContext(CartContext)
  const productPage=useNavigate();
  const cartPage=useNavigate();

  const removeWishListItem = (id) => {
    const delItem = wishListData.filter((ele) => ele.id !== id)
    setWishListData(delItem)
  }

  const backToProductPage=()=>{
    productPage('/products')
  }
  const addToCartHandle=(listItem)=>{
    setCartData((data)=>
    [...data,listItem]
  )
  console.log(listItem)
  cartPage('/cart')
  }

  return (
    <div>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box width={'10%'} alignItems={'start'}><Button onClick={backToProductPage}
        alignContent={'start'}> <ArrowBackIcon />
        </Button></Box>
        <Box  pr={127} width={'90%'}> <Heading color={'pink.300'} p={8}>
          WISHLIST ITEMS
          </Heading></Box>
       
          </Box>


      <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} >
        <Grid p={3}className='wishlist-item'
         templateColumns='repeat(2, 1fr)' gap={1}>
          {
            wishListData.map((itemShow, id) => {
              return (
                <GridItem p={5} key={itemShow.id}  >

                  <Box p={5}
                    justifyContent={'center'} alignItems={'center'}
                  >
                    <Card className='wishlist-card'
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                    >
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', md: '300px' }}
                        src={itemShow.img} alt='...'
                      />

                      <Stack>
                        <CardBody>
                          <Text fontSize={'1.5rem'}>{itemShow.title}</Text>
                          <Text color={'gray'} size='sm'>{itemShow.description} </Text>
                          <Heading color={'blue.400'} size='sm'> ${itemShow.price}</Heading>

                        </CardBody>

                        <CardFooter>
                          <Button onClick= {()=>addToCartHandle(itemShow)} variant='solid' colorScheme='pink'>
                            Add to Cart
                          </Button>
                          <Button onClick={() => removeWishListItem(id)}
                            variant={'ghost'} colorScheme='pink'>
                            Remove
                          </Button>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </Box>
                </GridItem>)
            })
          }


        </Grid>
      </Box>


    </div>
  )
}

export default WishList;
