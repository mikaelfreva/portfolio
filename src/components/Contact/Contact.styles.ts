import styled from "styled-components";

export const ContactWrapper = styled.div`
.contact_form_formcontrol_error{
  color: red;
    margin: 2px 0 20px 0;
}
.contact_form_formcontrol_submit{
  background:white;
  padding: 10px 20px;
  border-radius:10px ;
  width:100% ;
  cursor:pointer ;
}
padding:5% 1% ;
label{
  
  color: ${({ theme }) => theme.lightWhite};

  margin:20px 0 10px;
  display: block;
}
label:first-child{
  margin-top:0;

}
.contact_form_formcontrol{
  width:100% ;
}
  form {
    background: linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%);
    
    max-width: 400px;
    margin: 40px 0;
    margin-left:0;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      margin-bottom: 10px;
      border: none;
      padding: 15px;
      border: 1px solid rgba(0,0,0,0.3);
      border-radius:10px ;
color:black;
      box-shadow: none;
      outline: none;
    }

    input:focus, textarea:focus {
      border: 1px solid #1325e8;
    }

    input::placeholder {
      font-size: 1em;
      letter-spacing: 1px;
    }
    input[type="submit"]{
        background:linear-gradient(90deg,rgba(109,128,254,1) 0%,rgba(73,168,254,1) 49%,rgba(35,210,253,1) 100%);
        color:white ;
        border:none;
        cursor: pointer;

    }
  }
`;
