import React from 'react'
import { Box, Text, Divider, Icon, Spacer, Flex } from '@chakra-ui/react'

const AboutUser = ({ title, icon }) => {
    return (
        <Box mx={{ md: '10%'}} >
        <Divider orientation='horizontal' mt={{ md: '10%'}} />
        <Flex my='10px' as='button'>
            <Text fontSize={{ md: '15px'}}> {title} </Text>
            <Spacer />
            {/* <Icon as={icon}/> */}
        </Flex>
    </Box>
    )
}

export default AboutUser
