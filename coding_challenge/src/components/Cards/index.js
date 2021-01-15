import React from 'react'
import {Box, Flex,Grid, GridItem } from '@chakra-ui/react'
import SalesCard from './SalesCard'
import ClientCard from './ClientCard'
import RevenueCard from './RevenueCard'
import TotalSalesCard from './TotalSalesCard'
import DailyProfitCard from './DailyProfitCard'
import UserOnboardingCard from './UserOnboardingCard'
import DailyActiveCard  from './DailyActiveCard'
     
const Card = () => {

    return (
        <Box padding='15px'>
            <Flex justify='center'>
                <SalesCard />
                <RevenueCard />
                <ClientCard />
            </Flex>
            <Flex mx={{ md: '35px'}} mt={{ md: '3%'}}>
                <TotalSalesCard />
                <DailyProfitCard/>
            </Flex>
            <Flex mx={{ md: '35px'}} mt={{ md: '3%'}}>
                <DailyActiveCard/>
                <UserOnboardingCard />
            </Flex>
        </Box>
    )
}

export default Card 
