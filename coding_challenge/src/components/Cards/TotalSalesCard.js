import React from 'react'
import { Box } from '@chakra-ui/react'
import CardHeader from './CardHeader'
import { HiOutlineUser } from "react-icons/hi"; 
import Chart from './Chart'


const TotalSalesCard = () => {
    return (
       <Box borderRadius='10px' borderWidth={1}  w={{ md: '30%'}} mr={12}>
           <CardHeader 
            bgColor='#016450' 
            icon={HiOutlineUser} 
            title= 'Total Sales'
            value='+$985.56'
            color='#34AA44'
            />
        <Chart
            color='#016450' 
            value={80}    
            amount='$2,595'   
            status='Invoiced'
            number='23'
            state='Invoices'
        />
       </Box>
    )
}

export default TotalSalesCard
