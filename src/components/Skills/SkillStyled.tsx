import styled from "styled-components";
import { Title } from "../../styles/GlobalComponents";
import { ContainerImage } from "../../styles/GlobalComponents";
export const SkillWrapper = styled.div`
  ${Title} {
    padding: 10rem 0 2rem 0 ;
  }
  .skills_box_container{
    width:100% ;
  }
.skills_box{
  display: flex;
    gap: 5rem;
}
  .skills_box_container_heading {
    text-align: center;
    font-size: 20px;
    font-family: 'recoleta-thin';
  }
  .skills_box_container_row_card {
    
    > * {
      transition: all 0.3s ease-in-out;
    }
    position: relative;

    .skill_title_bottom {
      /* position: absolute; */
      bottom: 20px;
      left: 0;
      width: 100%;
      color: black;
      text-align: center;
      /* opacity: 0; */
    }
    &:first-child {
      margin-left: 0;
    }

    ${ContainerImage} , img{
      max-width: 70px !important;
      height:auto ;
    }
    /* &.active {
      ${ContainerImage}, img {
        max-width: 70px !important;
        transform: translateY(-15px);
      }
      span {
        opacity: 1;
      }
      .skill_title_bottom {
        opacity: 1;
      }
    } */
  }

  .skills_box_container_row {
   
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

  }
  .skills_box_container_row_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 5px;

    text-align: center;
    margin: 5px;
   background-color:white ;
   padding:10px ;
    cursor: pointer;
  
  }
  .skills_box_container_heading,
  .skills_heading {
    margin: 20px 0 10px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
   
    .skills_box{
  flex-direction:column ;
}
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    .skills_box_container_row {
      justify-content: center;
    }
    .skills_box_container_heading,
    .skills_heading {
      text-align: center;
    }
  }
`;
