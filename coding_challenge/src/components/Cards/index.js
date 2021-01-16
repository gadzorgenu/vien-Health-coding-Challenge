import React from 'react'
import {Box, Flex, Grid,Image,Progress } from '@chakra-ui/react'
import TotalSalesCard from './TotalSalesCard'
import DailyProfitCard from './DailyProfitCard'
import UserOnboardingCard from './UserOnboardingCard'
import DailyActiveCard  from './DailyActiveCard'
import CardInfo from './Card'
import barGraph from '../Assets/User Menu/Icons 24/barGraph.png'
     
const Card = () => {

    return (
        <Box padding='15px'>
            <Grid justify='center' w={{ md:'33 33 33'}} templateColumns={{sm: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap={4}>
                <CardInfo
                     title='Sales'
                     label='Monthly Goal'
                     value='98.1%'
                     percentage='+6.9%'
                     color='#348373'
                     duration='Yearly Goal'
                     chart= {<Progress colorScheme="green" size="sm" value={60} rounded='lg' />}
                />
                <CardInfo
                    title='Revenue'
                    label='Total Profit'
                    value='$13,893'          
                    percentage='+11.3%'
                    color='#FF8433'      
                    chart={<Image src={ barGraph}/>}
                />
                <CardInfo
                     title='Clients'
                     label='Subscribed'
                     value='1,232'
                     percentage='+3.2%'
                     color='#348373'
                     duration='Yearly Goal'
                     chart= {<Progress colorScheme="green" size="sm" value={60} rounded='lg' />}
                />
            </Grid>
            <Flex mx={{ md: '35px'}} direction={{ sm: "column", xl : "row"}} mt={{ md: '3%'}}>
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
