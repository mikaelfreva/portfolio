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
function MyApp({ Component, pageProps }: AppProps) {
  

const [theme, themeToggler] = useDarkMode();

const themeMode = theme === 'light' ? lightTheme : darkTheme;


const router = useRouter();

const [loading, setLoading] = useState(false);

useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError',  handleComplete)

    return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
    }
})


  return <>
  <ThemeProvider theme={themeMode}>
  <GlobalStyles />

 

    <Layout themeToggler={themeToggler} themeStyle={theme} >
      {loading ? (
        <div className='loader'>
          
        </div>
      )
        :
        (
           <Component {...pageProps} />
        )
      }
       
    </Layout>

  

  </ThemeProvider>
  </> 
  
}

export default MyApp;
