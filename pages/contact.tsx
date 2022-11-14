import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Contact } from "../src/components/Contact/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
             <Head>
      <title>Contact - Mikaël Freva</title>
      
    </Head>
         <Contact />
    </>
  )
}

export default ContactPage

