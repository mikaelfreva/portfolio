import styled from "styled-components";
export const ToggleTheme = styled.p`
position:fixed;
top:0;
right:0;
z-index:1000 ;
`
interface Props {
  theme?: string;
}


export const Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textDark};
`;

export const Content = styled.div`
  transition:all 0.5s ease-in-out ;
margin-left:60px;
@media ${(props) => props.theme.breakpoints.md} {
    padding-top: 50px ;

    margin-left:0px;
     }
`;

export const PageContainer = styled.div`

`;
// export const Divider = ({ fill }: Props) => (
export const LayoutWrapper = styled.div<Props>`



`; 

export const PageWrapper = styled.div`
`;







