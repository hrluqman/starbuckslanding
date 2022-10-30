import Image from 'next/image'
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import styles from '../styles/product.module.scss'

const Featured = () => {
    return (  
        <Flex className={styles['featured-container']} flexDirection="column" alignItems="center">
            <Heading as="h2" mb={4} color="blackAlpha.900" fontWeight="bold" textAlign="center">Featured Products</Heading>
            <Flex width="85%" m={4} mt={6} marginInline="auto" justifyContent="space-between" flexWrap="wrap">
                <Box className={styles['featured-img']}>
                    <Image src="/drink-1.png" alt="Drink 1" layout="fill" objectFit="cover" />
                </Box>
                <Box className={styles['featured-img']}>
                    <Image src="/drink-2.png" alt="Drink 2" layout="fill" objectFit="cover" />
                </Box>
                <Box className={styles['featured-img']}>
                    <Image src="/drink-3.png" alt="Drink 3" layout="fill" objectFit="cover" />
                </Box>
                <Box className={styles['featured-img']}>
                    <Image src="/drink-4.png" alt="Drink 4" layout="fill" objectFit="cover" />
                </Box>
            </Flex>
            <Button className={styles['seeMore-button']} mt={6} mb={4} borderRadius={0} paddingInline={10} backgroundColor='white' color="blackAlpha.900">See More</Button>
        </Flex>
    );
}
 
export default Featured;