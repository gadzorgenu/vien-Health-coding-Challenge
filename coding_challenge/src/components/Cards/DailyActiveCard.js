import React from 'react'
import CardHeader from './CardHeader'
import { Box } from '@chakra-ui/react'

const DailyActiveCard = ({mr}) => {
    return (
        <Box borderRadius='10px' borderWidth={1} w={{ sm: "100% ", md:'100%',xl: '60%'}} mb={{ sm:5}} mr={{ md:12}}>
           <CardHeader 
           title='Daily active clients'
           />
       </Box>
    )
}

export default DailyActiveCard
