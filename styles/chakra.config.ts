import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { buttonStyles as Button } from './components/buttonStyles'

const breakpoints = createBreakpoints({
  sm: '5em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',  
})

const colors = {
  brand: {
    'darkGrey': '#212121',
    'lightGreen': '#39BA8C',
    'darkGreen': '#309873',
  },
}

const theme = {
  breakpoints: breakpoints,
  colors: colors,

  fonts: {
    body: 'Righteous'
  },

  styles: { // global styles for buttons
      global: { // this is where we would declare global font families to apply to everything
        body: {
          bg: 'brand.darkGrey'
        }
      }
  },

  components: { // ovverride existing styles by component
    Button
  }
}

export const customTheme = extendTheme(theme)