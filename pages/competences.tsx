import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { graphcms, QUERY } from "../src/hooks/services";
import {
  ISkills,
  IServices,
} from "../src/hooks/typings";
interface AboutProps {
  skills: ISkills[];
  services: IServices[];
}
const Competences: NextPage<AboutProps> = ({
  services,
}) => {
  return (
    <>
         <Head>
      <title>A propos - Mikaël Freva</title>
      
    </Head>

    </>
  )
}

export default Competences


export const getStaticProps: GetStaticProps = async () => {
  const { skills, services} =
    await graphcms.request(QUERY);

  return {
    props: {
 
      services,
    },
    revalidate: 10,
  };
};
