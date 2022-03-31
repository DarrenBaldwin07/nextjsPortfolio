import { Heading, Image as Img, Flex, Button, VStack} from '@chakra-ui/react'

// pages/404.js
const Custom404 = () => {
    return (
        <Flex position='fixed' top='50%' left='50%' transform='translate(-50%, -50%)' minW={300} maxW={500}>
            <VStack spacing='30px' direction='column' align='center'>
                <Img width='full' src='/images/404.svg' alt='page not found'/>
                <Heading textAlign='center' color='white'>This page does not exist.</Heading>
                <Button as='a' href='/' mt={12} width='200px'>Go Back</Button>
            </VStack>
        </Flex>
    )
}
export default Custom404