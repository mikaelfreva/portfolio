import styled from "styled-components";
import { motion } from "framer-motion";
interface NavStylesProps {
  toggle: boolean,
}


export const NavigationContent = styled(motion.nav) <NavStylesProps>`


  @media ${(props) => props.theme.breakpoints.md} {
    position: fixed;
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
    height: 100%;
    top: 0;
    width: 70%;
    transition:opacity 0.3s ease-in-out, right 0.4s ease-out;
    right: ${(props) => (props.toggle ? "0" : "-20%")};
       background-image:linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%) ;
    opacity: ${(props) => (props.toggle ? 1 : 0)};
    align-items: center;
    display: flex;
    flex-direction:column ;
    justify-content: center;
   
 
  }
`;


export const NavigationWrapper = styled(motion.div) <NavStylesProps>`

@media ${(props) => props.theme.breakpoints.md} {
  position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    width:100% ;

    z-index: ${(props) => (props.toggle ? 100 : -1)};
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};


    background-color:rgba(0,0,0,0.5) ;
    opacity: ${(props) => (props.toggle ? 1 : 0)};
    transition:opacity 0.3s ease-in-out, right 0.4s ease-out, visibility 0.3s ease;

  }
`;
export const OverlayWrapper = styled(motion.div) <NavStylesProps>`
width:100% ;
cursor: pointer;


`;