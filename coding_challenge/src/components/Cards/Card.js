import React from 'react'
import {Box, Flex, Text, Heading } from '@chakra-ui/react'

const CardInfo = ({title, label ,value, percentage,duration, color, chart}) => {
    return (
        <Box borderRadius='10px' w={{ md: '100%'}} mr={{ md: '3%'}} p={{ md: 6}} borderWidth={1}>
            <Flex fontSize={{md:'15px'}} justify='space-between'>
                <Text fontWeight='bold' >{title}</Text>
                <Text>{label}</Text>
            </Flex>
            <Flex my={{ md:'20px'}} justify='space-between'>
                <Heading fontSize='30px'>{value}</Heading>
                <Text mt='4%' color={color}>{percentage}</Text>
            </Flex>
            <Box>
                {chart} 
            </Box> 
            <Text mt={{ md: '10px'}}>{duration}</Text>
        </Box>
    )
}

export default CardInfo
