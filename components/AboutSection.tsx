import { Text, Box, VStack, Image as Img, Heading, Flex, Button, HStack, Link } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const AboutSection = () => {
    return (
        <>
        <Box id='about' />
        <Box mt={48}>
            <Flex direction={{base: 'column-reverse', lg: 'row'}} align='center' justify='space-between'>
                <Box maxW={{base: 'full', lg: 500}} bg='brand.lightGrey' borderTopLeftRadius={36} borderBottomRadius='md' borderTopRightRadius='md'>
                    <Box h={100} borderTopLeftRadius={36} borderTopRightRadius='md' bgGradient='linear(to-r, brand.lightGreen, brand.blue)'/>
                    <Box p={4}>
                        <Box position='relative' top={-50} w={16} rounded='full' bg='brand.darkGrey' p={1}>
                            <Img src='images/Profile.svg' alt='profile picture'/>
                        </Box>
                        <Box position='relative' bottom={5}>
                            <Flex align='center' justify='space-between'>
                                <VStack align='start' spacing={1}>
                                    <Text fontWeight='bold' color='white'>Darren Baldwin</Text>
                                    <Text fontWeight='thin' color='brand.lightGreen'>Software Engineer</Text>
                                </VStack>
                                <Link href='/assets/Resume.pdf' isExternal><Button><HStack><Text>Resume</Text><Box width={4}><FontAwesomeIcon icon={faDownload} /></Box></HStack></Button></Link>
                            </Flex>
                            <Box mt={4} p={2} border='1px' rounded='md' borderColor='white'>
                                <Text color='white'>I have always enjoyed the thrill of solving problems. In 2014, I got introduced to programming at a conference. I started with java, then moved to C#, Swift, Python, HTML/CSS, and Javascript. I use these technologies every day to solve problems, participate in Hackathons, and create advanced web applications. As the industry continues to grow, I'm excited to expand my knowledge and solve more modern problems.</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 300, opacity: 0 }} transition={{duration: 0.25, delay: 0.5}}>
                    <VStack align='start' spacing={10} mr={{base: 0, lg: 12}} mb={{base: 12, lg: 0}}>
                        <Box ml={{base: 0, lg: 10}} textAlign={{base: 'center', lg: 'start'}}>
                            <Heading size='xl' color='brand.blue'>About Me</Heading>
                            <Text color='white'>My story, who i am, and what i do.</Text>
                        </Box>
                        <Img display={{base: 'none', lg: 'block'}} h={100} src='images/codeOne.svg' alt='code' />
                    </VStack>
                </motion.div>
            </Flex>
        </Box>
        </>
    )
}
export default AboutSection