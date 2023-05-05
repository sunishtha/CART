import React, { useReducer, useContext, useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav';
import reducer from '../../reducer/reducer';
import {
  Box, Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, Heading, Button, Text, Image, Stack, Alert, AlertIcon
} from '@chakra-ui/react'
import { CartContext } from '../../context/CartContecxt'
import { DeleteIcon } from '@chakra-ui/icons'
import './Cart.css'


const Cart = () => {

  const [order, setOrder] = useState(false);
  const [total, setTotal] = useState()
  const placeOrder = () => {
    setOrder(true)
  }

  const { cartData, setCartData } = useContext(CartContext)

  useEffect(() => {
    setTotal(cartData.reduce((acc, curr) => {
      return acc + Number(curr.price)
    }, 0))
  }, [total])



  const deleteItem = (id) => {
    setCartData(cartData.filter((ele) => ele.id !== id))
  }

  const [state, dispatch] = useReducer(reducer, { initialState: [] });
  const incrHandle = (id) => {
    return dispatch({
      type: "INCR",
      payload: id
    });
  };

  return (
    <div className='cart'>
      <Nav />
      <Box className='cart-list' alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'}>

        <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
          <Heading color={'pink'} as='h3' size='lg'>
            CART ITEMS
          </Heading>
        </Box>
        {/*  */}

        <Box  
         height={'250px'}
          width={'55%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <TableContainer 
          overflowY={'auto'}
          css={{ '&::webkit-scrollbar': { width: "3px" }, '&::webkit-scrollbar-track': { width: '2px' }, '&::webkit-scrollbar-thumb': { background: 'pink', borderRadius: '10px' } }}
          className='cart-table'>
            <Table variant='simple'>

              <Thead>
                <Tr>
                  <Th></Th>
                  <Th fontSize={'1.1rem'}>Item</Th>
                  <Th></Th>
                  <Th fontSize={'1.1rem'}>Price</Th>
                  <Th></Th>

                </Tr>
              </Thead>
              {
                cartData.map((cartItem, id) => {
                  return (
                    <>
                      <Tbody key={id}>
                        <Tr >
                          <Td>
                            <Image height={'50px'} width={'50px'} src={cartItem.img} alt='..' /></Td>
                          <Td>{cartItem.title}</Td>
                          <Td>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                              <Button m={3} >-</Button>
                              <Text>{cartItem.quantity}</Text>
                              <Button 
                              onClick={() => incrHandle(id)}
                               m={3}>+</Button>
                            </Box>
                          </Td>
                          <Td>${cartItem.price}</Td>
                          <Td onClick={() => deleteItem(cartItem.id)}
                            color={'red'}><DeleteIcon /></Td>

                        </Tr>

                      </Tbody>
                    </>
                  )
                })
              }

            </Table>
          </TableContainer>



        </Box>
        {/* total */}
        <Box width={'40%'} p={2} m={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Heading textDecoration={'underline'} as='h4' size='sm' mr={3}>Total Amount :</Heading>
          <Text color={'green'}>${total}</Text>
        </Box>
        {/* place order */}
        {
          order ? <Stack display={'flex'} p={4} spacing={3}>
            <Alert status='success'>
              <AlertIcon />
              <Text>  Order is Placed Successfully!!</Text>


            </Alert>
          </Stack>
            :
            <Box onClick={placeOrder} width={'40%'} m={4}>
              <Button width={'100%'} variant='solid' colorScheme='red'>Place Order</Button>
            </Box>

        }
      </Box>   </div>
  )
}

export default Cart;
