import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import {
    Box, Input, Text, Tab, TabList, Tabs, Image
} from '@chakra-ui/react'
import { LoginContext } from '../../context/LoginContext'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'



export default function Nav() {
    const { email } = useContext(LoginContext)
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const deadLine = " september,19,2023"
        const time = Date.parse(deadLine) - Date.now()
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMinutes(Math.floor(time / 1000 / 60) % 60)
        setSeconds(Math.floor((time / 1000) % 60))

    }
    useEffect(() => {
        const interval = setInterval(() =>
            getTime()
            , 1000)

    }, [])

    return (
        <>
            <div className='nav-container-inside'
            >
                <Box h={12} m={2}>

                    <Tabs align='end' variant={'none'}>

                        <TabList>
                            <Tab>
                                <Image borderRadius={'39px'} height={'39px'} width={'39px'} src='https://img.freepik.com/premium-vector/am-letter-crown-logo-design-vector_586862-576.jpg?w=360' alt='..' />
                            </Tab>

                            <Tab>
                                <Text color={'red'}>SALE ENDS IN.. </Text>
                            </Tab>
                            <Tab width={'17%'}>

                                <Box color={'white'}
                                    borderRadius={'5px'} p={2} gap={5} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} bgColor={'orange'}>
                                    <Text >0{hours}</Text>
                                    <Text>:</Text>
                                    <Text> {minutes}</Text>
                                    <Text>:</Text>
                                    <Text>{seconds}</Text>


                                </Box>
                            </Tab>
                            <Tab>
                                <NavLink end to='/home' className="link" >
                                    HOME
                                </NavLink>
                            </Tab>
                            <Tab>
                                <NavLink end to='/products' className="link" >
                                    PRODUCTS
                                </NavLink>
                            </Tab>
                            <Tab>
                                <NavLink end to='/cart' className="link" >
                                    <AiOutlineShoppingCart />
                                </NavLink>
                            </Tab>

                            <Tab>
                                <NavLink end to='/wishlist' className="link" >
                                    <AiOutlineHeart color='red' />
                                </NavLink>
                            </Tab>
                            <Tab width={'30%'}>
                                <Input border={'none'} borderBottom={'1px solid pink'} pl={2} width={'100%'} placeholder='Search here...' bgColor={'white'} borderRadius={'0px'} />
                            </Tab>
                        </TabList>

                    </Tabs>
                </Box>

                {/* nav 2 */}
                <Box padding={5} gap={3} display={'flex'} alignItems={'center'} justifyContent={'center'} p={1} bgColor={'pink'}>

                    <Text color={'blue.400'} fontSize='md'>  Logged in as:
                    </Text>
                    <Text textTransform={'uppercase'} color={'white'} fontSize='md'>  {email}
                    </Text>

                </Box>

            </div><br />


        </>
    )
}