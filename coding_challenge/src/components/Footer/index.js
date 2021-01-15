import React from 'react'
import {Box, Flex, Icon, Text} from '@chakra-ui/react'
import About from './About'
import Support from './Support'
import Address from './Address'
import {FaRegCopyright} from 'react-icons/fa'

const Footer = () =>{
    return (
        <Box textAlign='center' mx={{md: '20%'}}>
            <Flex justify='space-between'>
                <About />
                <Support/>
                <Address/>
            </Flex>
            <Flex mt={{ md:'40px'}} justify='center' pb={{ md: 5}}>
                <Icon as={ FaRegCopyright}/>
                <Text mr={4}>Udwell,LLC. All Rights Reserved. </Text>
                <Text mr={4}>{`Terms & Conditions`}</Text>
                <Text>Privacy Policy</Text>
            </Flex>
        </Box>
    )
}

export default Footer
