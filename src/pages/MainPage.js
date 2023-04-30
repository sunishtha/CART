import React from 'react'
import { Box, Image, Text,Button,Stack,ButtonGroup } from '@chakra-ui/react'
import '../App.css'
import { useNavigate } from 'react-router-dom'



const MainPage = () => {

const addProductpage=useNavigate()
 const addToShop=()=>{
   addProductpage('/listitems')
 }
  
  return (
    <div>
      
      <Box className='main-page'
       gap={'3vw'} justifyContent={'center'} alignItems={'center'} display={'flex'} height='90vh' w='100%' p={4} >
    
        <Box  className='main-page-box'
          bgColor={'rgba(77, 222, 248, 0.185)'} height='40vh' w='37%' p={9} >
        
  <Stack direction='column'>
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={28}
    bgImage="https://media.istockphoto.com/id/1292443598/photo/flying-shopping-cart-with-shopping-bags-on-a-pink-background.jpg?s=170667a&w=0&k=20&c=d-0iNUYsC3I-cX4iaV4BNPOf9QYWth2fyWO2HvnghWo="
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={4}
  >
    <ButtonGroup gap='5' >
    <Text color={'blackAlpha.800'} fontSize={'4xl'} >UPTO 50 OFF!!</Text> 
    <Button size={'lg'} onClick={addToShop} colorScheme='pink' variant='solid'>shop now</Button>
    </ButtonGroup>
  </Box>

 
    
    
</Stack>

          </Box>

          <Box className='main-page-box2'
           bgColor={'rgba(77, 222, 248, 0.185)'} height='60vh' w='30%' p={6} > 
         
          <Text    className='font-box'
  fontSize='3xl'> EXPLORE NEW STYLES...
       </Text><br/>
       <Image className='main-page-img2'
    boxSize='300px'
    objectFit='cover'
    src='https://freedesignfile.com/upload/2017/06/Expression-cheerful-shopping-woman-Stock-Photo.jpg'
    alt='imgg'
  />
        
  <br/>
 
     
        </Box>
        
      </Box>
     
    
   

      </div>
  )
}

export default MainPage;