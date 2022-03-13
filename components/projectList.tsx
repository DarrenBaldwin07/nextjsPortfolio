import { Box, Stack } from "@chakra-ui/react"
import Project from "./project"
import React from 'react'
import { motion } from "framer-motion"
import projects from '../data/projects'

const projectList = () => {
  
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