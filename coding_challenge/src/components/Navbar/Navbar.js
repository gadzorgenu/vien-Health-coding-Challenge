import React from 'react'
import {Flex, Box, Link,Icon } from '@chakra-ui/react'
import { HiMenuAlt2 } from "react-icons/hi";
import Search from './Search'


const Navbar = () => {
    return (
        /**
         * py= paddingTop and paddingBottom
         * m= margin
         * w= width
         * h= height
         * bg= background
         */

        <Flex justify='center' bg='white'>
            <Flex py='15px' w='70%'>
                <Search/>
                <Flex marginTop='px' marginLeft='40%' fontSize='12px'>
                    <Flex marginTop='10px'>
                            <Link marginRight='20px'> Udwell Now</Link>
                            <Link marginRight='100px' >Sell a property</Link>
                    </Flex>
                    <Box as='button'>
                            <Icon as={HiMenuAlt2}  marginTop='5px' w='30px' h='30px'/>
                    </Box>
                </Flex>
            </Flex>
       </Flex>
    )
}

export default Navbar
