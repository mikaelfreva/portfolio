import styled from "styled-components";

export const RealisationsWrapper = styled.div`
h2{
  color: ${({ theme }) => theme.lightDark};

  text-transform:capitalize ;
}
.projects_filter_cardsBox_card_links{
  margin:20px 0 ;
  img{
    width:30px ;
  }
  .margin_left{
    margin-left: 20px !important;
  }
  .margin_right{
    margin-right: 20px !important;
  }
  .realisation_image_link{
    display: inline-block;
    img{
      cursor: pointer;
    }
  }
}
.realisation_type_box{
 display: block;
 justify-content: center;
    margin: 10px;
  span{
    background: ${({ theme }) => theme.lightDark};
    color: ${({ theme }) => theme.lightWhite};

    padding:5px 10px ;
    margin:5px 0 0px 5px ;
    display:inline-block ;
  }
}
.projects_filter_box{
    gap: 0.7em;
    max-width: 900px;
    width: 100%;
    display: grid;
    margin: 20px 0 auto;
     /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  */
     grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    .projects_filter_box_item{
       text-align: center;
       background: ${({ theme }) => theme.lightWhite};
       border: 1px solid rgba(0,0,0,.2);

       color:black ;
       padding: 20px 10px 0;
      
    }

}
@media ${(props) => props.theme.breakpoints.md} {
  .cards { grid-template-columns: repeat(2, 1fr); }
.projects_filter_box{
  grid-template-columns: repeat(2, 1fr);
}
}
@media ${(props) => props.theme.breakpoints.sm} {
.projects_filter_box{
  grid-template-columns: repeat(2, 1fr);
}
}

`;