import React from 'react'
import { Input,Flex, Link,Box, Icon} from '@chakra-ui/react'
import { HiSearch } from "react-icons/hi";

const NavBar = () => {
    return (
        <Box w='100%' p={3} bg='white'>
            <Flex justify='center'>
                <Box w='40%'>
                    <Input placeholder='search' borderEndRadius='none'/>
                </Box>
                <Box bg='#016450' px={4} py={1} color='white' borderEndRadius='4px' as='button'>
                    <Icon as={HiSearch}/>
                </Box>
                <Flex marginLeft={10} marginTop={2}>
                    <Link marginRight={3}> Udwell Now</Link>
                    <Link> Sell a property</Link>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NavBar