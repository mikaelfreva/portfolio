import styled from "styled-components";

export const LogoNav = styled.div`
z-index:200 ;
a,svg,path,img{
  cursor: pointer;
}
svg {
    width: 40px;
    fill:white;
    > * {
      transition: all 0.2s ease-in-out;
    }

    .logo_body {
      fill: white;
    }
    polygon,
    path {
      fill: black;
    }
    &:hover {
      .logo_body {
        fill: black;
      }
    }
   

    @media ${(props) => props.theme.breakpoints.md} {
    }
  }

`;