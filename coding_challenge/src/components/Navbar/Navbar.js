import React, {useState}from 'react'
import {Flex, Box } from '@chakra-ui/react'
import Search from './Search'
import MenuButton from '../Button/MenuButton';
import MenuLinks from './MenuLinks'
import NavContainer from './NavContainer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ( ) => setIsOpen(!isOpen)

    return (
        /**
         * py= paddingTop and paddingBottom
         * m= margin
         * w= width
         * h= height
         * bg= background
         */
        <NavContainer >
            <MenuButton toggle={toggle} isOpen={isOpen}/>
            <Box width={{ md:'100%'}} bg='white'>
                <MenuLinks isOpen={isOpen}/>
            </Box>
        </NavContainer>
        // <NavContainer >
        //     <MenuButton toggle={toggle} isOpen={isOpen}/>
        //     <Flex justify='center' bg='white'>
        //         <Flex py='15px' >
        //             <Search/>
        //         <Flex marginTop='px' marginLeft='40%' fontSize='12px'>
        //             <MenuLinks isOpen={isOpen}/>
        //         </Flex>
        //         </Flex>
        //     </Flex>
        // </NavContainer>
    )
}

export default Navbar
