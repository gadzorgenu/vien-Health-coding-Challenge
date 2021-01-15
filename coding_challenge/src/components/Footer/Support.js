import React from 'react'
import {Box, Flex, Text,List,ListItem, Link, Heading } from '@chakra-ui/react'

const Support = () =>{
    return (
        <Box>
            <Heading fontSize={{ md:'20px'}} my={{ md: '10px'}}>Support </Heading>
            <List>
                <ListItem  >Help Center</ListItem>
                <ListItem >Cancellations Options</ListItem>
                <ListItem >Neighbourhood Support</ListItem>
                <ListItem >Trust % Safety</ListItem>
            </List>
           
        </Box>
    )
}

export default Support
