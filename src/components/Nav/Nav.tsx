import React, { useState, useEffect, FC } from "react";
import { v4 as uuid } from "uuid";

import { NavWrapper, OverlayWrapper, OverlayW } from "./Nav.styles";
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
  { name: "accueil", icon: faHome, to: "/", id: 1 },
  { name: "a propos", icon: faUser, to: "/a-propos", id: 2 },
  { name: "portfolio", icon: faSuitcase, to: "/portfolio", id: 4 },
  { name: "contact", icon: faEnvelope, to: "/contact", id: 5 },
];
export type NavProps = {
  toggleNav: () => void;
  toggle: boolean;

  // toggle: () => void;
};

const Navigation: FC<NavProps> = ({ toggleNav, toggle }) => {
  const location = useRouter();
  const { pathname } = location;

  const [isHovering, setIsHovering] = useState(false);
  const [active, setActive] = useState(null);

  const onMouseOver = (id : any) => {
    setActive(id);
  };
  const onMouseLeave = () => {
    setActive(null);
  };

  const closeOverlay = () => {

  }

 
  return (
    <OverlayW
    toggle={toggle}
    >  
      <OverlayWrapper
      onClick={() => {
        toggleNav();
      }} toggle={toggle}
      >

        </OverlayWrapper>  
    
    
    <NavWrapper 
     onClick={e => e.stopPropagation()}
    toggle={toggle}>
     
           {links.map(({ name, to, icon, id }) => (
        <Link key={uuid()} href={{ pathname: to }}>
          <p
            onMouseEnter={() => onMouseOver(id)}
            onMouseLeave={() => onMouseLeave()}
            className={` burger_line${pathname === to ? "active" : ""}`}
            onClick={() => {
              toggleNav();
            }}
          >
            <FontAwesomeIcon icon={icon} color="#4d4d4e" />

            <span
              className={`sidebar_navlink ${
                active === id ? "active_navlink" : ""
              }`}
            >
              {name}
            </span>
          </p>
        </Link>
      ))}  
      </NavWrapper>
    
    </OverlayW>

 
    
  );
};

export default Navigation;
