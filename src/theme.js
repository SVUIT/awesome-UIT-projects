import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '48px'
const APP_HEIGHT = '100vh'
const BOARD_CONTENT_HEIGHT = `calc( ${APP_HEIGHT} - ${APP_BAR_HEIGHT} )`

const theme = extendTheme({
  layout: {
    appHeight: APP_HEIGHT,
    appBarHeight: APP_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: '1px'
        }
      }
    },

    MuiCssBaseline: {
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar':{
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1':
            {
              fontSize: '0.875rem'
            }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root:
          {
            // color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '& fieldset':
              {
                borderWidth: '0.5px !important'
              },
            '&.Mui-focused fieldset':
              {
                borderWidth: '1.5px !important'
              },
            '&:hover fieldset':
              {
                borderWidth: '1.5px !important'
              }
          }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    }

  }
  // ...other properties
})

export default theme
