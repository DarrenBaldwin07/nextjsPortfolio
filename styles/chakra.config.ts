import { extendTheme, theme as Theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { buttonStyles as Button } from './components/buttonStyles'
import { headerStyles as Heading } from './components/headerStyles'
const breakpoints = createBreakpoints({
  sm: '10em',
  md: '50em',
  lg: '62em',
  x: '70em',
  xl: '80em',
  '2xl': '96em',
})

const colors = {
  brand: {
    'darkGrey': '#212121',
    'lightGrey': '#353535',
    'lightGreen': '#39BA8C',
    'darkGreen': '#309873',
    'blue': "#5196FF"
  },
}

const theme = {
  breakpoints: breakpoints,
  colors: colors,

  fonts: {
    ...Theme.fonts,
    body: 'righteous',
    heading: 'righteous',
  },


  styles: {
      global: { 
        body: {
          bg: 'brand.darkGrey',
        },

        html: {
          scrollBehavior: 'smooth',
        },
      }
  },

  components: { 
    Button,
    Heading,
    Link: {
      variants: {
        primary: {
          _hover: {
            textDecoration: 'none'
          }
        }
      },
      defaultProps: {
        variant: 'primary',
      },
    }
  }
}

export const customTheme = extendTheme(theme)