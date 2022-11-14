import type { NextPage } from "next";
import { Container, Row, Title } from "../../styles/GlobalComponents";
import { ISkills } from "../../hooks/typings";
import { Skill } from './Skill'
import { SkillWrapper } from "./SkillStyled";


interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  
   const languages = skills?.filter(skill => skill?.type?.toLowerCase() === "languages");
  const frontend = skills?.filter(skill => skill?.type?.toLowerCase() === "frontend");
  const tools = skills?.filter(skill => skill?.type?.toLowerCase() === "tools");

  return (
    <>
    
    <SkillWrapper>
     
      <Row>
        <Container>
           <Title 
      className="skills_heading"
      align={"center"}>Mes compétences</Title>
            <div className="skills_box">
        <Skill skills={languages} skill="Langages" /> 
         <Skill skills={frontend} skill="Frontend" />
         <Skill skills={tools} skill="Outils" />
      </div> 
        </Container>
      </Row>
   
    </SkillWrapper>

    </>
  );
};
