import styled from "styled-components";
import { HeaderProps } from "./Header";


interface HeaderStylesProps {
  scroll: boolean,
  toggle: boolean,
}
export const HeaderContainer = styled.header<HeaderStylesProps>`
*{
  transition: width 0s ease-in-out, background-color 0s ease-in-out ;
}
height: 100%;
  position: fixed;
  z-index:50 ;
  top:0;
  background: linear-gradient(90deg, rgba(109,128,254,1) 0%, rgba(73,168,254,1) 49%, rgba(35,210,253,1) 100%);

  /* box-shadow: ${(props) => (props.scroll ? "0 5px 20px rgba(35, 210, 253, 0.3)" : "none")};  */

  display: flex;
  width: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  .burger {
    display: none;
    font-size: 20px;
    background: transparent;
    box-shadow: none;
    cursor: pointer;
    color: white;
  }
  color: ${(props) => props.theme.colors.secondary};
  @media ${(props) => props.theme.breakpoints.md} {
     background: ${(props) => (props.scroll ? "linear-gradient(90deg, rgba(109,128,254,0.8) 0%, rgba(73,168,254,0.8) 49%, rgba(35,210,253,0.8) 100%)" : "transparent")}; 

         
         /* padding: ${(props) => (props.scroll ? "0 10px 0 20px" : " 5px 10px 5px 20px")};  */
         
  
         padding:10px ;
    position: fixed;
height:auto;
    display: flex;
    width: 100%;
    flex-direction: row;

    .burger {
      display: block;
      height: 100%;
      top: 0;
      right: 0;
      position: ${(props) => (props.toggle ? "fixed" : "relative")};
    }
  }
`;


export const IconContainer = styled.div`
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  margin: auto;
`;

