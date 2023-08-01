import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeProvider as MuiThemeProvider, createTheme as createMuiTheme } from '@mui/material/styles';

const breakpoints: any = ['768px', '991px', '1199px', '1400px']
// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizes: any = [12, 14, 16, 20, 26];
fontSizes.small = fontSizes[0];
fontSizes.body = fontSizes[1];
fontSizes.alert = fontSizes[2];
fontSizes.subtitle = fontSizes[3];
fontSizes.title = fontSizes[4];

const fonts: any = ["'Ubuntu', Arial, Verdana, Tahoma, sans-serif", "'Roboto', Arial, Verdana, Tahoma, sans-serif"];
fonts.ubuntu = fonts[0];
fonts.roboto = fonts[1];

const primary = '#13C2C2';
const secondary = '#E6FFFB';
const gray = '#FAFAFA';
const softgray = '#D8DBEB';
const neutral = '#D9D9D9';
const neutral2 = '#FAFAFA';
const neutral3 = '#F5F5F5';
const neutral4 = '#F0F0F0';
const neutral6 = '#BFBFBF';
const neutral7 = '#898989';
const neutral8 = '#595959';
const neutral9 = '#434343';
const black = 'rgba(0, 0, 0, 0.85)';
const black45 = 'rgba(0, 0, 0, 0.45)';
const black50 = '#2E334D';
const pink = '#FF80BF';
const red = '#FF6680';
const danger = '#FF6680';
const dustred = '#FF4D4F';
const orange = '#FFA245';
const softpurple = '#E1E4F0';
const purple = '#B399FF';
const darkpurple = '#9254DE';
const purplemedium = '#B37FEB';
const purpleblue = '#22075E';
const blue = '#66BFFF';
const darkblue = '#1890FF';
const lightblue = '#E6F7FF';
const green = '#52C41A';
const polargreen4 = '#95DE64';
const polargreen9 = '#135200';
const polargreen5 = '#73D13D';
const white = '#FFFFFF';
const link = '#40A9FF';
const error = '#F44336';

const theme = {
  breakpoints,
  fontSizes,
  fonts,
  colors: {
    primary,
    secondary,
    gray,
    softgray,
    neutral,
    neutral2,
    neutral3,
    neutral4,
    neutral6,
    neutral7,
    neutral8,
    neutral9,
    black,
    black45,
    black50,
    pink,
    red,
    danger,
    orange,
    softpurple,
    purple,
    darkpurple,
    purplemedium,
    purpleblue,
    polargreen4,
    polargreen5,
    polargreen9,
    dustred,
    blue,
    darkblue,
    lightblue,
    green,
    white,
    link,
    error,
  }
};

export type ThemeType = typeof theme;


// Aplicando o tema da aplicação no tema do MUI

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    purple: PaletteOptions['primary'];
  }
}

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: darkpurple,
    },
    error: {
      main: danger,
    },
    warning: {
      main: orange,
    },
    info: {
      light: lightblue,
      main: blue,
      dark: darkblue,
    },
    success: {
      main: green,
    },
    // Cores extras no tema
    purple: {
      main: darkpurple,
      contrastText: gray,  // Propriedade necessária em todas as cores customizada que forem utilizadas no Chip
    }
  }
});

// Permitindo a utilização das cores extras do tema no Chip 
declare module '@mui/material/Chip/Chip' {
  interface ChipPropsColorOverrides {
    purple: true;
  }
}


export const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  return ( 
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
