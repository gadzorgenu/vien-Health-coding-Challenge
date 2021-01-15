import React from 'react'
import {Box, Flex, Text,List,ListItem, Avatar, Heading } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Address = () =>{
    return (
        <Box>
            <Heading fontSize={{ md:'20px'}} my={{ md: '10px'}}>Address </Heading>
            <Box>
                <Text  >Counter Delivery, Carter's Beach</Text>
                <Text >PostCentre, Westport</Text>
                <Flex justify='center' mt={{ md: '10%'}}>
                    <Avatar 
                        bg='white' 
                        color='#098B71' 
                        icon={<FaFacebookF fontSize="1.5rem" />} 
                        mr={{ md:'20px'}} 
                        as='button'
                    />
                    <Avatar 
                        bg='#098B71' 
                        color='white' 
                        icon={<FaInstagram fontSize="1.5rem" />} 
                        mr={{ md:'20px'}} 
                        as='button' 
                    />
                    <Avatar 
                        bg='white' 
                        color='#098B71' 
                        icon={<FaTwitter fontSize="1.5rem" />} 
                        as='button'
                        />
                </Flex>
            </Box>
           
        </Box>
    )
}

export default Address
