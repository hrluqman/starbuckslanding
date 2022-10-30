import Image from 'next/image'
import { Flex, Text, useToast } from '@chakra-ui/react';
import styles from '../styles/footer.module.scss'

const Footer = () => {
    const toast = useToast();

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
        <Flex className={styles['footer-container']} flexDirection="column" alignItems="center" mt={6}>
            <div className={styles['footer-logo-img']}>
                <Image src="/Logo.png" alt="Starbucks Logo" layout="fill" objectFit="cover" />
            </div>
            <div className={styles['footer-name-img']}>
                <Image src="/starbucks.png" alt="Starbucks Name Logo" layout="fill" objectFit="cover" />
            </div>
            <Flex width='85%' justifyContent={['center', 'center', 'space-between']} mt={4}>
                <Flex justifyContent='space-between' className={styles['footer-menu']}>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Main Menu', 'menuMain')}>Menu</Text>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Coffee Menu', 'menuCoffee')}>Coffee</Text>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Rewards Menu', 'menuRewards')}>Rewards</Text>
                </Flex>
                <Flex justifyContent='space-between' ml={[0,0,12]}>
                    <div className={styles['footer-social-icon']}><Image src="/facebook.png" alt="Facebook Icon" layout="fill" objectFit="cover" /></div>
                    <div className={styles['footer-social-icon']}><Image src="/twitter.png" alt="Twitter Icon" layout="fill" objectFit="cover" /></div>
                    <div className={styles['footer-social-icon']}><Image src="/instagram.png" alt="Instagram Icon" layout="fill" objectFit="cover" /></div>
                </Flex>
                <Flex justifyContent='space-between' className={styles['footer-menu']}>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Career Menu', 'menuCareer')}>Career</Text>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is Responsibility Menu', 'menuRes')}>Responsibility</Text>
                    <Text fontSize='xs' cursor="pointer" fontWeight="semibold" color="blackAlpha.900" ml={3} mr={3} onClick={()=>showToast('This is About Menu', 'menuAbout')}>About Us</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
 
export default Footer;