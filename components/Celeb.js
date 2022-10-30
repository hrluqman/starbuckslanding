import Image from 'next/image'
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import styles from '../styles/product.module.scss'

const Celeb = () => {
    return (  
        <Flex className={styles['featured-container']} flexDirection="column" alignItems="center">
            <Heading as="h2" mb={4} color="blackAlpha.900" fontWeight="bold" textAlign="center">By Celebrity Chef</Heading>
            <Flex width="85%" m={4} mt={6} marginInline="auto" justifyContent="space-between" flexWrap="wrap">
                <Box className={styles['celeb-img']}>
                    <Image src="/celeb-1.png" alt="Celebrity Chef 1" layout="fill" objectFit="cover" />
                </Box>
                <Box className={styles['celeb-img']}>
                    <Image src="/celeb-2.png" alt="Celebrity Chef 2" layout="fill" objectFit="cover" />
                </Box>
                <Box className={styles['celeb-img']}>
                    <Image src="/celeb-3.png" alt="Celebrity Chef 3" layout="fill" objectFit="cover" />
                </Box>
            </Flex>
            <Button className={styles['seeMore-button']} mt={6} mb={4} borderRadius={0} paddingInline={10} backgroundColor='white' color="blackAlpha.900">See More</Button>
        </Flex>
    );
}
 
export default Celeb;