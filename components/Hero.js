import Navbar from "./Navbar";
import Image from 'next/image'
import { Flex, Box, Heading, Text, Button, useToast, useMediaQuery } from '@chakra-ui/react';

const Hero = () => {
    const toast = useToast();
    const [isSmallerThan600] = useMediaQuery('(min-width: 600px)');

    const showToast = (title, id) => {
        if (!toast.isActive(id)) {
            toast({
                id,
                title: title,
                status: 'info',
                duration: 1000,
                isClosable: true,
            });
        }
    }

    return (  
        <div className="hero-container">
            <Navbar showToast={showToast} />
            <main className="hero-content">
                <Flex flexDirection={['column', 'row']} justifyContent="space-between" alignItems="center">
                    <Box w={['100%','100%','55%']}>
                        <Heading as='h2' size={{base:'3xl', lg:'4xl'}} color='blackAlpha.900'>Mocha Frappucino</Heading>
                        <Text mt={3} lineHeight={6} pr={8} color='blackAlpha.900' textAlign='justify' fontWeight='semibold' fontFamily='"Saira Semi Condensed", sans-serif'>If making the most of sunny weather is a priority for you in the summer, 
                            this delicious, decadent coffee with rich mocha-flavored sauce blended with milk and ice should come to mind.
                        </Text>
                        <Heading as='h3' mt={3} size={{base:'lg', lg:'xl'}} fontWeight='semibold' color='blackAlpha.900' fontFamily='"Saira Semi Condensed", sans-serif'>Pick Your Size</Heading>
                        <Flex>
                            <Text className="size-arc" m={3} ml={0} fontSize={{base:'md', lg:'2xl'}} lineHeight={6} color='blackAlpha.900' textAlign='center' fontWeight='semibold' fontFamily='"Saira Semi Condensed", sans-serif' borderRadius="50%" display="flex" justifyContent="center" alignItems="center" onClick={()=>showToast('Ordering size S', 'OrderS')}>S</Text>
                            <Text className="size-arc" m={3} fontSize={{base:'md', lg:'2xl'}} lineHeight={6} color='blackAlpha.900' textAlign='center' fontWeight='semibold' fontFamily='"Saira Semi Condensed", sans-serif' borderRadius="50%" display="flex" justifyContent="center" alignItems="center" onClick={()=>showToast('Ordering size M', 'OrderM')}>M</Text>
                            <Text className="size-arc" m={3} fontSize={{base:'md', lg:'2xl'}} lineHeight={6} color='blackAlpha.900' textAlign='center' fontWeight='semibold' fontFamily='"Saira Semi Condensed", sans-serif' borderRadius="50%" display="flex" justifyContent="center" alignItems="center" onClick={()=>showToast('Ordering size L', 'OrderL')}>L</Text>
                        </Flex>
                        <Button className="order-btn" mt={3} mb={[6,0]} fontSize={{base:'sm', lg:'md'}} pl={10} pr={10} borderRadius={0} size='lg' onClick={()=>showToast('Order Now Button', 'Order')} color='whiteAlpha.900'>Order Now</Button>
                    </Box>
                    <Flex flexDirection="column" alignItems="center">
                        <Box w={['100%','100%','90%']} position="relative" display="flex" justifyContent="center" alignItems="center">
                            <div className="gradient-circle">
                            </div>
                            <Image src="/Cover.png" alt="Starbucks Cover" className="starbucks-cover" width={isSmallerThan600 ? 380 : 280} height={isSmallerThan600 ? 440 : 340} />  
                        </Box>
                        <Flex>
                            <Box ml={4} mr={4} position="relative" display="flex" justifyContent="center" alignItems="center">
                                <div className="gradient-white">
                                </div>
                                <Image src="/menu-1.png" alt="Starbucks Menu" className="starbucks-menu" width={85} height={100} onClick={()=>showToast('Menu 1', 'Menu1')} />  
                            </Box>
                            <Box ml={4} mr={4} position="relative" display="flex" justifyContent="center" alignItems="center">
                                <div className="gradient-white">
                                </div>
                                <Image src="/menu-2.png" alt="Starbucks Menu" className="starbucks-menu" width={85} height={100} onClick={()=>showToast('Menu 2', 'Menu2')} />  
                            </Box>
                            <Box ml={4} mr={4} position="relative" display="flex" justifyContent="center" alignItems="center">
                                <div className="gradient-white">
                                </div>
                                <Image src="/menu-3.png" alt="Starbucks Menu" className="starbucks-menu" width={85} height={100} onClick={()=>showToast('Menu 3', 'Menu3')} />  
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </main>
        </div>
    );
}
 
export default Hero;