import React, { Children } from 'react'
import {Flex } from '@chakra-ui/react'

const NavContainer = ({ children, ...props}) => {
    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
            py={4}
            px={10}
            bg={['white', 'white']}
            color={['black','black']}
            {...props}
        >
            {children}
        </Flex>            
    )
}

export default NavContainer
