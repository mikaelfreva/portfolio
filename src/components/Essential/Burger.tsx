import React, { FC } from "react";
import { v4 as uuid } from "uuid";

import styled from "styled-components";

interface BurgerStylesProps {
  toggle: boolean;
}

const BurgerWrapper = styled.a<BurgerStylesProps>`
  display: none;
  transition: all 0.3s;
  z-index: 999;
  font-size: 20px;
  background: transparent;
  box-shadow: none;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  svg {
    width: 20px;
  }
  svg,
  path {
    cursor: pointer;
    fill: ${({ theme }) => theme.colorSwitch};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100%;
    top: 0;
    right: 0;
    background: ${(props) =>
      props.toggle ? "transparent" : props.theme.lightDark};

    height: 35px;
    width: 35px;
    border-radius: 70%;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: ${(props) => (props.toggle ? "fixed" : "relative")}; */
  }
`;

const Icon = styled.span<BurgerStylesProps>`

  position: relative;
  background-color: ${(props) =>
    props.toggle ? "transparent" : props.theme.lightWhite};

  width: 18px;
  height: 2px;
  display: inline-block;

  &::before,
  &::after {
    content: "";

    background-color: ${(props) =>
      props.toggle ? "white" : props.theme.lightWhite};



    width: 18px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.2s ease-in-out, background-color 0s;
  }
  &::before {
    top: ${(props) => (props.toggle ? "0" : "-0.6rem")};
    transform: ${(props) => (props.toggle ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.toggle ? "0" : "0.6rem")};
    transform: ${(props) => (props.toggle ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export type BurgerProps = {
  toggleNav: () => void;
  toggle: boolean;
};
const Burger: FC<BurgerProps> = ({ toggleNav, toggle }) => {
  return (
    <BurgerWrapper toggle={toggle} onClick={toggleNav}>
      <Icon toggle={toggle} />
    </BurgerWrapper>
  );
};

export default Burger;
