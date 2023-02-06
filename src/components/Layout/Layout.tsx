import React, { useState, useEffect, FC } from "react";
import Footer from "../Footer/Footer";
import {
  Content,
  LayoutWrapper,
  PageContainer,
  ToggleTheme,
} from "./Layout.styles";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../Essential/ScrollToTop";
import { ThemeToggle } from "../../hooks/typings";
import Toggler from "../Essential/Toggler";
import { useDarkMode } from "../../styles/themeStyle/useDarkMode";
import { darkTheme, lightTheme } from "../../styles/default";
import ToasterFC from "../Essential/Toaster";
import Head from "next/head";
import TransitionEffect from "../Essential/TransitionEffect2";
import Header from "../Header/Header";
import { useRouter } from "next/router";
import CustomCursor from "../CustomCursor/";
import { ParticlePage } from "../Essential/Particle";
import { AnimatePresence } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
  themeStyle: string;
  themeToggler: () => void;
};

const Layout: FC<LayoutProps> = ({ children, themeStyle, themeToggler }) => {
  // export default function Layout({ children, themeMode, themeToggler}: LayoutProps) {

  const [scroll, setScroll] = useState<boolean>(false);

  const addScroll = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    addScroll();
    window.addEventListener("scroll", addScroll);
  });

  const [toggle, setToggle] = useState<boolean>(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if(toggle){
      document.body.classList.add('hidden')
    }
    else{
      document.body.classList.remove('hidden')

    }
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
    const onScroll = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", onScroll);

    return () => window.removeEventListener("resize", onScroll);
  }, []);


  return (
    <AnimatePresence>
    <LayoutWrapper>
     
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/jpg" href="favicon.jpg" />
      </Head>
      <ToasterFC />

       <ScrollToTop /> 

{/* <CustomCursor/> */}

      <Header
        toggleNav={toggleNav}
        scroll={scroll}
        toggle={toggle}
        themeStyle={themeStyle}
        themeToggler={themeToggler}
      />
  <ParticlePage theme={themeStyle} />
    
        <Content>
          <PageContainer>
            
            {children}</PageContainer>
          <Footer />
        </Content>
    
    </LayoutWrapper> 
         
    </AnimatePresence>

  );
};

export default Layout;
