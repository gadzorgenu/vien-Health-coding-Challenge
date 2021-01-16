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

{/* <NavContainer >
        //     <MenuButton toggle={toggle} isOpen={isOpen}/>
        //     <Flex justify='center' bg='white'>
        //         <Flex py='15px' >
        //             <Search/>
        //         <Flex marginTop='px' marginLeft='40%' fontSize='12px'>
        //             <MenuLinks isOpen={isOpen}/>
        //         </Flex>
        //         </Flex>
        //     </Flex>
        // </NavContainer> */}