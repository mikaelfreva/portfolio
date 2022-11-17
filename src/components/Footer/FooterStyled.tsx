import styled from "styled-components";

export const FooterWrapper = styled.footer`
.flex_center{
    display: flex;
    align-items:center ;
    /* @media ${(props) => props.theme.breakpoints.md} {
      flex-direction:column ;
    }  */
 
}
  background: linear-gradient(-90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%);
  padding: 20px;
  margin-top:20px ;
  .footer_left,
  .footer_right {
    display: flex;
    justify-content: center;
  }

  .footer_left {
    p {
      border-right: 1px solid white;
      padding: 0 10px;
    }
    a {
      color: black;

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
        fill: white;
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
