import { Box, Text, Image as Img, VStack, Heading, Flex } from "@chakra-ui/react"
import SocialsList from '../components/SocialsList'
const ContactSection = () => {
    return (
        <>
            <Box id='contact' />
            <Box mt={36}>
                <VStack spacing={6}>
                    <Heading fontSize={{base: '35px', md: '45px'}} color='brand.blue'>Lets Connect.</Heading>
                    <Text maxW={500} textAlign='center' color='white'>I am currently open to work as a <Text as='span' color='brand.lightGreen'>Full Stack Developer.</Text> Lets get in touch and discuss some of your latest endeavors.</Text>
                    <SocialsList />
                </VStack>
                <Flex direction='column' mt={36} mb={4} align='center'>
                    <Text fontSize='12x' color='white'>2022 © Darren Baldwin</Text>
                    <Flex>
                        <Text fontSize='12px' color='white'>Built with <Text fontWeight='bold' as='span' color='brand.lightGreen'>Next.js</Text> and <Text as='span' color='brand.lightGreen' fontWeight='bold'>ChakraUI</Text>. Powered By</Text>
                        <Img ml={1} w={12} src='vercel.svg' alt='vercel'/>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default ContactSection