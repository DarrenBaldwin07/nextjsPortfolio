import { Text, Box, HStack, Image as Img, VStack, Heading, Button, Flex, Link } from '@chakra-ui/react'
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
      <Box w={{base: 'full', md: 350}} border='2px' borderWidth={0} boxShadow='lg' bg='brand.lightGrey' p={4} rounded='lg' style={{transition: '0.1s'}} _hover={{borderWidth: 2, borderColor: 'brand.lightGreen'}}>
        <Box>
          <VStack align='start' spacing={12}>
            <VStack spacing={4} align='start'>
              <Img rounded='md' src={image}/>
              <Heading fontSize={24} color='brand.lightGreen'>{heading}</Heading>
              <Text color='white'>{text}</Text>
              <HStack>
                <Text color='white'>Stack:</Text>
                {logos.map(({src, alt}) => (<Img key={alt} w={6} src={src} alt={alt}/>))}
              </HStack>
            </VStack>
            <HStack w='full' spacing={10}>
              <Link w='full' href={link} isExternal><Button variant='border' w='full'>Live Site</Button></Link>
              <Box w={14} bg='brand.lightGreen' rounded='full'><Link href={github} isExternal><Img p={1.5} src='images/Github.svg' /></Link></Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
  )
}

export default project