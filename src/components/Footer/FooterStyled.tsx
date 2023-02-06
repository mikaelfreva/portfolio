import styled from "styled-components";

export const FooterWrapper = styled.footer`
.flex_center{
    display: flex;
    align-items:center ;
    justify-content:center ;
 
}
/* border-top: 1px solid ${(props) => props.theme.lightDark}; */
box-shadow: 0px 5px 15px 0px white;
background: ${(props) => props.theme.lightWhite};
  padding: 20px;
  margin-top:20px ;
  .footer_left,
  .footer_right {
    display: flex;
    justify-content: center;
  } 

  .footer_left {
    margin-bottom:20px ;
    p {
      border-right: 1px solid white;
      padding: 0 10px;
    }
    a {
      color: black;
      color: ${(props) => props.theme.lightDark  };
      text-decoration:underline ;

      &:hover {
        cursor: pointer;
        text-decoration: underline;

      }
    }
    p:last-child {
      border-right: none;
    }
   
  }
  .footer_right {
    a {
      padding: 0 10px;
    }
    svg {
      width: 20px;
      path {
        fill: ${(props) => props.theme.lightDark};

        transition:.3s all ease-in-out ;
      }
      &:hover {
        path {
          fill: #023047;
        }
      }
    }
    svg,
    path {
      cursor: pointer;
    }
  }


  @media ${(props) => props.theme.breakpoints.xs} {
    .footer_left{
      flex-direction:column ;
      text-align: center;
      gap:15px;
      p{
        border-right: none;
      }
    }
  }

`;
