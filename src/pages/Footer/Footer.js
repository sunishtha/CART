import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import { AiOutlineFacebook,AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import '../../App.css'

const Footer = () => {
  return (
    <div>
    <Box 
    className='box-footer' h={'45vh'} display={'flex'} bgColor={'rgba(77, 222, 248, 0.185)'}>

      <Box textAlign={'start'}  w='100%' p={20} >
      <Text textDecoration={'underline'} fontSize='2xl'>ONLINE SHOPPING</Text>
      <Box color={'blue'}>
        <Text fontSize='md'>MEN</Text>
       <Text fontSize='md'>WOMEN</Text>
       <Text fontSize='md'>BEAUTY</Text>
       <Text fontSize='md'>GIFT CARDS</Text>
      </Box>
       
      
       </Box>
      
      

      <Box textAlign={'start'} w='100%' p={20}>
      <Text textDecoration={'underline'} fontSize='2xl'>CUSTOMER POLICIES</Text>
      <Box color={'blue'}>
        <Text fontSize='md'>Contact</Text>
      <Text fontSize='md'>Terms & Conditions</Text>
      <Text fontSize='md'>Shipping</Text>
      <Text fontSize='md'>Privacy Policy</Text>
      <Text fontSize='md'>FAQ</Text>
      
      </Box>
        
    

      </Box>

      <Box textAlign={'start'} w='100%' p={20} >
      <Text textDecoration={'underline'} fontSize='2xl'>KEEP IN TOUCH</Text>
      <Box display={'flex'} gap={'20px'} p={4}>
        <AiOutlineFacebook fontSize={'1.3rem'}/>
      <FiTwitter fontSize={'1.3rem'}/>
      <BsInstagram fontSize={'1.3rem'}/>
      <AiOutlineMail fontSize={'1.3rem'}/>
      </Box>
      
      <Box>

      </Box>
      </Box>
    </Box>
  
    
    
    </div>
  )
}

export default Footer;