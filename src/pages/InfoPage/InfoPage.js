import React from "react";
import {Box,Card,CardBody,Stack,Heading,Text,Divider, CardFooter, Image} from '@chakra-ui/react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

export default function InfoPage(){
    return (
        <div>
           
            <Box p={5} m={9}>
                <Box m={4}>
                    <Heading >REVIEWS</Heading>
                </Box>
                <Divider/>
                {/* reviews */}
                <Box m={5} gap={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >

                <Card  width={'25%'} >
  <CardBody textAlign={'start'}>
   
    <Stack  spacing='3'>
        <Image height={'70px'}
        width={'70px'} src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg?w=2000"/>
      <Heading size='md'>Lisa Ira</Heading>
      <Text fontSize={'0.9rem'}>
      The fabric is very silky soft.Material is very good and fitting also.
      </Text>
      <CardFooter>
        <Box gap={2} display={'flex'}>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
      </Box>
      </CardFooter>
    </Stack>
  </CardBody>
  <Divider />
 
</Card>
<Card  width={'25%'}  maxW='sm'>
  <CardBody textAlign={'start'}>
   
    <Stack  spacing='3'>
    <Image height={'70px'}
        width={'70px'} src="https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000"/>
      <Heading size='md'>John Jonas</Heading>
      <Text fontSize={'0.9rem'}>
      Such a lovely experience. Perfect for all weather types
      </Text>
      <CardFooter>
        <Box  gap={2} display={'flex'}>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarHalf color="gold"/>
      </Box>
      </CardFooter>
      
     
    </Stack>
  </CardBody>
  <Divider />
 
</Card>
<Card width={'25%'} maxW='sm'>
  <CardBody textAlign={'start'}>
   
    <Stack  spacing='3'>
    <Image height={'70px'}
        width={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6o5TXh5hlJVR1XehxKx3xnukVfPpsm9LwaxI2xknILIL-NOnuztcnzW9BM5hJ4WIdDM&usqp=CAU"/>
      <Heading size='md'>Sophie Turner</Heading>
      <Text fontSize={'0.9rem'}>
      The best! Found me the perfect dress and such lovely service and attention. 
      </Text>
      <CardFooter>
        <Box gap={2} display={'flex'}>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarFill color="gold"/>
    <BsStarHalf color="gold"/>
      </Box>
      </CardFooter>
    </Stack>
  </CardBody>
  <Divider />
 
</Card>
                </Box>
            </Box>
        </div>
    )
}