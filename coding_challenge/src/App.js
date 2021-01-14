import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Box, Grid, GridItem} from '@chakra-ui/react'
import UserProfile from './components/SideBar/user-profile'

const App = () => {
  const user =[
    {
      name: 'Alex Assenmacher',
      role: 'Home Buyer'
    }
  ]
  return (
    <Box bgColor='gray.200'>
      <Navbar/>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mx={{ md: '5%'}}
        my={{ md: '5%'}}
      >
        <GridItem rowSpan={{ md:2}} colSpan={{ md:1}} background='white' borderRadius={{ md: '5px'}}>
          <UserProfile name={user.name} role={user.role}/>
        </GridItem>
        <GridItem colSpan={{ md:3}} background ='white' />
      </Grid>
    </Box>
  );
}

export default App
