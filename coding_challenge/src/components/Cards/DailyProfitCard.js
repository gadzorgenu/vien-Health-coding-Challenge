import React from 'react'
import CardHeader from './CardHeader'
import { Box, Image } from '@chakra-ui/react'
import  Graph1 from '../Assets/User Menu/Icons 24/Graph1.png'

const DailyProfitCard = () => {
    
    return (
        <Box borderRadius='10px' borderWidth={1} w={{ sm: "100% ", md:'100%',xl: '70%'}} padding={{ md:2}}  mb={{ sm:5}} mr={{ md:12}}>
           <CardHeader 
                title='Daily Profit'
                my={{ md: 2}}
           />
           <Image src={Graph1} marginTop={{ md:6}}/>
       </Box>
    )
}

export default DailyProfitCard
 