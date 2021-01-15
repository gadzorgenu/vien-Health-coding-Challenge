import React from 'react'
import {Box, Flex, Text,List,ListItem, Link, Heading } from '@chakra-ui/react'

const About = () =>{
    return (
        <Box textAlign='justify'>
            <Heading fontSize={{ md:'20px'}} my={{ md: '10px'}}>About </Heading>
            <List>
                <ListItem as='a' href='#'>Company</ListItem>
                <ListItem >Teams</ListItem>
                <ListItem >Careers</ListItem>
                <ListItem >Blog</ListItem>
            </List>
           
        </Box>
    )
}

export default About
