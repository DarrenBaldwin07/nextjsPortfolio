import { Text, Box, HStack, Image as Img, VStack, Heading, Button, Flex, Link, Spacer } from '@chakra-ui/react'
import type { logoProps } from '../types/types'

interface props {
    image: string
    heading: string
    text: string
    logos: Array<logoProps>
    link: string
    github: string
}
// No need for return types - only do props (according to best practices) - you could do JSX.Element
const project = ({ image, heading, text, logos, link, github }: props) => {
  return (
      <Box  border='2px'  borderWidth={0} boxShadow='lg' bg='brand.lightGrey' p={4} rounded='lg' style={{transition: '0.1s'}} _hover={{borderWidth: 2, borderColor: 'brand.lightGreen'}}>
        <Box>
          <Flex w='full' direction='column' h={{base: 'full', md: 425}}>
            <VStack spacing={4} align='start' mb={12}>
              <Img rounded='md' src={image}/>
              <Heading fontSize={24} color='brand.lightGreen'>{heading}</Heading>
              <Text color='white'>{text}</Text>
              <HStack spacing={4}>
                <Text color='white'>Stack:</Text>
                {logos.map(({src, alt}) => (<Img key={alt} w={8} h={8} src={src} alt={alt}/>))}
              </HStack>
            </VStack>
            <HStack marginTop='auto' spacing={10}>
              <Link w='full' href={link} isExternal><Button variant='border' w='full'>Live Site</Button></Link>
              <Box w={14} bg='brand.lightGreen' rounded='full'><Link href={github} isExternal><Img p={1.5} src='images/Github.svg' /></Link></Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
  )
}

export default project