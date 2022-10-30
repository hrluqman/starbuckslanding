import Image from 'next/image'
import { Flex, Heading, Box, Text } from '@chakra-ui/react';
import styles from '../styles/product.module.scss'

const Product = () => {
    return (  
        <Flex className={styles['featured-container']} flexDirection="column" alignItems="center">
            <Heading as="h2" mb={4} color="blackAlpha.900" fontWeight="bold" textAlign="left" width="85%">Our Products</Heading>
            <Flex width="85%" m={4} mt={6} marginInline="auto" justifyContent="space-between" flexWrap="wrap">
                <Box className={styles['product-content']}>
                    <div className={styles['product-img']}>
                        <Image src="/product-1.png" alt="Product 1" layout="fill" objectFit="cover" />
                    </div>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['xl', '3xl']} mt={3} mb={1}>Drinks</Heading>
                    <Text fontSize={['smaller', 'md']}>Amazing coffee and handcrafted beverages to discover and enjoy</Text>
                </Box>
                <Box className={styles['product-content']}>
                    <div className={styles['product-img']}>
                        <Image src="/product-2.png" alt="Product 2" layout="fill" objectFit="cover" />
                    </div>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['xl', '3xl']} mt={3} mb={1}>Foods</Heading>
                    <Text fontSize={['smaller', 'md']}>Made with high-quality, simple ingredients. It is real food and it is simply delicious</Text>
                </Box>
                <Box className={styles['product-content']}>
                    <div className={styles['product-img']}>
                        <Image src="/product-3.png" alt="Product 3" layout="fill" objectFit="cover" />
                    </div>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['xl', '3xl']} mt={3} mb={1}>Snacks</Heading>
                    <Text fontSize={['smaller', 'md']}>These thoughtfully crafted options are wholesome and convenient for both breakfast and lunch.</Text>
                </Box>
                <Box className={styles['product-content']}>
                    <div className={styles['product-img']}>
                        <Image src="/product-4.png" alt="Product 4" layout="fill" objectFit="cover" />
                    </div>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['xl', '3xl']} mt={3} mb={1}>Merchandise</Heading>
                    <Text fontSize={['smaller', 'md']}>The Perfect Drinkware Designed For Any Season” in description.</Text>
                </Box>
            </Flex>
        </Flex>
    );
}
 
export default Product;