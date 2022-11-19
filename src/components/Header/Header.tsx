import { Menu, ChevronLeft } from "@styled-icons/material";
import dynamic from "next/dynamic";
import { FC, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Burger from "../Essential/Burger";
import Toggler from "../Essential/Toggler";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavigationTop from "../Navigation/Navigation";
import {

  HeaderWrapper,
} from "./Header.styles";

export type HeaderProps = {


  toggleNav: () => void;
  toggle: boolean;
  scroll: boolean;
  themeStyle: string;
  themeToggler: () => void;
};

export default function HeaderTop({
  
  themeStyle, 
  themeToggler,
  scroll,
  toggle,
  toggleNav,
}: HeaderProps) {

  

  return (
   
      <HeaderWrapper className={`${scroll ? 'pop' : ""}`} toggle={toggle} scroll={scroll}>
 <Logo />
      
      <Navigation toggleNav={toggleNav} toggle={toggle} />
  
      <Toggler themeStyle={themeStyle} themeToggler={themeToggler} />
      <Burger toggle={toggle} toggleNav={toggleNav} />
      </HeaderWrapper>
     
    
  );
}

// export default Header;
