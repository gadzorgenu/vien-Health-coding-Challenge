import React from 'react'
import { Box, Avatar, Text, Heading } from '@chakra-ui/react';
import user from '../Assets/user.png'

const UserProfile = ({ name, role }) => {
    return (
       <Box>
           <Avatar name={name} src={user}/> 
           <Heading as='h4'>{name}</Heading>
           <Text>{role}</Text>
       </Box>
    )
}

export default UserProfile