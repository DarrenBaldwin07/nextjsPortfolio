import type { NextPage } from 'next'
import { Button, Text, Box, Container, Image as Img } from '@chakra-ui/react'
import Navigation from '../components/navigation'
const Home: NextPage = () => {
  return (
    <Container px={10} maxW='container.xl'>
      <head>
        <title>Darren Baldwin</title>
      </head>
      <Navigation />
    </Container>
  )
}

export default Home
