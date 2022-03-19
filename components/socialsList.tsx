import { Text, Box, VStack, Image as Img, Heading, Flex, HStack } from '@chakra-ui/react'
import { motion } from "framer-motion"
import StackLogo from './StackLogo'
const StackSection = () => {
    return (
        <>
            <Box id='stack' />
            <Box mt={36}>
                <Flex direction={{base: 'column', xl: 'row'}} justify='space-between'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -300, opacity: 0 }} transition={{duration: 0.25, delay: 0.25}}>
                        <VStack align='start' spacing={10}>
                            <Box maxW={300}>
                                <Heading size='xl' color='brand.blue'>Stack</Heading>
                                <Text color='white' mt={2}>The everyday technology stack I use to solve problems.</Text>
                            </Box>
                            <Img display={{base: 'none', xl: 'block'}} h={100} src='images/codeTwo.svg' alt='code'/>
                        </VStack>
                    </motion.div>
                    <HStack flexWrap='wrap' align='start' justify='space-between' spacing={{base: 0, xl: 16}}>
                        <StackLogo title='React' img='images/React.svg'/>
                        <StackLogo title='Vue.js' img='images/vue.svg'/>
                        <StackLogo title='Typescript' img='images/Typescript.svg'/>
                        <StackLogo title='Node.js' img='images/Node.svg'/>
                        <StackLogo title='Python' img='images/Python.svg'/>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

export default StackSection