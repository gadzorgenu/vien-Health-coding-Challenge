import React from 'react'
import {Box, Flex, Text, Heading, Progress,Icon } from '@chakra-ui/react'

const SalesCard = () => {
    return (
        <Box borderRadius='10px' w={{ md: '100%'}} mr={{ md: '3%'}} p={{ md: 6}} borderWidth={1}>
            <Flex fontSize={{md:'15px'}} justify='space-between'>
                <Text fontWeight='bold' >Sales</Text>
                <Text>Monthy Goal</Text>
            </Flex>
            <Flex my={{ md:'20px'}} justify='space-between'>
                <Heading fontSize='30px'>98.1%</Heading>
                <Text mt='4%' color='#348373'>+6.9%</Text>
            </Flex>
            <Progress colorScheme="green" size="sm" value={60} rounded='lg' />
            <Text mt={{ md: '10px'}}>Yearly Goal</Text>
        </Box>
    )
}

export default SalesCard
