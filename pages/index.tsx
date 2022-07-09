import type { NextPage } from 'next'
import { Text, Box, Container, Heading, VStack, Button, Link, Flex } from '@chakra-ui/react'
import Navigation from '../components/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import SocialsList from '../components/SocialsList'
import Image from 'next/image'
import WorkSection from '../components/WorkSection'
import StackSection from '../components/StackSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
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
                    <Text color='white' my={{base: 4, md: 0}} mr={{base: 'none', md: 4}}>Talk is cheap, show me the code: </Text>
                    <Box display={{base: 'flex', md: 'none'}}>
                      <FontAwesomeIcon size="lg" color='#39BA8C' icon={faArrowDown} />
                    </Box>
                    <Link href='https://github.com/DarrenBaldwin07' isExternal>
                      <Button my={{base: 4, md: 0}} ml={{base: 'none', md: 4}} variant='border' size='lg'>My Work</Button>
                    </Link>
                  </Flex>
                  <SocialsList />
                </VStack>
              </VStack>
              <Box display={{base: 'none', lg: 'flex'}} width={{base: 400, x: 500}}>
                <Image width={500} height={500} src='/images/HeroImg.svg' alt='man coding'/>
              </Box>
            </Box>
          </Box>
          {/* Work Section */} 
          <WorkSection />
          {/* Stack Section */}
          <StackSection /> 
          {/* About Section */}
          <AboutSection />
          {/* Contact Section */}
          <ContactSection />
        </Box>
      </Container>
    </Box>
  )

}
export default Home
