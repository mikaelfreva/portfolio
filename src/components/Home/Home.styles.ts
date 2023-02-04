import styled from "styled-components";
export const POP = styled.div`

`;


export const HomeWrapper = styled.div`
  width: 100%;
  height: 85vh;
  margin-bottom:-4vh ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 95vh;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 93vh;
  }
 
.grid{
  display: grid;
  gap:0 50px;
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
  
 
}





.card_home{
  display: flex;
  justify-content:end ;
  gap:20px;
  .bloc-card:last-child{

     .product-card{
      color:white;
      background-image: linear-gradient(-90deg, rgba(109,128,254,1) 0%, rgba(73,168,254,1) 49%, rgba(35,210,253,1) 100%);

    }
    
  }
}
.bloc-card {

    position: relative;
    width: 150px;
    height: 50px; 
  
   
}
.product-card {
  cursor: pointer;
  font-size:1.1em ;
  text-transform: uppercase;
  text-align: center;
display: flex;
justify-content:center ;
align-items:center ;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    position: absolute;
    transform: translate(5px, -5px);
    border: 3px solid #333;
    border-radius: 5px;
    transition: transform 0.2s ease-out;
    color:rgb(22, 22, 22);
    background-color:white ;
}
.product-card:hover {
    transform: translate(0px, 0px);
}
.back-card {
    display: block;
    width: 100%;
    height: 100%;
    background: #333;

    border-radius: 5px;
    position: absolute;
    z-index: -1;
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
    width: 460px;
    filter: drop-shadow(0px 14px 10px rgba(0,0,1));
    margin: auto;
  }
  .home_right {

    position: relative;
 

    img {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 122%;
      object-fit: contain;
      width: 100%;
      left: 0%;

      
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
.shape_home{
  width:390px ;
}
    .grid{
      display: flex;
    flex-direction: column;
    justify-content: center;
  
}
.home_left {
    text-align: center;
    margin-bottom:8em ;
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




  @media ${(props) => props.theme.breakpoints.md} {
    .card_home{
      justify-content: center;
     margin-top:35px;
    }
   
  }

`;
