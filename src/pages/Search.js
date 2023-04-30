import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Text,
    Input,

    Box,
    TableContainer,
    Divider,
    styled
} from '@chakra-ui/react'


export default function Search() {
    const [listItem, setListItem] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        axios.get('https://641d9d2a945125fff3d19460.mockapi.io/api/cart-api')
            .then((res) => setListItem(res.data))
    }, [])

    return (
        <div className="search-bar">
            <Box 
            display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Input className="input"
                width={'30%'} textAlign={'left'} variant='outline'

                 onChange={(e) => {
                    setSearch(e.target.value)
                 }}
    
                 placeholder='Search here..' />
            </Box><br />
            <Divider />
            <div className="search-items">
                {
                    listItem.filter((items) => items.title.toLowerCase().includes(search)).map((content, id) => {
                        return (
                            <TableContainer textAlign={'center'} key={id}>
                                <Text fontSize={'1.2rem'} color={'pink.400'}>
                                    {content.title}
                                </Text>
                            </TableContainer>
                        )
                    })
                }
            </div>

        </div>
    )
}