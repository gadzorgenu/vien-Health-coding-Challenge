import React from 'react'
import {Box, Flex, Grid } from '@chakra-ui/react'
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
            <Grid justify='center' w={{ md:'33 33 33'}} templateColumns={{sm: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={4}>
                <SalesCard />
                <RevenueCard />
                <ClientCard />
            </Grid>
            <Flex mx={{ md: '35px'}} direction={{ xs:'column',sm: "column", xl : "row"}} mt={{ md: '3%'}}>
                <TotalSalesCard />
                <DailyProfitCard/>
            </Flex>
            <Flex mx={{ md: '35px'}} mt={{ md: '3%'}} direction={{ sm: "column", xl : "row"}}>
                <DailyActiveCard />
                <UserOnboardingCard />
            </Flex>
        </Box>
    )
}

export default Card 
