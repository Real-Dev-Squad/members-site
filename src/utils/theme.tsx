import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        // ...define your base styles
      },
      variants: {
        // Make a variant, we'll call it `base` here and leave it empty
        base: {},
        primary: {
          background: '#1d1283',
          color: 'white',
        },
        secondary: {
          border: '1px solid #1d1283',
          color: '#1d1283',
        }
      },
      defaultProps: {
        // Then here we set the base variant as the default
        variant: 'base'
      }
    },
  },
});