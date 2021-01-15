import React from 'react'
import { Box,Icon, Stack } from '@chakra-ui/react'
import { MdSort } from "react-icons/md";
import MenuItem from './MenuItem'


const MenuLinks = ({ isOpen}) => {
    return (
        <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block'}}
        flexBasis={{ base: '100%', md:'auto'}}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                >
                <MenuItem to="/">Udwell Now</MenuItem>
                <MenuItem to="/">Sell a property</MenuItem>
                <Box as='button'>
                    <Icon as={MdSort}  marginTop='5px'  ml='20px' w='30px' h='30px'/>
                </Box>
            </Stack>
        </Box>
    )
}

export default MenuLinks
