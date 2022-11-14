import { DefaultThemee, ThemeSwitch } from "styled-components";
const light : ThemeSwitch = {

  // background: 'linear-gradient(90deg, rgba(202,240,248,0.3) 0%, rgba(202,240,248,0.3) 100%)',
  background: 'linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.7)), url("https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_1280.jpg")',
  colorSwitch : 'black',
  lightWhite : "white",
  lightDark : "#023047",
  scrollColor: 'black',
  colorMenu : "white",
  invertLogo : "none",
  invertImage : "invert(1)",


  colorFormContact : "blue",

  rocketBody: "#f2d59f",
  rocketHublot: "rgb(255, 113, 36)",
  mixblendmode: "difference"
  // ...
}





const dark : ThemeSwitch = {

  // background: 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));',
  background: 'linear-gradient(rgba(27,20,41,.9), rgba(20,15,35,.9)), url("https://cdn.pixabay.com/photo/2016/07/22/16/29/fog-1535201_1280.jpg")',
  colorSwitch : 'white',
  scrollColor: 'white',
  colorMenu : "black",
  invertLogo : "invert(1)",
  lightWhite : "#023047",
  lightDark : "white",
  invertImage : "none",

  colorFormContact : "linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%)",

  rocketHublot : "rgb(255, 113, 36)",
  rocketBody: "rgb(35,210,253) ",

  mixblendmode: "normal"
}
const theme: DefaultThemee = {
  toggleBorder: '#6B8096',
  colors: {
    main: "#00022e",
    secondary: "#fc86aa",
    textDark: "#000133",
    textLight: "#fff",
    greyBg: "#d8dcd6",
    primary1: "white",
    background1: "midnightblue",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  },
  property:{
    aside: "60px",
    fsz_button: "30px",
    header_height: "75px"
  },
  fonts: {
    title: "PlayfairRegular, sans-serif",
    main: "LatoMedium, sans-serif"
  },
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (min-width: 1024px)',
    md_min: 'screen and (min-width: 768px)',
  },
  dark: {
    background : "black",
  }, 
  light: {
    background: "white",
  }
};


export const lightTheme  = { ...theme, ...light }
export const darkTheme  = { ...theme, ...dark }