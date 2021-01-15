import React from 'react'
import {Box, Flex } from '@chakra-ui/react'
import SalesCard from './SalesCard'
import ClientCard from './ClientCard'
import RevenueCard from './RevenueCard'

const Card = () => {

    return (
        <Box padding='15px'>
            <Flex justify='center'>
                <SalesCard />
                <RevenueCard />
                <ClientCard />
            </Flex>
        </Box>
    )
}

export default Card 
