import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from '../src/components/About/About'
import { Services } from '../src/components/Services/Services';
import { Skills } from '../src/components/Skills/Skills';
import { graphcms, QUERY } from "../src/hooks/services";
import {
  ISkills,
  IServices,
} from "../src/hooks/typings";
interface AboutProps {
  skills: ISkills[];
  services: IServices[];
}
const APropos: NextPage<AboutProps> = ({
  skills,
  services,
}) => {
  return (
    <>
         <Head>
      <title>A propos - Mikaël Freva</title>
      
    </Head>
       <About/>
    
      <Services services={services} />
         <Skills skills={skills} />
    </>
  )
}

export default APropos


export const getStaticProps: GetStaticProps = async () => {
  const { skills, services} =
    await graphcms.request(QUERY);

  return {
    props: {
      skills,
      services,
    },
    revalidate: 10,
  };
};
