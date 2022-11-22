import styled from "styled-components";
import Toggler from "../Essential/Toggler";
import { NavigationContent } from "../Navigation/NavigationStyles";
import { HeaderProps } from "./Header";

interface HeaderStylesProps {
  scroll: boolean,
  toggle: boolean,
}
export const HeaderWrapper = styled.header<HeaderStylesProps>`
transition:background-color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;
.home_link{
  *{
    cursor: pointer;
  }
  svg{
    width:20px ;
    
  }
}
display: flex;
position:fixed ;
box-shadow: ${(props) => (props.scroll ? "1px 1px 28px 0px rgba(0,0,0,0.75)" : "none")};

background: ${(props) => (props.scroll ? props.theme.menu : "transparent")};
z-index:30 ;
justify-content:space-between ;
align-items:center ;
padding: 15px 20px;
/* padding: ${(props) => (props.scroll ? "10px 20px" : "15px 20px")}; */

width:100% ;
${NavigationContent}{
  a{
  display: inline-block;
  color: ${(props) => (props.scroll ? props.theme.lightDark : props.theme.colorSwitch)};
  text-transform: uppercase;
margin:0 10px ;
cursor: pointer;
&.active{
  color: rgb(35, 210, 253)
}
&:hover{
  opacity:0.8 ;
}
}
}
.toggle{
  background: ${(props) => (props.scroll ? props.theme.lightDark : props.theme.lightDark )};
  svg path {
    fill: ${(props) => (props.scroll ? props.theme.colorMenu : props.theme.lightWhite )};

  }

}
img{
  filter: ${(props) => (props.scroll ? props.theme.invertLogo : props.theme.invertLogo )};

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

