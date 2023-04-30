import React from 'react'
import Nav from '../components/Nav/Nav';
import { Box,Table, 
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,Heading,Grid,GridItem,Button,Text} from '@chakra-ui/react'
  import {MdOutlineDeleteOutline} from 'react-icons/md'
import {ArrowBackIcon,AddIcon,MinusIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const backToHome=useNavigate();
const handlehomePage=()=>{
  backToHome('/home');
}

  return (
    <div>
    <Nav/>
   
    <Grid templateColumns='repeat(5, 1fr)' gap={'2vh'}>
  <GridItem colSpan={2} >
  <Button onClick={handlehomePage}
  colorScheme='teal' variant='ghost'>
     <ArrowBackIcon alignItems={'start'} boxSize={5}  />
  </Button>

  </GridItem>
  
</Grid>
     
    <Box  alignItems={'center'} justifyContent={'center'} display={'flex'}>
    <Heading as='h3' size='lg'>
    CART ITEMS
  </Heading>
    </Box>
  
  <br/><br/>
 
    <Box fontSize={'1.0rem'}
    display={'flex'} alignItems={'center' } justifyContent={'center'}>
     
    <Box overflowY={'scroll'}  h={'22vw'}
    width={'60%'} p={20} border={' 2px solid rgba(77, 222, 248, 0.185)'}>
    <TableContainer >
  <Table variant='striped' colorScheme='white'>
    
    <Thead>
      <Tr>
        <Th></Th>
        <Th>
          <Heading as='h3' size='md'>
     ITEM
  </Heading>
         </Th>
         <Th>
          <Heading as='h3' size='md'>
     PRICE
  </Heading>
         </Th>
         <Th>
          <Heading as='h3' size='md'>
     QUANTITY
  </Heading>
         </Th>
         <Th>
          <Heading as='h3' size='md'>
    REMOVE
  </Heading>
         </Th>
       
      
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>img</Td>
        <Td>Jeans</Td>
        <Td>$12</Td>
        <Td>
        <Button colorScheme='blue' variant='ghost'>
            <AddIcon boxSize={3} />
        </Button>
          1
          <Button colorScheme='blue' variant='ghost'>
             <MinusIcon boxSize={3}/>
        </Button>
         
        </Td>
        <Td>
          <Button variant='ghost'>
            <MdOutlineDeleteOutline  color='red' />
          </Button>
          </Td>
   
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
    </Box>
<br/>

    <Box 
    gap={5} alignItems={'center'} justifyContent={'center'} display={'flex'}>
      <Heading color={'pink.500'} as='h4' size='md'>
        CART TOTAL :
      </Heading>
      <Text >
        $1234
      </Text>
    </Box>
    </div>
  )
}

export default Cart;
