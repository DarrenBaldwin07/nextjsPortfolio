import { extendTheme } from '@chakra-ui/react'
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
    body: 'Righteous', 
    heading: 'Righteous'
  },

  styles: { // global styles for buttons
      global: { // this is where we would declare global font families to apply to everything
        body: {
          bg: 'brand.darkGrey',
          '@font-face': {
            fontFamily: "righteous",
            src: 'url("/fonts/righteous/Righteous-Regular.ttf")',
            fontStyle: 'normal',
          }
        },
        '.footer-text': {
          '@font-face': {
            fontFamily: "roboto",
            src: 'url("/fonts/roboto/Roboto-Regular.ttf")',
            fontStyle: 'normal',
          }
        },
        html: {
          scrollBehavior: 'smooth',
        },

      }
  },

  components: { // ovverride existing styles by component
    Button,
    Heading,
  }
}

export const customTheme = extendTheme(theme)