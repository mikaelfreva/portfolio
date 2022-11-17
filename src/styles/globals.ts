import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { AboutWrapper } from "../components/About/About.styles";
import { IndexWrapper } from "./GlobalComponents";

const GlobalStyles = createGlobalStyle`

  ${normalize};
body{
*{
   transition:color .3s ease-in-out, background-color .3s ease-in-out, fill  .3s ease-in-out ;

}
    background-image: ${({ theme }) => theme.background};
  background-size:cover ;
  background-attachment: fixed;
    border: none;

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
  body {

    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;


    /* background: ${(props) => props.theme.dark.background}; */


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
${IndexWrapper}{
  ${AboutWrapper}{
    background: ${({ theme }) => theme.lightDark};

    
  padding-top:0%;
  h2,p{
    color: ${({ theme }) => theme.lightWhite};
  }
  }

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

p,h1,h2,h3,h4,h5,h6,span,div{
  color: ${({ theme }) => theme.colorSwitch};
 



}


a{
  transition:all 0.3s ease-in-out ;
}

.loader{
  position:fixed ;
  height:100% ;
  background-color:blue ;
  width:100% ;
  z-index:100 ;
}
`;

export default GlobalStyles;
