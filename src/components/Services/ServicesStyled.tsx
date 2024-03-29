import styled from "styled-components";

export const ServicesWrapper = styled.div`
margin-top:5vh ;
.services_box_container_row{
    display: flex;
    margin-top:2rem ;
    gap:30px;
}
.services{
    h2{
                margin-bottom:10px ;
                font-size:1.2em ;

    }
    h4{
        font-family: 'recoleta-thin';

    }
    p{
        font-size:.9em ;

    }
     box-shadow: ${({ theme }) => theme.boxShadow};
     background-color: ${({ theme }) => theme.lightWhite};
    *{
        color: ${({ theme }) => theme.lightDark};
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