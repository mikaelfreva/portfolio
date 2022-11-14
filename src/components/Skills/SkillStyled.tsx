import styled from "styled-components";
import { Title } from "../../styles/GlobalComponents";
import { ContainerImage } from "../../styles/GlobalComponents";
export const SkillWrapper = styled.div`
  ${Title} {
    padding: 5% 0;
  }

  .skills_box_container_heading {
    text-align: left;
    font-size: 20px;
  }
  .skills_box_container_row_card {
    
    > * {
      transition: all 0.3s ease-in-out;
    }
    position: relative;

    .skill_title_bottom {
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      color: black;
      text-align: center;
      opacity: 0;
    }
    &:first-child {
      margin-left: 0;
    }

    ${ContainerImage} , img{
      max-width: 100px !important;
    }
    &.active {
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
    }
  }

  .skills_box_container_row {
   
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  .skills_box_container_row_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--skills-card-border);
    border-radius: 10px;
    width: 100px;
    height: 120px;
    text-align: center;
    margin: 10px;
    border:1px solid black;

    background-color: #ffffff;
    cursor: pointer;
    p {
      color: black;
      margin: 10px 0;
    
    }
  }
  .skills_box_container_heading,
  .skills_heading {
    text-align: left;
    margin: 10px 0 3px;
  }
  .skills_box_container_heading {
  
    font-size:15px ;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    .skills_box_container_row_card {
      width: 90px;
      height: 100px;
      img {
        width: 60px;
        padding-bottom: 10px;
      }
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
