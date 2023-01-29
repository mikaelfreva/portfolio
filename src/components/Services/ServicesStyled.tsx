import styled from "styled-components";

export const ServicesWrapper = styled.div`
.services_box_container_row{
    display: flex;
    margin-top:60px ;
    gap:30px;
}
.services{
    h2{
        font-family: 'PlayfairBlack';
                margin-bottom:10px ;
                font-size:1.2em ;

    }
    h4{
        font-family: 'LatoThinItalic';

    }
    p{
        font-size:.9em ;

    }
     box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.75);
     background-color: ${({ theme }) => theme.lightDark};
    *{
        color: ${({ theme }) => theme.lightWhite};
    }
    padding:15px ;
    border-radius:20px ;
    position:relative ;
 
    img{
        filter:invert() ;
        z-index:2 ;
    }
}
.services div:last-child{
    p{        
        line-height:22px ;

    }
}
.services div:first-child{
   
    &::after{
        content:'' ;
        background: linear-gradient(-90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%);
        position:absolute ;
        left:0;

  display: block;
  width: 80px;
  height: 80px;
  top:0;
  z-index:1 ;
  border-radius:15px 0 15px 0;
    }
    display: flex;
    align-items:center ;
    gap :12%;

   
    margin-bottom:40px ;

 
}
@media ${(props) => props.theme.breakpoints.md} {

}
@media ${(props) => props.theme.breakpoints.sm} {
    .services_box_container_row{
    flex-direction:column ;
}
.services div:first-child {

    gap: 8%;

}
}

`;