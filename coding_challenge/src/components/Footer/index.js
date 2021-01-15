import React from 'react'
import {Box, Flex, Text, Link, Heading } from '@chakra-ui/react'
import About from './About'
import Support from './Support'
import Address from './Address'
 
const Footer = () =>{
    return (
        <Box textAlign='center' mx={{ md: '20%'}}>
            <Flex justify='space-between'>
                <About />
                <Support/>
                <Address/>
            </Flex>
            <Flex my={{ md:'40px'}}>
                <Text>Udwell,LLC. All Rights Reserved. </Text>
                {/* <Text>Terms &amp Conditions</Text> */}
                <Text>Privacy Policy</Text>
            </Flex>
        </Box>
    )
}

export default Footer
