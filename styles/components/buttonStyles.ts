export const buttonStyles = {
    // style object for base or default style
    baseStyle: {

    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
      md: {
        px: 3,
        py: 3
      },
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        bg: 'brand.lightGreen',
        color: 'white',
        px: 3,
        _hover: {
          bg: 'brand.darkGreen'
        },
        fontSize: 15
      },
      border: { // add this variant for rounded buttons
        borderRadius: 25,
        color: 'white',
        border: '2px', 
        borderColor: 'brand.lightGreen',
        fontSize: 15,
        _hover: {
          bg: 'brand.lightGreen',
        }
      }
      // we could declare other variants here
    },
    // default values for `size` and `variant`
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
}

