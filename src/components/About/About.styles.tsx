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

export const AboutWrapper = styled.div`
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
  @media ${(props) => props.theme.breakpoints.lg} {
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
