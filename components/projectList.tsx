import { Box, HStack } from "@chakra-ui/react"
import Project from "./project"
import React from 'react'


const projectList = () => {
  return (
    <Box mt={10}>
      <HStack>
        <Project image='' heading='' logos={['']}/>
      </HStack>
    </Box>
  )
}

export default projectList