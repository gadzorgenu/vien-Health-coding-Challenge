import React, { Children } from 'react'
import {Flex } from '@chakra-ui/react'

const NavContainer = ({ children, ...props}) => {
    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            w={8}
            p={8}
            bg={['white,white']}
            // color={['','white']}
            {...props}
        >
            {children}
        </Flex>            
    )
}

export default NavContainer
