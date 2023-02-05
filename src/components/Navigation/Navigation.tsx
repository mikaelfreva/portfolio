import React, { useState, useEffect, FC } from "react";
import { v4 as uuid } from "uuid";

import {  NavigationContent, NavigationWrapper, OverlayWrapper } from "./NavigationStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
const links = [
  { name: "a propos", icon: faUser, to: "/a-propos", id: 2 },
  { name: "portfolio", icon: faSuitcase, to: "/portfolio", id: 4 },
  { name: "contact", icon: faEnvelope, to: "/contact", id: 5 },
];
export type NavProps = {
  toggleNav: () => void;
  toggle: boolean;
};

const Navigation: FC<NavProps> = ({ toggleNav, toggle }) => {
  const location = useRouter();
  const { pathname } = location;

  return (

    <>
    {/* <NavigationWrapper toggle={toggle}></NavigationWrapper> */}
          {/* <OverlayWrapper
        onClick={() => {
          toggleNav();
        }}
        toggle={toggle}
      ></OverlayWrapper> */}

      

      <NavigationContent onClick={(e) => e.stopPropagation()} toggle={toggle}>
        <Link className={` home_link ${
              pathname === "/" ? "active" : ""
            }`}  href="/">
        {/* <FontAwesomeIcon  icon={faHome} /> */}
        Accueil
        </Link>
        {links.map(({ name, to, icon, id }) => (
          <Link
          
            className={` burger_line ${
              pathname === to ? "active" : ""
            }`}
            onClick={() => {
              toggleNav();
            }}
            key={uuid()}
            href={{ pathname: to }}
          >
            {name}
          </Link>
        ))}
      </NavigationContent>
    </>
    

  
  );
};

export default Navigation;
