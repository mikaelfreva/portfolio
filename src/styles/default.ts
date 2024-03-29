import { DefaultThemee, ThemeSwitch } from "styled-components";
const light : ThemeSwitch = {
  
  menu: "rgba(255,255,255,0.95)",
 
  // background: 'linear-gradient(90deg, rgba(202,240,248,0.3) 0%, rgba(202,240,248,0.3) 100%)',
  background: 'linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url("https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80")',
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
  mixblendmode: "difference",

  blueColor : "rgba(73,168,254,1)",
  BG_MENU  :  "rgba(73,168,254,1)",
  




  dropShadowPath: "drop-shadow(-1px 15px 3px rgba(50,50,0,0.9))",
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
  bodyBackground: "white",

  inputColor: "rgba(0,0,0,.8)",
  // ...
}





const dark : ThemeSwitch = {
 
  menu: "#1e3c59",
  // background: 'linear-gradient(to left, rgb(27 20 41), rgb(20 15 35));',
  background: 'linear-gradient(rgba(20,15,35,.9), rgba(20,15,35,.9)), url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg")',
  colorSwitch : 'white',
  scrollColor: 'white',
  colorMenu : "black",
  invertLogo : "invert(1)",
  lightWhite : "#1e3c59",
  lightDark : "white",
  invertImage : "none",

  colorFormContact : "linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%)",

  rocketHublot : "rgb(255, 113, 36)",
  rocketBody: "rgb(35,210,253) ",

  mixblendmode: "normal",

  blueColor : "rgba(35,210,253,1)",
  BG_MENU  :  "rgba(73,168,254,1)",


  dropShadowPath: "drop-shadow(-1px 15px 3px rgba(255,255,255,0.9))",
  boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",


  bodyBackground: "#131127",
  inputColor: "rgba(255,255,255,.8)",
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
    title: "recoleta-bold",   
    main: "recoleta-normal, sans-serif"
  },
  breakpoints: {
    xs: 'screen and (max-width: 640px)',
    sm: 'screen and (max-width: 768px)',
    md: 'screen and (max-width: 992px)',
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