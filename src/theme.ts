import {createTheme, ThemeOptions} from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#2a2143',
    },
    secondary: {
      main: '#de3a72',
    },
    background: {
      default: '#201c2c',
      paper: '#2a2143',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'span',
        },
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            'color': '#de3a72'
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#de3a72',
          fontWeight: 400
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          ':before': {
            borderColor: 'transparent'
          },
          ':after': {
            borderColor: '#de3a72'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2143',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
          borderRadius: '10px'
        }
      }
    }
  },
};

export const theme = createTheme(themeOptions);