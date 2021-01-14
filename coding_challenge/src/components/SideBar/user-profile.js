import React from 'react'
import { Box, Avatar, Text, Heading } from '@chakra-ui/react';
import user from '../Assets/user.png'

const UserProfile = ({ name, role }) => {
    return (
       <Box textAlign='center' margin={{ md: '20px'}}>
           <Avatar name={name} src={user} size='2xl'/> 
           <Box my={{ md: '10px'}}>
            <Heading fontSize={{ md: '20px'}}>{name}</Heading>
            <Text>{role}</Text>
           </Box>
       </Box>
    )
}

export default UserProfile