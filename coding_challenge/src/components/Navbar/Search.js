import React from 'react'
import { Flex, Input,Icon} from '@chakra-ui/react'
import { HiSearch } from "react-icons/hi";
const Search = () => {
    return (
        <Flex>
            <Input placeholder='search' borderRightRadius ='none'/>
            {/* <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
            /> */}
            <Flex 
                as='button'
                bgColor='green.500' 
                justify='center' 
                width='30%'
                height='40px'
                borderRightRadius ={4}
            >
            <Icon as={HiSearch} color='white' my={3} />
            </Flex>
        </Flex>
    )
}

export default Search
