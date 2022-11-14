import styled from "styled-components";
import { motion } from "framer-motion";
interface NavStylesProps {
  toggle: boolean,
}
export const OverlayW = styled(motion.div) <NavStylesProps>`
    width: 100%;
    
   
@media ${(props) => props.theme.breakpoints.md} {
  position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;

    z-index: ${(props) => (props.toggle ? 100 : -1)};
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};


    background-color:rgba(0,0,0,0.5) ;
    opacity: ${(props) => (props.toggle ? 1 : 0)};
    transition:opacity 0.3s ease-in-out, right 0.4s ease-out, visibility 0.3s ease;

  }


`;
export const OverlayWrapper = styled(motion.div) <NavStylesProps>`
width:30% ;
cursor: pointer;


`;

export const NavWrapper = styled(motion.nav) <NavStylesProps>`
  a,svg,span,path{
    cursor: pointer;
  }
  align-items: center;
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
.burger_lineactive{
  svg,path{
    fill:black !important;
  }
  span{
    color: black !important;;
  }
}
  a {
    font-size: ${(props) => props.theme.property.fsz_button};
    z-index: 2;
    display: block;
    padding: 20px 0;
    width:100% ;
    /* color: ${(props) => props.theme.colors.primary1}; */
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: normal;
    span{
      color:white;
    }
    svg {
      color: ${(props) => props.theme.colors.primary1};
      width:25px ;
    }
 
    /* &.active,
    &.active svg {
      color: blue;
      font-weight:bold ;
    } */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    position: fixed;
    height: 100%;
    top: 0;
    width: 70%;
    transition:opacity 0.3s ease-in-out, right 0.4s ease-out;
    right: ${(props) => (props.toggle ? "0" : "-20%")};
       background-image:linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%) ;
    opacity: ${(props) => (props.toggle ? 1 : 0)};
    align-items: end;
    justify-content: center;
    padding-right:50px ;
    a {
      display: flex;
      flex-direction: row-reverse;
      align-items:center ;
span, svg,path{
  transition:all 0.2s ease-in-out ;

}
      margin: 10px 0;
      font-size:20px ;
      span{
        margin-right: 20px;
      }
    }
  }
  @media ${(props) => props.theme.breakpoints.md_min} {
    .sidebar_navlink {
      position: absolute;
      font-size: 15px;
      width: 150px;
      justify-content: center;
      right: 0;
      align-items: center;
      display: flex;
      height: 100%;
      top: 0;
      z-index: -100;
      transform: translateX(0);
      opacity: 0;
      background: linear-gradient(-45deg, #6d80fe 0%, #23d2fd 100%);
      &.active_navlink {
        opacity: 1;
        transform: translateX(100%);
      }
    }
     
    svg {
   
      margin:auto ;
    }
  }
a:hover{
  span{
    color:rgb(2, 48, 71);
   
  }
  svg path{
    fill:rgb(2, 48, 71);
  }
}
   
`;
