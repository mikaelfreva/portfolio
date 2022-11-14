import React, { useState, useEffect, FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ParticlePage } from "../Essential/Particle";
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
type LayoutProps = {
  children: React.ReactNode;
  themeStyle: string;
  themeToggler: () => void;
};

const Layout: FC<LayoutProps> = ({ children, themeStyle, themeToggler }) => {
  // export default function Layout({ children, themeMode, themeToggler}: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);

    const changeLogo = () => {
      if (window.scrollY >= 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    useEffect(() => {
      changeLogo();
      window.addEventListener("scroll", changeLogo);
    });

 


  const [toggle, setToggle] = useState<boolean>(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };

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
    <LayoutWrapper>
       <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/jpg" href="favicon.jpg" />

    </Head>
      <ToasterFC />
      {/* <ScrollToTop /> */}
      <ParticlePage theme={themeStyle} />
      <Header
        toggleNav={toggleNav}
        toggle={toggle}
        scroll={scroll}
        themeStyle={themeStyle} themeToggler={themeToggler} 

      />
      <Content>
        <PageContainer>{children}</PageContainer>
        <Footer />
      </Content>
   
    </LayoutWrapper>
  );
};

export default Layout;
