import { Menu, ChevronLeft } from "@styled-icons/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { LogoNav } from "./Logo.styles";
import  ReactLogo from "./logo.svg";


export default function Logo() {



  return (
    <LogoNav>
        <Link href="/">
      
        <Image src="/logo.svg" width={30} height={30} alt="logo"/>
       
        </Link>
    </LogoNav>
  );
};

// export default Header;

