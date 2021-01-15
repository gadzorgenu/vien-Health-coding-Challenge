import React from 'react'
import { Box } from '@chakra-ui/react'
import {MdFormatAlignJustify } from 'react-icons/md'
import {FaTimes} from 'react-icons/fa'
const MenuButton = ({ toggle, isOpen }) =>{
    return (
        <Box display={{ base:'block', md: 'none'}} onClick={toggle}>
            { isOpen ? <FaTimes /> :< MdFormatAlignJustify />}
        </Box>
    )
}

export default MenuButton
