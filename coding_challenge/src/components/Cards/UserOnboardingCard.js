import React from 'react'
import { Box } from '@chakra-ui/react'
import CardHeader from './CardHeader'
import { HiOutlineUser } from "react-icons/hi"; 
import Chart from './Chart'


const UserOnboardingCard = () => {
    return (
       <Box borderRadius='10px' borderWidth={1}  w={{ sm: "100%",md:'70%', xl: '40%'}} mt={{ sm:'5%', md:0, xl:0 }} mr={12}>
           <CardHeader 
            bgColor='#FACF55' 
            icon={HiOutlineUser} 
            title= 'User Onboarding'
            value='G3 Goal: 8000 User'
            />
        <Chart
            color='#FACF55' 
            value={30}    
            amount='2,452'   
            status='ONBOARDED'
        />
       </Box>
    )
}

export default UserOnboardingCard
