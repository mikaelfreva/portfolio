import styled from "styled-components";
import { Title } from "../../styles/GlobalComponents";
import { ContainerImage } from "../../styles/GlobalComponents";
export const SkillWrapper = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin: 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: white;
   
  }
  .skills_box {
    display: flex;
    gap: 2rem;
  }

  .skills_box_container_row_card {
  }

  .skills_box_container_row {
    margin-top:10px ;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  .skills_box_container_row_card {
  }

  @media ${(props) => props.theme.breakpoints.md} {
    .skills_box {
      flex-direction: column;
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
