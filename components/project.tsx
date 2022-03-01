import { Text, Box, HStack, Image as Img, VStack, Heading, Button, Flex, Link } from '@chakra-ui/react'
import type { logoProps } from '../types/types'
import { motion } from "framer-motion"

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
    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -300, opacity: 0 }}  transition={{duration: 0.25, delay: 0.40}}>
      <Box w={350} boxShadow='lg' bg='brand.lightGrey' p={4} rounded='lg'>
        <Box >
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
    </motion.div>
  )
}

export default project