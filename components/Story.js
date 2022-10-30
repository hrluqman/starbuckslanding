import Image from 'next/image'
import { Flex, Heading, Text } from '@chakra-ui/react';
import styles from '../styles/product.module.scss'

const Story = () => {
    return (  
        <Flex className={styles['featured-container']} flexDirection="column" alignItems="center">
            <Heading as="h2" mb={4} color="blackAlpha.900" fontWeight="bold" textAlign="left" width="85%">Our Story</Heading>
            <Flex className={styles['story-content']} width='85%' alignItems='flex-end' m={4} mb={[0,6]}>
                <div className={styles['story-img']}>
                    <Image src="/story-1.png" alt="Story 1" layout="fill" objectFit="cover" />
                </div>
                <Flex flexDirection='column' className={styles['story-desc']} backgroundColor='white' mb={2}>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['lg', 'xl']} mt={3} mb={2}>Hit the road with these unique Starbucks stores</Heading>
                    <Text fontSize={['xs', 'sm']} mb={3}>October 20, 2022</Text>
                    <Text fontSize={['sm', 'md']}>Summer is upon us, and whether you’re planning an epic cross-country adventure or exploring a little closer to home - sometimes getting there is half of the fun...</Text>
                </Flex>
            </Flex>
            <Flex className={styles['story-content']} width='85%' alignItems='flex-end' m={4} mb={[0,6]}>
                <div className={styles['story-img']}>
                    <Image src="/story-2.png" alt="Story 2" layout="fill" objectFit="cover" />
                </div>
                <Flex flexDirection='column' className={styles['story-desc']} backgroundColor='white' mb={2}>
                    <Heading as="h4" fontFamily='"Sen", sans-serif' fontSize={['lg', 'xl']} mt={3} mb={2}>Starbucks brews up a recipe for making retail change faster</Heading>
                    <Text fontSize={['xs', 'sm']} mb={3}>August 21, 2022</Text>
                    <Text fontSize={['sm', 'md']}>Traditional retailers now face a daunting array of challenges – from applying new and unfamiliar technologies, to meeting the rapidly evolving needs of customers and their employees...</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
 
export default Story;
