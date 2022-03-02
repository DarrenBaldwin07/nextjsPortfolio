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
import NextLink from "next/link"
import type { NextPage } from 'next'

export const MotionBox = motion<BoxProps>(Box)

const navigation: NextPage = () => {
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

  return (
    <Box position='fixed' zIndex={2} top={0} py={4} bg={scrollY > 10 ? 'brand.darkGrey' : ''}  opacity={scrollY > 10 ? 1 : 1} width='full'>
      <Container px={10} maxW='container.xl'>
        <Box>
          <HStack>
              <Heading variant='primary'>Darren Baldwin</Heading>
              <Spacer />
              <HStack display={{sm: 'none', md: 'flex'}} spacing={14}>
                <NextLink href='#projects'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>Work</Heading></motion.a></NextLink>
                <NextLink href='#'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>Stack</Heading></motion.a></NextLink>
                <NextLink href='#'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>About</Heading></motion.a></NextLink>
                <Button rounded='full' px={6}>Contact</Button>
              </HStack>
              <Box display={{md: 'none'}}>
                  <Menu>
                    <MenuButton>
                      <Img src='/images/MenuIcon.svg' width={12}/>
                    </MenuButton>
                    <MenuList bg='brand.lightGrey' border='2px' borderColor='brand.lightGreen'>
                      <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><a href='#'>Work</a></MenuItem>
                      <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><a href='#'>Stack</a></MenuItem>
                      <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><a href='#'>About</a></MenuItem>
                    </MenuList>
                  </Menu>
              </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
    
   
  )
}

export default navigation