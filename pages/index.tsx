import type { NextPage } from 'next'
import { Text, Box, Container, Heading, VStack, Image as Img, HStack, Button, Link, Flex} from '@chakra-ui/react'
import Navigation from '../components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ProjectList from '../components/projectList'
import { motion } from "framer-motion"
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <Box overflow='hidden'>
      <Head>
        <title>Darren Baldwin</title>
      </Head>
      <Navigation />
      <Container px={10} maxW='container.xl'>
        <Box>
          <Box mt={{base: 36, lg: 24}}>
            <Box display='flex' justifyContent={{base: 'center', lg:'space-between'}} alignItems='center'>
              <VStack align={{base: 'center', lg: 'start'}} spacing={12}>
                <VStack spacing={5} align={{base: 'center', lg:'start'}} maxW={500}>
                  <Heading size='lg' color='white'>Hey There!</Heading>
                  <Heading fontSize={{base: '30px', md: '45px'}} color='brand.blue'>I'm Darren Baldwin,</Heading>
                  <Text color='white' textAlign={{base: 'center', lg: 'start'}}><Text as='span' color='brand.lightGreen'>Software Engineer. </Text>I solve problems with code, specifically on Web and Mobile.</Text>
                </VStack>
                <VStack align={{base: 'center', lg:'start'}}>
                  <Flex flexDirection={{base: 'column', md: 'row'}} align='center' justifyContent='center'>
                    <Text color='white' my={{base: 4, md: 0}} mr={{base: 'none', md: 4}}>Talk is cheap, show me the code</Text>
                    <Box display={{base: 'none', md: 'flex'}}>
                      <FontAwesomeIcon size="lg" color='#39BA8C' icon={faArrowRight} />
                    </Box>
                    <Box display={{base: 'flex', md: 'none'}}>
                      <FontAwesomeIcon size="lg" color='#39BA8C' icon={faArrowDown} />
                    </Box>
                    <Button my={{base: 4, md: 0}} ml={{base: 'none', md: 4}} variant='border' size='lg'>My Work</Button>
                  </Flex>
                  <HStack spacing={5}>
                    <Box width={8} height={8} rounded='full' bg='brand.lightGreen'><Link href='https://github.com/Devd0' isExternal><Img p={1.5} src='/images/Github.svg' alt='github'/></Link></Box>
                    <Box width={8} height={8} rounded='full' bg='brand.lightGreen'><Link href='#' isExternal><Img p={1.5} src='/images/Twitter.svg' alt='Twitter'/></Link></Box>
                    <Box width={8} height={8} rounded='full' bg='brand.lightGreen'><Link href='https://www.linkedin.com/in/real-darren-baldwin/' isExternal><Img p={1.5} src='/images/LinkedIn.svg' alt='LinkedIn'/></Link></Box>
                  </HStack> 
                </VStack>
              </VStack>
              <Img display={{base: 'none', lg: 'flex'}} width={{base: 400, x: 500}} src='/images/HeroImg.svg' alt='man coding'/>
            </Box>
          </Box>
          <Box mt={36}>
            <Flex justifyContent={{base: 'center', md: 'space-between'}} alignItems='center'>
              <Img width={500} src='/images/subHero.svg' alt='code window'/>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 300, opacity: 0 }} transition={{duration: 0.25, delay: 0.25}}>
                <VStack spacing={10} display={{base: 'none', md: 'block'}}>
                  <Box maxW={300} ml={{base: 0, lg: 10}}>
                    <Heading size='xl' color='brand.blue'>My Work</Heading>
                    <Text display={{base: 'none', lg: 'flex'}} color='white' mt={2}>Bellow is a list of projects that i've worked on.</Text>
                  </Box>
                  <Img h={150} display={{base: 'none', xl: 'block'}} src='images/codeOne.svg' alt='code'/>
                </VStack>
              </motion.div>
            </Flex>
          </Box>
          <Box mt={24} id='projects'>
            <Heading size='lg' color='brand.blue'>Projects</Heading>
            <ProjectList />
          </Box>
        </Box>
      </Container>
    </Box>
    
  )
}

export default Home
