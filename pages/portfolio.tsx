import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Projects } from '../src/components/Projects/Projects';
import { Realisations } from '../src/components/Realisations/Realisations';
import { graphcms, QUERY } from "../src/hooks/services";
import { IProjects, IProjectTypes, IRealisations } from '../src/hooks/typings';
interface PortfolioProps {
  projects: IProjects[];
  projectTypes: IProjectTypes[];
  realisations: IRealisations[];
}
const Portfolio: NextPage<PortfolioProps> = ({
  projects,
  projectTypes,
  realisations,
}) => {
  return (
    <>
             <Head>
      <title>Portfolio - Mikaël Freva</title>
      
    </Head>
    <Projects projectTypes={projectTypes} projects={projects} />
      <Realisations realisations={realisations} />
    </>
  )
}

export default Portfolio


export const getStaticProps: GetStaticProps = async () => {
  const {  projects, projectTypes, realisations } =
    await graphcms.request(QUERY);

  return {
    props: {
      projects,
      projectTypes,
      realisations,
    },
    revalidate: 10,
  };
};
