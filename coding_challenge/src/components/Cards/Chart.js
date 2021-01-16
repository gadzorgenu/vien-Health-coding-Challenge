import React from 'react'
import { Box, Divider, CircularProgress, Text, Flex, Spacer } from '@chakra-ui/react'

const Chart = ({ color, value, amount, status, number, state})=> {
    return (
        <Flex m={5}>
            <CircularProgress value={value} size="150px" color={color} thickness="15px" />
            <Box p={4} ml={{sm:4, md: 8}}>
                <Box>
                    <Text fontWeight='bold' fontSize={{ md: '20px'}}>{amount}</Text>
                    <Text fontSize={{ md: '13px'}} textAlign='right'> {status}</Text>
                </Box>
                <Divider orientation='horizontal' border={1} my={2}/>
                <Box textAlign='right'>
                    <Text fontWeight='bold' fontSize={{ md: '20px'}} > {number}</Text>
                    <Text> {state}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default Chart
