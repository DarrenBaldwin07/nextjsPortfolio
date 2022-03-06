import { Box, Stack } from "@chakra-ui/react"
import Project from "./project"
import React from 'react'
import type { logoProps } from '../types/types'
import { motion } from "framer-motion"

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
      link: 'https://vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    },
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'https://vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    },
    {
      image: 'images/ebuy.png', 
      heading: 'Ebuy', 
      text: 'Fullstack eccomerce CRUD application.', 
      logos: [{src: 'images/vue.svg', alt: 'vue.js'}, {src: 'images/Tailwind.svg', alt: 'tailwind css'}, {src: 'images/supabase.svg', alt: 'supabase'}],
      link: 'https://vue-crud-neon.vercel.app',
      github: 'https://github.com/Devd0/eBuy'
    }
  ]
  return (
    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ x: -300, opacity: 0 }}  transition={{duration: 0.25, delay: 0.40}}>
      <Box mt={10} mb={4}>
        <Stack direction={{base: 'column', md: 'row'}} spacing={4} justifyContent='space-between' alignItems='center'>
          {projects.map(({ image, heading, text, logos, link, github}) => (<Project key={link} image={image} heading={heading} text={text} logos={logos} link={link} github={github}/>))}
        </Stack>
      </Box>
    </motion.div>
  )
}

export default projectList