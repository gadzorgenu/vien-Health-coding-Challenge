import React from 'react'
import {Box, Flex, Text, Heading, Progress } from '@chakra-ui/react'

const RevenueCard = () => {
    return (
      <Box borderRadius='10px' w={{ md: '100%'}} mr={{ md: '3%'}} p={{ md: 6}} borderWidth={1}>
      <Flex fontSize={{md:'15px'}} justify='space-between'>
          <Text fontWeight='bold' >Clients</Text>
          <Text>Total Profit</Text>
      </Flex>
      <Flex my={{ md:'20px'}} justify='space-between'>
          <Heading fontSize='30px'>$13,893</Heading>
          <Text mt='4%' color='#FF8433'>+11.2%</Text>
      </Flex>
  </Box>
    )
}

export default RevenueCard
