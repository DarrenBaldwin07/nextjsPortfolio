export const buttonStyles = {
    // style object for base or default style
    baseStyle: {

    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {

    },
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        bg: 'brand.lightGreen',
        color: 'white',
        py: 3,
        px: 3,
        _hover: {
          bg: 'brand.darkGreen'
        },
        fontSize: 15
      }
      // we could declare other variants here
    },
    // default values for `size` and `variant`
    defaultProps: {
      size: '',
      variant: '',
    },
}
