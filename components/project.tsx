import { Text, Box, HStack, Image as Img, VStack } from '@chakra-ui/react'

interface props {
    image: string
    heading: string
    logos: Array<String>
}
// No need for return types - only do props (according to best practices) - you could do JSX.Element
const project = ({ image, heading, logos }: props) => {
  return (
    <Box w={350} boxShadow='lg' bg='brand.lightGrey' p={4} rounded='lg'>
        <HStack>
            <Box>
              <VStack align='start'>
                <Img rounded='md' src='/images/ebuy.png'/>
                <Text fontSize={24} color='brand.lightGreen'>Ebuy</Text>
              </VStack>
            </Box>
        </HStack>
    </Box>
  )
}

export default project