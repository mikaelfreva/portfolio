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
} from "../src/hooks/typings";
import { Skills } from "../src/components/Skills/Skills";
// import { Home } from "../components/Home/Home";
import { About } from "../src/components/About/About";
import { IndexWrapper } from "../src/styles/GlobalComponents";
import { Divider, DividerReverse } from "../src/components/About/About.styles";
import Home from "../src/components/Home/Home";

interface IHomeProps {
  projects: IProjects[];
  skills: ISkills[];
  services: IServices[];
  projectTypes: IProjectTypes[];
  realisations: IRealisations[];
}
const HomePage: NextPage<IHomeProps> = ({
  projects,
  skills,
  services,
  projectTypes,
  realisations,
}) => {
  return (

    <IndexWrapper>
               <Head>
      <title>Mikaël Freva</title>
      
    </Head>
      <Home/>
          <Services services={services} />

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
  const { skills, projects, services, projectTypes, realisations } =
    await graphcms.request(QUERY);

  return {
    props: {
      skills,
      projects,
      services,
      projectTypes,
      realisations,
    },
    revalidate: 10,
  };
};


