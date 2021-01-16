import React from 'react'
import CardHeader from './CardHeader'
import { Box, Image } from '@chakra-ui/react'
import  graph2 from '../Assets/User Menu/Icons 24/graph2.png'


const DailyActiveCard = ({mr}) => {
    return (
        <Box borderRadius='10px' borderWidth={1} w={{ sm: "100% ", md:'100%',xl: '60%'}} padding={{ md:2}} mb={{ sm:5}} mr={{ md:12}}>
           <CardHeader 
           title='Daily active clients'
           />
           <Image src={graph2} marginTop={{ md:6}}/>
       </Box>
    )
}

export default DailyActiveCard
