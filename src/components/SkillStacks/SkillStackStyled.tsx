import styled from "styled-components";
import { Button, Title } from "../../styles/GlobalComponents";

export const StackWrapper = styled.div`
.list_stack{
    p{
        margin:1.5em 0 ;
    }
   a{
    cursor: pointer;
   
    &:hover{
         text-decoration:underline ;
    }
   }
}

display:flex ;
gap:5em;
margin-top:5rem ;
align-items:center ;
${Title}{
    margin:0px ;
}
.cta{
    background-color:${({ theme }) => theme.lightDark};
    color:${({ theme }) => theme.lightWhite};
    display:inline-block ;
    padding:15px 20px ;
    border-radius:20px ;
 
}
.grid_stack{
    a{
        &:nth-child(1){
            border-radius: 10px 0 0 0;
        }        
        &:nth-child(2){
            border-radius: 0px 10px 0 0;
            img{
                filter: brightness(0) invert(1);
            }
        }
        &:nth-child(3){
            border-radius: 0px 0  0 10px;
        }
        &:nth-child(4){
            border-radius: 0px 0 10px 0;
        }





    }
  
   
    width:300px ;
    display:grid ;
    grid-template-columns:50% 2fr ;
    text-align: center;
 
    a{
        padding:20px ;
    }

}

@media ${(props) => props.theme.breakpoints.md} {
flex-direction:column-reverse ;
margin-top: 10rem;
gap:3rem;
h2,p{
    text-align:center ;
}
${Button}{
     margin:auto ;
 
}

.grid_stack a {
    padding: 25px 10px;
    img{
        height:60px ;
        width:auto ;
    }
}
}


`;