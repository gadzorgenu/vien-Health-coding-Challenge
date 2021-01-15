import React from 'react'
import { Box, Text, Divider, Image, Spacer, Flex } from '@chakra-ui/react'

const AboutUser = ({ title, image, font }) => {
    return (
        <Box mx={{ md: '10%'}} >
        <Divider orientation='horizontal' mt={{ md: '5%'}} />
        <Flex my='10px' as='button' w={{ md: '100%'}}>
            <Text fontSize={{ md: '15px'}} fontWeight={font}> {title} </Text>
            <Spacer/> 
                <Image src={image}/>
        </Flex>
    </Box>
    )
}

export default AboutUser
