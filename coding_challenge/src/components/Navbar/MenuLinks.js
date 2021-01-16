import React from 'react'
import { Box,Icon, Stack } from '@chakra-ui/react'
import { MdSort } from "react-icons/md";
import MenuItem from './MenuItem'


const MenuLinks = ({ isOpen}) => {
    return (
        <Box
        ml={{ md: '3%'}}
        display={{ base: isOpen ? 'block' : 'none', md: 'block'}}
        flexBasis={{ base: '100%', md:'auto'}}
        >
            <Stack
                spacing={14}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
                >
                    
                <MenuItem to="/">Udwell Now</MenuItem>
                <MenuItem to="/">Sell a property</MenuItem>
            </Stack>
        </Box>
    )
}

export default MenuLinks
