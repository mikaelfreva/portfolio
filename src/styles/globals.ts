import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { AboutWrapper } from "../components/About/About.styles";
import { IndexWrapper } from "./GlobalComponents";

const GlobalStyles = createGlobalStyle`

  ${normalize};
  a:has(svg), a svg, a path{ 
    cursor: pointer;
  }

body{
  font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colorSwitch};
    cursor: default;
    background:${({ theme }) => theme.bodyBackground};
    background-image:none ;
 
    border: none;
}
body::before{
  content:"";
  height:100%;
  width:100% ;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display: block;
  position:fixed ;
  z-index:-10 ;
  background-image: ${({ theme }) => theme.background};
  background-size:cover ;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;

}

  button{
    border:none;
  }
  html, body, #root{
    height:100%;
  }

  *, ::after,::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor:auto;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${(props) => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
    color:black ;
  }
  li{
    list-style: none;
  }
  .relative{
    position: relative;
  }
  h2 {
      font-size: 1em;
    }

 svg{
  display: block;
 }
 .divider{
  position: relative;
}
/* ${IndexWrapper}{
  ${AboutWrapper}{
    background: ${({ theme }) => theme.lightDark};

    
  padding-top:0%;
  h2,p{
    color: ${({ theme }) => theme.lightWhite};
  }
  }

} */
h1,h2,h3{
  font-family: ${(props) => props.theme.fonts.title};

}
.lottie_home{
  #lottie{
    *{
       fill: ${({ theme }) => theme.lightDark};
       mix-blend-mode: ${({ theme }) => theme.mixblendmode};
    }
    g:first-child g path {
  display: none;
}
  } 
} 

p,h1,h2,h3,h4,h5,h6,span,div,input,textarea{
  color: ${({ theme }) => theme.colorSwitch};
 



}




.loader{
  position:fixed ;
  height:100% ;
  background-color:blue ;
  width:100% ;
  z-index:100 ;
}

.cursor {
width: 20px;
height: 20px;
border: 1px solid white;
border-radius: 50%;
position: absolute;
pointer-events: none;
}
.cursor::after {
content: "";
width: 20px;
height: 20px;
position: absolute;
border: 2px solid blue;
border-radius: 50%;
opacity: .5;
top: -8px;
left: -8px;
}
@keyframes cursorAnim {
0% {
transform: scale(1);
}
50% {
transform: scale(5);
}
100% {
transform: scale(1);
opacity: 0;
}
}
.expand {
animation: cursorAnim .5s forwards;
}

.random{
  position:fixed;
  z-index:100 ;
}
@media ${(props) => props.theme.breakpoints.xl} {
  :root{cursor:none;}

}


@media ${(props) => props.theme.breakpoints.md} {

  body.hidden{
overflow:hidden ;
}
   
    .flex-reverse{
      flex-direction:column-reverse ;
      display: flex;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export default GlobalStyles;
