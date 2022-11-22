import '../src/font/font.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/globals";
// import { theme } from "../styles/default";
import Layout from '../src/components/Layout/Layout';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '../src/hooks/typings';
import { darkTheme, lightTheme } from '../src/styles/default';
import  {useDarkMode} from "../src/styles/themeStyle/useDarkMode"
import Toggler from '../src/components/Essential/Toggler'
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '../src/styles/reset.css';

function MyApp({ Component, pageProps }: AppProps) {
  

const [theme, themeToggler] = useDarkMode();

const themeMode = theme === 'light' ? lightTheme : darkTheme;







  return <>
  <ThemeProvider theme={themeMode}>
  

    <Layout themeToggler={themeToggler} themeStyle={theme} >
  <GlobalStyles />

     <Component {...pageProps} />

        
       
       
    </Layout>



  </ThemeProvider>
  </> 
  
}

export default MyApp;
