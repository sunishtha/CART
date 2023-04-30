import React , { useState} from 'react';
import {VStack,FormControl, FormLabel, Input, InputGroup,  Button,Box, Heading} from '@chakra-ui/react'
import { LoginContext } from '../context/LoginContext';
import Home from './Home';

const Login = () => {

 
const [email,setEmail]=useState('guest@123.com')
const [password,setPassword]=useState('')
const [profile,setProfile]=useState(false)


const handleSubmit=()=>{

   setProfile(true)
}


  return (
  <LoginContext.Provider value={{email}}>
    {
     
      profile ? 
       <Home/>
      :  <Box 
      display={'flex'} alignItems={'center'} justifyContent={'center'} p={'10%'}
      >
        
       <VStack 
       p={9} spacing={'5px'} bgColor={'rgba(77, 222, 248, 0.185)'}>
        <Heading  fontSize={'1.5rem'} color={'pink.300'}>LOGIN PAGE</Heading><br/>
      <FormControl id='email' isRequired >
        <FormLabel>Email:</FormLabel>
            <Input
            bg={'white'} value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email...' />
        
      </FormControl>
 
      <FormControl id='password' isRequired >
        <FormLabel>Password:</FormLabel>
        <InputGroup>
        <Input bg={'white'} value={password} onChange={(e)=>setPassword(e.target.value)}  type='password'  placeholder='Password' />
        
        </InputGroup>
      </FormControl>
 
 
      <Button colorScheme='green'
      width={'100%'}
      style={{marginTop:15}}
       onClick={handleSubmit}
      > 
    Login
      </Button>
 
      </VStack>
      
     </Box> 
     
  
    }

      </LoginContext.Provider>
  )
}

export default Login;
