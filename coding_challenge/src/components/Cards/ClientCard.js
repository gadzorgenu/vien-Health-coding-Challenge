import React from 'react'
import {Box, Flex, Text, Heading, Progress } from '@chakra-ui/react'

const ClientCard = () =>{
    return (
        <Box borderRadius='10px' w={{ md: '28%'}} mr={{ md: '3%'}} p={{ md: 6}} borderWidth={1}>
        <Flex fontSize={{md:'15px'}} justify='space-between'>
            <Text fontWeight='bold' >Clients</Text>
            <Text>Subscribed</Text>
        </Flex>
        <Flex my={{ md:'20px'}} justify='space-between'>
            <Heading>1,232</Heading>
            <Text mt='4%' color='#348373'>+3.2%</Text>
        </Flex>
        <Progress colorScheme="green" size="sm" value={60} rounded='lg' />
        <Text mt={{ md: '10px'}}>Yearly Goal</Text>
    </Box>
    )
}

export default ClientCard
