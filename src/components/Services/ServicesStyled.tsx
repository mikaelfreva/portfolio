import styled from 'styled-components'
import { Title } from '../../styles/GlobalComponents';

export const ServicesWrapper = styled.div`
${Title}{
    padding:4% 2% ;

}

.services_box_container_row{
    gap: 1.6em;
    width:100% ;
    display: grid;
    margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
    .services{
        display: flex;
       
           background: ${({ theme }) => theme.lightDark}; 
        box-shadow:  0 0 3px 3px rgba(109,128,254,1), inset 0 0 1px 1px rgba(35,210,253,1); 
        &:hover{
            box-shadow:  0 0 6px 6px rgba(35,210,253,1), inset 0 0 4px 4px rgba(109,128,254,1); 
        }
        color:white;
        flex-direction:column ;
        align-items:center ;
        justify-content:center ;
        padding:20px ;
        border-radius:0% ;
      
        text-align: center;       
       
        transition:all 0.3s ease-in-out ;

        h3,p{
            color: ${({ theme }) => theme.lightWhite};
            line-height:25px ;
        }
        .image_services{
             /* background-image: linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%); */
             padding:15px ;
             border-radius:70%;
 img{
            color:white ;
           
            filter: ${({ theme }) => theme.invertImage};


        }
        }
       
        h3{
            margin:10px 0 ;
        }
        p{
            margin:0 ;
        }
    }
}

@media ${(props) => props.theme.breakpoints.md} {

    .services_box_container_row {
    max-width: 350px;
    grid-template-columns: repeat(1,1fr);
}
}


`;