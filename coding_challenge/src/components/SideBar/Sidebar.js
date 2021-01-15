import React from 'react'
import {Box, Button, Icon,Text,Flex,Input, Divider} from '@chakra-ui/react'
import UserProfile from './user-profile'
import AboutUser from './about-user'
import { FaRegCopy } from 'react-icons/fa'
import User from '../Assets/User Menu/Icons 24/User.png'
import Listing from '../Assets/User Menu/Icons 24/Listing.png'
import Home from '../Assets/User Menu/Icons 24/Saved-homes.png'
import Blog from '../Assets/User Menu/Icons 24/Blog.png'
import Notification from '../Assets/User Menu/Icons 24/Notifications.png'
import Billing from '../Assets/User Menu/Icons 24/Billing.png'
import Analytics from '../Assets/User Menu/Icons 24/Analytics.png'
import Search from '../Assets/User Menu/Icons 24/Saved-search.png'
import Messages from '../Assets/User Menu/Icons 24/Messages.png'

const Sidebar = () => {

    const aboutUser = [
    {
      id: 1,
      title: 'Profile',
      image: User ,
      font: 'bold'
    },
    {
        id: 2,
        title: 'My listing',
        image: Listing 
      },
      {
        id: 3,
        title: 'Saved homes',
        image: Home 
      },
      {
        id: 4,
        title: 'Saved search',
        image: Search 
      },
      {
        id: 5,
        title: 'Messages',
        image: Messages 
      },
      {
        id: 6,
        title: 'Notifications',
        image: Notification 
      },
      {
        id: 7,
        title: 'Billing',
        image: Billing 
      },
      {
        id: 8,
        title: 'Analytics',
        image: Analytics 
      },
      {
        id: 8,
        title: 'Blog',
        image: Blog 
      }
  ]
    return (
        <Box >

            <Box textAlign='center'>
                <UserProfile 
                  name='Alex Assenmacher'
                  role='Home Buyer'
                />
                <Button bg="#016450" color='white' _hover={{ textDecoration: 'none'}}>Edit Profile</Button>
             </Box>
              {
                aboutUser.map((item) => (
                    <Box>
                  <AboutUser 
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    />
                  </Box>
                ))
              }
              <Box mx={{ md:10}} mt={{ md: 4}}>
                <Divider orientation='horizontal'/>
                <Box mt={{ md: 3}}>
                    <Text fontSize={{md: '13px'}} fontWeight='bold'>Profile link</Text>
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
          </Box>
        </Box>
    )
}

export default Sidebar
