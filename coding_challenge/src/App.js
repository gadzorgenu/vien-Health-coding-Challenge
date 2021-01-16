import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Box, Grid,GridItem} from '@chakra-ui/react'
import Sidebar from './components/SideBar/Sidebar'
import Card from './components/Cards/index'
import Footer from './components/Footer/index'

const App = () => {
    document.title = 'Coding Challenge'
  return (
    <Box bgColor='gray.200'>
      <Navbar/>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={{ md: "repeat(4, 1fr)"}}
        gap={4}
        mx={{ md: '5%'}}
        my={{ md: '2%'}}
       
      >
        <GridItem rowSpan={{ md:2}} colSpan={{ md:1}} h={{ md: '100%'}} background='white' borderRadius={{ md: '5px'}} >
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ md:3}} background ='white' p={{ md:4}}>
          <Card />
        </GridItem>
      </Grid>
          <Footer/>
    </Box>
  );
}

export default App
