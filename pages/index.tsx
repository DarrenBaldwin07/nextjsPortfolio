import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Text, Box, Container, Heading, VStack, Image as Img, HStack, Button, Link, Flex, Spacer} from '@chakra-ui/react'
import Navigation from '../components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import ProjectList from '../components/projectList'
import StackLogo from '../components/stackLogo'
import { motion } from "framer-motion"
import Head from 'next/head'
import SocialsList from '../components/socialsList'
const Home: NextPage = () => {


  useEffect(() => {
    const func = async () => {
      const data = await fetch('/api/hello')
      console.log(await data.json())
    }
    
    func()
  }, [])

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
                    <Link href='https://github.com/Devd0' isExternal>
                      <Button my={{base: 4, md: 0}} ml={{base: 'none', md: 4}} variant='border' size='lg'>My Work</Button>
                    </Link>
                  </Flex>
                  <SocialsList />
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
          <Box mt={36} id='projects'>
            <Heading size='lg' color='brand.blue'>Projects</Heading>
            <ProjectList />
          </Box>
          <Box mt={36} id='stack'>
            <Flex direction={{base: 'column', xl: 'row'}} justify='space-between'>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -300, opacity: 0 }} transition={{duration: 0.25, delay: 0.25}}>
                <VStack align='start' spacing={10}>
                  <Box maxW={300}>
                    <Heading size='xl' color='brand.blue'>Stack</Heading>
                    <Text color='white' mt={2}>The everyday technology stack I use to solve problems.</Text>
                  </Box>
                  <Img display={{base: 'none', xl: 'block'}} h={100} src='images/codeTwo.svg' alt='code'/>
                </VStack>
              </motion.div>
              <HStack flexWrap='wrap' align='start' justify='space-between' spacing={{base: 0, xl: 16}}>
                <StackLogo title='React' img='images/React.svg'/>
                <StackLogo title='Vue.js' img='images/Vue.svg'/>
                <StackLogo title='Typescript' img='images/Typescript.svg'/>
                <StackLogo title='Node.js' img='images/Node.svg'/>
                <StackLogo title='Python' img='images/Python.svg'/>
              </HStack>
            </Flex>
          </Box>
        </Box>
        <Box mt={48} id='about' mb={24}>
          <Flex direction={{base: 'column-reverse', lg: 'row'}} align='center' justify='space-between'>
            <Box maxW={{base: 'full', lg: 500}} bg='brand.lightGrey' borderTopLeftRadius={36} borderBottomRadius='md' borderTopRightRadius='md'>
              <Box h={100} borderTopLeftRadius={36} borderTopRightRadius='md' bgGradient='linear(to-r, brand.lightGreen, brand.blue)'/>
              <Box p={4}>
                <Box position='relative' zIndex={10} top={-50} w={16} rounded='full' bg='brand.darkGrey' p={1}>
                  <Img src='images/Profile.svg' alt='profile picture'/>
                </Box>
                <Box position='relative' bottom={5}>
                  <Flex align='center' justify='space-between'>
                    <VStack align='start' spacing={1}>
                      <Text fontWeight='bold' color='white'>Darren Baldwin</Text>
                      <Text fontWeight='thin' color='brand.lightGreen'>Software Engineer</Text>
                    </VStack>
                    <Link href='/assets/Resume.pdf' isExternal><Button><HStack><Text>Resume</Text><FontAwesomeIcon icon={faDownload} /></HStack></Button></Link>
                  </Flex>
                  <Box mt={4} p={2} border='1px' rounded='md' borderColor='white'>
                    <Text color='white'>From a young age, i have always had an interest in the solving of problems. At the age of eleven, I got introduced to programming at a conference. I started with java, then moved to C#, Swift, Python, HTML/CSS, and Javascript. Currently, I use these technologies every day to solve problems, participate in Hackathons, and create advanced web applications. As the industry continues to grow I can't wait to expand my knowledge and solve more modern problems.</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: 300, opacity: 0 }} transition={{duration: 0.25, delay: 0.5}}>
              <VStack align='start' spacing={10} mr={{base: 0, lg: 12}} mb={{base: 12, lg: 0}}>
                <Box ml={{base: 0, lg: 10}} textAlign={{base: 'center', lg: 'start'}}>
                  <Heading size='xl' color='brand.blue'>About Me</Heading>
                  <Text color='white'>My story, who i am, and what i do.</Text>
                </Box>
                <Img display={{base: 'none', lg: 'block'}} h={100} src='images/codeOne.svg' alt='code' />
              </VStack>
            </motion.div>
          </Flex>
        </Box>
      </Container>
    </Box>
  )

}


export default Home
