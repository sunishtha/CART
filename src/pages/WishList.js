import React, { useContext, useEffect } from 'react'
import { Card, Image,Stack,Heading,Button, CardBody, CardFooter, Box ,Text} from '@chakra-ui/react'
import { ListItemContext } from '../context/ListItemContext'




const WishList = () => {
 
const {wishList}=useContext(ListItemContext)


  return (
    <div>
     
      <Heading color={'pink.300'} p={9}>WISHLIST ITEMS</Heading>
    {
      wishList.map((itemShow,id)=>{
        return (
          <Box key={id} p={25} display={'flex'}
          justifyContent={'center'} alignItems={'center'}
          >    
       <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', md: '500px' }}
        src={itemShow.img} alt='...'
      />
    
      <Stack>
        <CardBody>
          <Heading size='md'>{itemShow.title}</Heading>
          <Heading size='sm'>$ {itemShow.price}</Heading>
     <Text size='sm'>Description : {itemShow.description} </Text>
        </CardBody>
    
        <CardFooter>
          <Button variant='solid' colorScheme='pink'>
            Add to Cart
          </Button>
          <Button variant={'ghost'} colorScheme='pink'>
            Remove 
          </Button>
        </CardFooter>
      </Stack>
    </Card>
    </Box>
        )
      })
    }


    </div>
  )
}

export default WishList;
