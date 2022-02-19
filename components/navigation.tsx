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
              <NextLink href='#'><Heading _hover={{cursor: 'pointer'}} color='white'>Work</Heading></NextLink>
              <NextLink href='#'><Heading _hover={{cursor: 'pointer'}} color='white'>Stack</Heading></NextLink>
              <NextLink href='#'><Heading _hover={{cursor: 'pointer'}} color='white'>About</Heading></NextLink>
              <Button rounded='full' px={6}>Contact</Button>
            </HStack>
            <Box display={{md: 'none'}}>
                <Menu>
                  <MenuButton>
                    <Img src='/images/MenuIcon.svg' width={12}/>
                  </MenuButton>
                  <MenuList border='2px' bg="brand.lightGrey" borderColor='brand.lightGreen'>
                    <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><NextLink href='#'>Work</NextLink></MenuItem>
                    <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><NextLink href='#'>Stack</NextLink></MenuItem>
                    <MenuItem _hover={{bg: 'brand.darkGrey'}} _focus={{bg: 'brand.darkGrey'}} color='brand.lightGreen'><NextLink href='#'>About</NextLink></MenuItem>
                  </MenuList>
                </Menu>
            </Box>
        </HStack>
    </Box>
  )
}

export default navigation