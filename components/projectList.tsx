import { Box, Flex } from "@chakra-ui/react"
import Project from "./project"
import React from 'react'
import type { logoProps } from '../types/types'

interface project {
  image: string
  heading: string
  text: string
  logos: Array<logoProps>
  link: string
  github: string
}

const projectList = () => {
  const projects: Array<project> = [
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    },
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    },
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    }
  ]
  return (
    <Box mt={10} mb={4}>
      <Flex justifyContent='space-between'>
        {projects.map(({ image, heading, text, logos, link, github}) => (<Project image={image} heading={heading} text={text} logos={logos} link={link} github={github}/>))}
      </Flex>
    </Box>
  )
}

export default projectList