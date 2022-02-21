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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import type { NextPage } from 'next'

export const MotionBox = motion<BoxProps>(Box)

const navigation: NextPage = () => {
  return (
    <Box mt={6}>
        <HStack>
            <Heading variant='primary'>Darren Baldwin</Heading>
            <Spacer />
            <HStack display={{sm: 'none', md: 'flex'}} spacing={14}>
              <NextLink href='#hello'><motion.a whileHover={{ y: -3 }}><Heading px={4} py={1} _hover={{cursor: 'pointer', border: '2px', rounded: 'full', borderColor: 'brand.lightGreen'}} color='white'>Work</Heading></motion.a></NextLink>
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
  )
}

export default navigation