import { Flex, Text, InputGroup, InputLeftElement, Input, useMediaQuery } from '@chakra-ui/react';
import { FiSearch } from "react-icons/fi";
import Image from 'next/image'

const Navbar = ({showToast}) => {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

    return (  
        <nav className="navbar">
            <Flex justifyContent="space-between">
                <Image src="/Logo.png" alt="Starbucks Logo" width={52} height={52} />
                {isLargerThan800 ?
                <Flex alignItems="center" pl={8}>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Main Menu', 'menuMain')}>Menu</Text>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Coffee Menu', 'menuCoffee')}>Coffee</Text>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Rewards Menu', 'menuRewards')}>Rewards</Text>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Career Menu', 'menuCareer')}>Career</Text>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Responsibility Menu', 'menuRes')}>Responsibility</Text>
                    <Text fontSize='md' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is About Menu', 'menuAbout')}>About Us</Text>
                </Flex> : '' }
                <InputGroup w={40} alignItems="center">
                    <InputLeftElement height="100%"
                    pointerEvents='none'
                    children={<FiSearch color="blackAlpha.900" />}
                    />
                    <Input backgroundColor="whiteAlpha.900" color="blackAlpha.900" borderRadius={12} placeholder='Search' _placeholder={{ opacity: 1, color: 'gray.500' }} size='sm' />
                </InputGroup>
            </Flex>
        </nav>
    );
}
 
export default Navbar;