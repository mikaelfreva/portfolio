import styled from "styled-components";
import { Title } from "../../styles/GlobalComponents";

export const ProjectsWrapper = styled.div`

${Title}{
  padding:5% 0 0 ;
}
.slider_button_box{
  display: flex;
  justify-content:center ;
  div{
    margin:0 5px ;
    cursor: pointer;
  }
}
img.projects_filter_cardsBox_card_img {
    width: 100% !important;
    object-fit:cover !important ;
    height:100% !important ;
}
.projects_filter_box{
margin:30px 0 ;

.projects_filter_box_item{
  color: ${({ theme }) => theme.lightDark};
  padding:10px;
  transition:all 0.3s ease-in-out ;

  border: 1px solid rgba(0,0,0,.2);

  &.activeTag{
    background-color:blue ;
    color:white;
  }
}
}

.card {
  background-color: transparent;
  color: white;
  border-radius:10% ;
 
p{
  margin:15px 0 10px ;
}

.image_project{
  position: relative;
  width:100% ;
  height:200px ;

}
}

.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}


.projects_filter_box{
    display: flex;
    justify-content:center ;
    a{
        margin:0 10px ;
        cursor: pointer;
    }
}

`;