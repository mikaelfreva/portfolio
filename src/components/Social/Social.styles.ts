import styled from "styled-components";

export const SocialWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  a {
    margin: 10px 0;
    svg {
      color: white;
      font-size: 25px;
      width:25px ;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
 
      display: none;
    
 
  }
`;