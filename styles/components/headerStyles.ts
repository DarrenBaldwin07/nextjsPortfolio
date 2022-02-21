export const headerStyles = {
    // style object for base or default style
    baseStyle: {

    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        md: {
            fontSize: '20px',
        },
        lg: {
            fontSize: '30px'
        },
        xl: {
          fontSize: '45px'
        }
    },
    // styles for different visual variants ("outline", "solid")
    variants: {
      primary: {
        color: 'brand.lightGreen',
      }
      // we could declare other variants here
    },
    // default values for `size` and `variant`
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
}
