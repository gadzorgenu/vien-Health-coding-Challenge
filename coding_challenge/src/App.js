import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Box, Grid,GridItem,Text, Flex,Icon,Input, Button} from '@chakra-ui/react'
import UserProfile from './components/SideBar/user-profile'
import AboutUser from './components/SideBar/about-user'
import Card from './components/Cards/index'
import Footer from './components/Footer/index'
import { HiOutlineUser, FaHands, HiOutlineChatAlt2 } from "react-icons/hi"; 
import { FaRegCopy } from 'react-icons/fa'

const App = () => {

  // const aboutUser = [
  //   {
  //     id: 1,
  //     title: 'Profile',
  //     // icon: <HiOutlineUser size={35} />
  //   },
  //   // {
  //   //   id:2,
  //   //   title: ' My listings',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:3,
  //   //   title: 'Saved homes',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:4,
  //   //   title: 'Saved search',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:5,
  //   //   title: 'Messages',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:6,
  //   //   title: 'Notifications',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:7,
  //   //   title: 'Billing',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:8,
  //   //   title: 'Analytics',
  //   //   icon: ''
  //   // },
  //   // {
  //   //   id:9,
  //   //   title: 'Blog',
  //   //   icon: ''
  //   // },
  // ]

  return (
    <Box bgColor='gray.200'>
      <Navbar/>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mx={{ md: '5%'}}
        my={{ md: '5%'}}
      >
        <GridItem rowSpan={{ md:2}} colSpan={{ md:1}} background='white' borderRadius={{ md: '5px'}} >
         <Box textAlign='center'>
            <UserProfile 
              name='Alex Assenmacher'
              role='Home Buyer'
            />
            <Button bg="#016450" color='white'>Edit Profile</Button>
         </Box>
          {/* {
            aboutUser.map((e, item) => (
              <AboutUser 
                key={item.id}
                title={item.title}
              />
            ))
          } */}
          <AboutUser title='Profile'/>
          <Box mx={{ md:8}} mt={{ md: 4}}>
            <Text fontSize={{md: '13px'}}>Profile link</Text>
            <Flex >
              <Input placeholder='www.udwell.com/' borderRightRadius ='none'/>
              <Flex 
                    as='button'
                    bgColor='none' 
                    justify='center' 
                    width='18%'
                    height='40px'
                    borderWidth={{ md: 1}}
                    borderRightRadius ={4}
                >
                <Icon as={FaRegCopy} color='black' my={3} />
                </Flex>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={{ md:3}} background ='white'>
          <Card />
        </GridItem>
      </Grid>
          <Footer/>
    </Box>
  );
}

export default App
