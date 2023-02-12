import styled from "styled-components";
import { Flex } from "../../styles/GlobalComponents";

export const ContactWrapper = styled.div`
${Flex}{
  gap:10rem;
}
.icons_list{
  display: flex;
  gap:10px;
  margin:20px 0 ;
  a{
    background-color: ${(props) => props.theme.lightWhite};
    border:1px solid ${(props) => props.theme.lightDark};
    display: flex;
    padding:10px ;
    border-radius:100% ;
    cursor: pointer;
    path{
      fill:${(props) => props.theme.lightDark};
    }
  }
}

form{
  .flex_row{
    display: flex;
    gap:30px;
  }
  .contact_form_formcontrol{
    width:100% ;
  }
  input, textarea{
    &::placeholder { /* Internet Explorer 10-11 */
    color:${(props) => props.theme.inputColor};

}
    background:none ;
    transition:all .3s ease-in-out ;
    width:100% ;
    margin:10px 0 ;
    border:none ;
    padding:10px 0 ;
    border-bottom: 1px solid ${(props) => props.theme.inputColor};
    &:focus{
      border-width:1px;
      border-color:#fecb00;
    }
  }
  button{
    display: block;
    margin-top:2rem ;
    width: 100%;
    padding:10px ;
    background-color:#fecb00 ;
  }
}

`;
