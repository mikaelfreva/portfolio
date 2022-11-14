import { Menu, ChevronLeft } from "@styled-icons/material";
import dynamic from "next/dynamic";
import { FC, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Burger from "../Essential/Burger";
import Toggler from "../Essential/Toggler";
import Logo from "../Logo/Logo";
import Navigation from "../Nav/Nav";
import Social from "../Social/Social";
import {
  IconContainer,
  TitleContainer,
  HeaderContainer,
} from "./Header.styles";

export type HeaderProps = {


  toggleNav: () => void;
  toggle: boolean;
  scroll: boolean;
  themeStyle: string;
  themeToggler: () => void;
};

export default function Header({
  
  themeStyle, 
  themeToggler,
  scroll,
  toggle,
  toggleNav,
}: HeaderProps) {


  return (
    <HeaderContainer toggle={toggle} scroll={scroll}>
      <Logo />
      <Navigation toggleNav={toggleNav} toggle={toggle} />
      <Social />
      <Toggler themeStyle={themeStyle} themeToggler={themeToggler} />
      <Burger toggle={toggle} toggleNav={toggleNav} />
    </HeaderContainer>
  );
}

// export default Header;
