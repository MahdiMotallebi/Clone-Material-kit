import React from 'react';
import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    border: PaletteColor;
    shadow: string;
  }
  interface PaletteOptions {
    border: PaletteColor;
  }
}

export const tokens = (mode: PaletteMode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#fff',
          200: '#f2f2f2',
          300: '#ebebeb',
          400: '#e5e5e5',
          500: '#dedede',
          600: '#b2b2b2',
          700: '#858585',
          800: '#595959',
          900: '#2c2c2c'
        },
        primary: {
          100: '#d6d6dc',
          200: '#acadb8',
          300: '#838595',
          400: '#595c71',
          500: '#30334e',
          600: '#26293e',
          700: '#1d1f2f',
          800: '#171728',
          900: '#13141f'
        },
        success: {
          100: '#e5f5d2',
          200: '#cbeba6',
          300: '#b2e079',
          400: '#98d64d',
          500: '#7ecc20',
          600: '#65a31a',
          700: '#4c7a13',
          800: '#32520d',
          900: '#192906'
        },
        warning: {
          100: '#fff6cc',
          200: '#ffec99',
          300: '#ffe366',
          400: '#ffd933',
          500: '#ffd000',
          600: '#cca600',
          700: '#997d00',
          800: '#665300',
          900: '#332a00'
        },
        error: {
          100: '#f8dcdb',
          200: '#f1b9b7',
          300: '#e99592',
          400: '#e2726e',
          500: '#db4f4a',
          600: '#af3f3b',
          700: '#832f2c',
          800: '#58201e',
          900: '#2c100f'
        },
        info: {
          100: '#e0e2ff',
          200: '#c2c4ff',
          300: '#a3a7ff',
          400: '#8589ff',
          500: '#666cff',
          600: '#5256cc',
          700: '#3d4199',
          800: '#292b66',
          900: '#141633'
        }
      }
    : {
        grey: {
          100: '#2c2c2c',
          200: '#595959',
          300: '#858585',
          400: '#b2b2b2',
          500: '#dedede',
          600: '#e5e5e5',
          700: '#f9fafc', //change
          800: '#f2f2f2',
          900: '#fff' // change
        },
        primary: {
          100: '#13141f',
          200: '#171728',
          300: '#1d1f2f',
          400: '#26293e',
          500: '#30334e',
          600: '#595c71',
          700: '#838595',
          800: '#acadb8',
          900: '#d6d6dc'
        },
        success: {
          100: '#192906',
          200: '#32520d',
          300: '#4c7a13',
          400: '#65a31a',
          500: '#7ecc20',
          600: '#98d64d',
          700: '#b2e079',
          800: '#cbeba6',
          900: '#e5f5d2'
        },
        error: {
          100: '#2c100f',
          200: '#58201e',
          300: '#832f2c',
          400: '#af3f3b',
          500: '#db4f4a',
          600: '#e2726e',
          700: '#e99592',
          800: '#f1b9b7',
          900: '#f8dcdb'
        },
        warning: {
          100: '#332a00',
          200: '#665300',
          300: '#997d00',
          400: '#cca600',
          500: '#ffd000',
          600: '#ffd933',
          700: '#ffe366',
          800: '#ffec99',
          900: '#fff6cc'
        },
        info: {
          100: '#141633',
          200: '#292b66',
          300: '#3d4199',
          400: '#5256cc',
          500: '#666cff',
          600: '#8589ff',
          700: '#a3a7ff',
          800: '#c2c4ff',
          900: '#e0e2ff'
        }
      })
});

export const customeTheme = (mode: PaletteMode) => {
  const colors = tokens(mode);
  const { palette } = createTheme();

  return {
    typography: {
      fontFamily: ['nunito', 'sans-serif'].join(',')
    },
    breakpoints: {
      values: {
        xs: 300,
        sm: 578,
        md: 768,
        lg: 992,
        xl: 1300
      }
    },

    palette: {
      mode: mode,
      colors,
      border: palette.augmentColor({
        color: {
          main: colors.grey[600],
          dark: 'rgba(133, 133, 133, .1)'
        }
      }),
      shadow:
        ' rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',

      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.info[300]
            },

            background: {
              default: colors.primary[800],
              paper: colors.primary[600]
            },
            text: {
              primary: colors.grey[500],
              secondary: colors.grey[600],
              disabled: colors.grey[400]
            }
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.info[400]
            },

            background: {
              default: colors.grey[700],
              paper: colors.grey[900]
            },
            text: {
              primary: colors.grey[100],
              secondary: colors.grey[400],
              disabled: colors.grey[800]
            }
          })
    }
  };
};

export const useMode = (mode: PaletteMode) => {
  const theme = React.useMemo(() => createTheme(customeTheme(mode)), [mode]);

  return { theme };
};
