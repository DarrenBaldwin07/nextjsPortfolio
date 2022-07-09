import { 
  Box, 
  HStack, 
  Button, 
  Heading, 
  Spacer,   
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image as Img,
  type BoxProps,
  Container
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

export const MotionBox = motion<BoxProps>(Box)

const Navigation: NextPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [state, setState] = useState()

  return (
    <Box position='fixed' zIndex={2} top={0} py={4} bg={scrollY > 10 ? 'brand.darkGrey' : ''}  opacity={scrollY > 10 ? 1 : 1} width='full'>
      <Container px={10} maxW='container.xl'>
        <Box>
          <HStack>
              <Heading variant='primary'>Darren Baldwin</Heading>
              <Spacer />
              <HStack display={{sm: 'none', md: 'flex'}} spacing={14}>
                <NextLink href='#projects'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>Work</Heading></motion.a></NextLink>
                <NextLink href='#stack'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>Stack</Heading></motion.a></NextLink>
                <NextLink href='#about'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>About</Heading></motion.a></NextLink>
                <Button onClick={() => window.scrollTo(0, 3000)} rounded='full' px={6}>Contact</Button>
              </HStack>
              <Box display={{md: 'none'}}>
                  <Menu>
                    <MenuButton>
                      <Img src='/images/MenuIcon.svg' width={12}/>
                    </MenuButton>
                    <MenuList bg='brand.lightGrey' border='2px' borderColor='brand.lightGreen'>
                      <NextLink href='#projects'><MenuItem onClick={() => window.scrollTo(0, 950)} _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'>Work</MenuItem></NextLink>
                      <NextLink href='#stack'><MenuItem onClick={() => window.scrollTo(0, 950)} _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'>Stack</MenuItem></NextLink>
                      <NextLink href='#about'><MenuItem onClick={() => window.scrollTo(0, 950)} _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'>About</MenuItem></NextLink>
                      <NextLink href='#contact'><MenuItem onClick={() => window.scrollTo(0, 950)} _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'>Contact</MenuItem></NextLink>
                    </MenuList>
                  </Menu>
              </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
    
   
  )
}

export default Navigation