import { Text, Box, VStack, Image as Img, Heading, Flex } from '@chakra-ui/react'
import ProjectList from '../components/ProjectList'
import { motion } from "framer-motion"
import Image from 'next/image'
const WorkSection = () => {
    return (
        <Box>
            <Box mt={{base: 12, md: 36}}>
                <Flex justifyContent={{base: 'center', md: 'space-between'}} alignItems='center'>
                    <Image width={500} height={500} src='/images/subHero.svg' alt='code window'/>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 300, opacity: 0 }} transition={{duration: 0.25, delay: 0.25}}>
                        <VStack spacing={10} display={{base: 'none', md: 'block'}}>
                            <Box maxW={300} ml={{base: 0, lg: 10}}>
                                <Heading size='xl' color='brand.blue'>My Work</Heading>
                                <Text display={{base: 'none', lg: 'flex'}} color='white' mt={2}>Bellow is a list of projects that i've worked on.</Text>
                            </Box>
                            <Img h={150} display={{base: 'none', xl: 'block'}} src='images/codeOne.svg' alt='code'/>
                        </VStack>
                    </motion.div>
                </Flex>
            </Box>
            <Box id='projects' />
            <Box mt={36}>
                <Heading size='lg' color='brand.blue'>Projects</Heading>
                <ProjectList />
            </Box>
        </Box>
    )
}

export default WorkSection