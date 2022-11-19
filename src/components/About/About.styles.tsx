import styled from "styled-components";
import { Row } from "../../styles/GlobalComponents";


export const Divider = () => (
  <>
    <svg
      className="divider"
      // style={{ transform: divider === "reverse" ? "rotate(180deg)" : "" }}
      viewBox="0 0 595.3 39.8"
    >
      <path d="M0,39.8C69.5,15.5,177,0,297.6,0s228.1,15.5,297.7,39.8" />
    </svg>
  </>
);
// export default function Layout({ children }: LayoutProps) {

export const DividerReverse = () => (
  <>
    <svg className="divider"  viewBox="0 0 595.3 39.8">
      <path d="M0,0C69.5,24.3,177,39.8,297.6,39.8S525.7,24.3,595.3,0" />
    </svg>
  </>
);
export const Interrogation = styled.div`

  display: flex;
  align-content: center;
  justify-content: center;


.text_shadows {
  text-shadow: 3px 3px 0 #f49b90, 6px 6px 0 #f28b7d, 9px 9px #f07a6a, 12px 12px 0 #ee6352;
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(2rem + 5vw);
  text-align: center;
  margin: 0;
  color:#f6aca2 !important;
  text-shadow: 3px 3px 0 #f49b90, 6px 6px 0 #f28b7d, 9px 9px #f07a6a;
  letter-spacing: 0.4rem;
}
`;

export const AboutWrapper = styled.div`
.about_right{
  text-align: center;
}
.lottie_about{
 svg{
  width:220px !important;
  margin:auto ;
  g g:first-child > g:first-child path, g g:first-child > g:last-child path{
  /* fill: ${({ theme }) => theme.lightDark}; */
  display: none;

}
} 
}




  padding-top: 10vh;
  position: relative;
.flex_center{
  display: flex;
  justify-content:center ;
}
  
  h2,
  p {
    line-height:20px ;
  }
  .about_left {
    h2 {
      margin-bottom: 50px;
    }
    p {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    ${Row}{
      display: flex;
      flex-direction:column-reverse ;
    }
    .about_left{
      width:80% ;
      margin:auto ;
      float:initial ;
    padding:15px ;
  }
  }

`;
