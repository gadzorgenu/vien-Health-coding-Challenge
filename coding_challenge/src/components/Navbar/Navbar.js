import React, {useState}from 'react'
import { Input,Flex, Text} from '@chakra-ui/react'
import Search from './Search'
import MenuButton from '../Button/MenuButton';
import MenuLinks from './MenuLinks'
import NavContainer from './NavContainer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ( ) => setIsOpen(!isOpen)

    return (
        /**
         * py= paddingTop and paddingBottom
         * m= margin
         * w= width
         * h= height
         * bg= background
         */
        <NavContainer >
            <MenuButton toggle={toggle} isOpen={isOpen}/>
            <Flex>
                <Input placeholder='search'  justify={{ base:'center'}} />
                <Flex>
                    <Text> Udwell Now</Text>
                    <Text>Sell a property</Text>
                </Flex>
                {/* <MenuLinks isOpen={isOpen}/> */}
            </Flex>
        </NavContainer>
        // <NavContainer >
        //     <MenuButton toggle={toggle} isOpen={isOpen}/>
        //     <Flex justify='center' bg='white'>
        //         <Flex py='15px' >
        //             <Search/>
        //         <Flex marginTop='px' marginLeft='40%' fontSize='12px'>
        //             <MenuLinks isOpen={isOpen}/>
        //         </Flex>
        //         </Flex>
        //     </Flex>
        // </NavContainer>
    )
}

export default Navbar
