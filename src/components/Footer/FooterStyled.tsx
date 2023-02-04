import styled from "styled-components";

export const FooterWrapper = styled.footer`
.flex_center{
    display: flex;
    align-items:center ;
    justify-content:center ;
 
}
border-top: 1px solid rgba(0, 0, 0, 0.2);
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
`;
