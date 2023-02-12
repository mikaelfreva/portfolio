import type { GetStaticProps, NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Contact } from "../src/components/Contact/Contact";
import { graphcms, QUERY } from "../src/hooks/services";

import { Realisations } from "../src/components/Realisations/Realisations";
import { Services } from "../src/components/Services/Services";
import { Projects } from "../src/components/Projects/Projects";

import {
  ISkills,
  IProjects,
  IServices,
  IProjectTypes,
  IRealisations,
  IStacks,
} from "../src/hooks/typings";
import { Skills } from "../src/components/Skills/Skills";
// import { Home } from "../components/Home/Home";
import { About } from "../src/components/About/About";
import { IndexWrapper } from "../src/styles/GlobalComponents";
import { Divider, DividerReverse } from "../src/components/About/About.styles";
import Home from "../src/components/Home/Home";
import { Stacks } from "../src/components/SkillStacks/SkillStacks";

interface IHomeProps {
  projects: IProjects[];
  skills: ISkills[];
  services: IServices[];
  projectTypes: IProjectTypes[];
  realisations: IRealisations[];
  stacks : IStacks[];
}
const HomePage: NextPage<IHomeProps> = ({
  projects,
  skills,
  services,
  projectTypes,
  realisations,
  stacks
}) => {
  return (

    <IndexWrapper>
               <Head>
      <title>Mikaël Freva</title>
      
    </Head>
      <Home/>
           {/* <Services services={services} />  */}
         <Stacks stacks={stacks}/> 
      <About/>

     
      <Skills skills={skills} />
      <Projects projectTypes={projectTypes} projects={projects} />
      <Realisations realisations={realisations} />
     
      <Contact />
    </IndexWrapper>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { skills, projects, services, projectTypes, realisations,stacks } =
    await graphcms.request(QUERY);

  return {
    props: {
      skills,
      projects,
      services,
      projectTypes,
      realisations,
      stacks
    },
    revalidate: 10,
  };
};


