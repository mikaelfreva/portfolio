import styled from "styled-components";
import { Column, Container } from "../../styles/GlobalComponents";
export const POP = styled.div`

  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  align-items: end;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh;
  }


`;
export const HomeWrapper = styled.div`

  width: 100%;
.grid{
  display: grid;
  gap:30px;
}
.home_left {

  grid-column: 2 / 3;
    grid-row: 1 / 3;

}
.home_right {
  grid-column: 3;
  grid-row: 1 / span 2;
}
.home_button {
  grid-column: 1 / span 2;
  grid-row: 2;
  text-align: right;
  div{
    display: inline-block;
    &:first-child button{
      background-color:blue ;
      color:white ;
      }
    button{
      padding:5px 20px ;
      font-size:1em ;
      -webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.62); 
box-shadow: 10px 10px 0px 0px rgba(0,0,0,0.62);     
      background-color:white ;
      margin-left:20px ;
      text-transform: uppercase;
    }
  }
}

  .home_left {
    text-align: right;
  }

  .vertical_text {
    justify-content: end;
    font-size: 25px;
    color: #23d2fd;
  }

  .home_left {

    h2 {
      font-size: 4em;
      margin: 10px;
    }
    h3,.vertical_text div {
      font-size: 1em;
      font-weight: 100;
    }
  }
  .shape_home {
    width: 400px;
    filter: drop-shadow(0px 14px 10px rgba(0,0,1));
    margin: auto;
  }
  .home_right {

    position: relative;
 

    img {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 120%;
      object-fit: contain;
      width: 100%;
      left: 0%;

      
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {

    .grid{
      display: flex;
    flex-direction: column;
    justify-content: center;
  
}
.home_left {
    text-align: center;
    margin-bottom:5em ;
    .vertical_text{
          justify-content: center;
        }
}
.home_button {

    text-align: center;
    margin-top:20px ;
}


  }
  @media ${(props) => props.theme.breakpoints.sm} {
    .home_left{
     
      
        text-align: center;
     
 
    }
  } 
  @media ${(props) => props.theme.breakpoints.xs} {
  
    .shape_home{
      width:350px ;
    }
  } 



`;
