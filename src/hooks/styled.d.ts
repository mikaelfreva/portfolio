import "styled-components";

declare module "styled-components" {
  export interface ThemeSwitch {
    background: string;
    colorSwitch : string
    scrollColor: string
    invertLogo : string
    colorMenu : string
    lightWhite : string
    lightDark : string
    invertImage:string;
    colorFormContact : string

    rocketBody: string
    rocketHublot: string
    mixblendmode: string
    blueColor : string
    BG_MENU  :  string

    menu: string

    dropShadowPath: string
    boxShadow: string

    bodyBackground: string,
    inputColor: strign,
  }
  export interface DefaultThemee {
    toggleBorder: string,
    colors: {
      main: string;
      secondary: string;
      textDark: string;
      textLight: string;
      greyBg: string;
      primary1: string,
      background1: string,
      accent1: string,
      button: string,
      background2: string,
    },
    property:{
      aside: string,
      fsz_button: string,
      header_height: string
    },
    fonts: {
      title: string,
      main: string
    },
    breakpoints: {
      xs:string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      md_min: string,
    },
    dark: {
      background : string,
    }, 
    light: {
      background: string,
    }
  }
}
