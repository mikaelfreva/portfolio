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
    width: 100%;
    transition: opacity 0.3s ease-in-out 0s, right 0.4s ease-out 0s;
    right: ${(props) => (props.toggle ? "0" : "-20%")};
    background-color:${({ theme }) => theme.colorMenu};
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
    /* visibility: ${(props) => (props.toggle ? "visible" : "hidden")};  */


    /* background-color:rgba(0,0,0,0.5) ; */
    /* opacity: ${(props) => (props.toggle ? 1 : 0)}; */
    transition:all 0.5s ease-in-out;

  }
`;
export const OverlayWrapper = styled(motion.div) <NavStylesProps>`
width:100% ;
cursor: pointer;


`;