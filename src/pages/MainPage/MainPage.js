import React from 'react'
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import './MainPage.css'


const MainPage = () => {

  const addProductpage = useNavigate()
  const addToShop = () => {
    addProductpage('/listitems')
  }

  return (
    <div>

      <Box display='flex'
        alignItems='center'
        justifyContent='center'>
        <Box
          display='flex'
          flexDirection={'column'}
          alignItems='start'
          justifyContent='start'
          width='70%'
          py={12}
          bgPosition='center'
          bgRepeat='no-repeat'
          mb={6}
          bgImage={'https://img.freepik.com/free-photo/emotional-lady-with-short-curle-hair-funny-dancing-sunglasses-fur-coat_197531-7115.jpg?size=626&ext=jpg&ga=GA1.1.1178283486.1682423436&semt=robertav1_2_sidrs'}

          className='img-main' height={'72vh'} >
          <Box flexDirection={'column'} display={'flex'} justifyContent={'start'}>

            <Heading p={3} ml={'70px'} color={'white'}>
              Huge  Collection
            </Heading>


            <ButtonGroup p={3} >
              <Button onClick={addToShop} ml={'70px'} color={'black'}>SHOP NOW</Button>

            </ButtonGroup>
          </Box>

        </Box>
{/* box 2 */}
        <Box height={'72vh'} width={'60%'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          <Box  >
            <Heading   color={'blackAlpha.700'}>
           ENJOY EXTRA 50% OFF
            </Heading>
            <Heading size={'md'} color={'blackAlpha.700'} >
           Men's Collection
            </Heading>
          </Box>
         
          <Box border={'2px double pink'} m={5} height={'300px'}  width={'300px'} borderRadius={'200px'} bgSize={'cover'} bgImage='https://img.freepik.com/free-photo/young-fashion-man-sitting-white-rectangle_329181-1463.jpg?size=626&ext=jpg&ga=GA1.2.1178283486.1682423436&semt=robertav1_2_sidr'
         >
      
          </Box>
           
          </Box>
       
      </Box>



    </div>
  )
}

export default MainPage;