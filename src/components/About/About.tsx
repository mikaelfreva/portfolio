import type { NextPage } from "next";
import { Divider, DividerReverse, AboutWrapper } from "./About.styles";
import { Column, Container, Row, Title } from "../../styles/GlobalComponents";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";

import lotusCarAnimation from './abouttt.json';
import { useEffect, useRef } from "react";
import Lottie from 'react-lottie-player';

import lottieJson from './abouttt.json';
export const About: NextPage = () => {

  return (
  
      <AboutWrapper id="hero">
      <Container>
        <Row className="flex_center">
         <Column xs={12} sm={12} md={6} className="about_right">
           <Image alt="GIF Développeur Web" width={250} height={250} src="/devv.gif"/> 
          {/* <Player
  autoplay
  lo7
  className="lottie_about"
  src="./abouttt.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls  buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>   */}
  {/* <Lottie
   className="lottie_about"
        loop
        play
        animationData={lottieJson}
       
     
      /> */}

           {/* <Player
              autoplay
              loop
              src="./abouttt.json"
              style={{
                height: "300px",
                width: "300px",
              }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>  */}
              
              {/* <Lottie className="lottie_about" animationData={lotusCarAnimation}/> */}
            
   
          </Column> 
        
          <Column xs={12} sm={12} md={6} className="about_left">
            <Title align={"center"}>Qui je suis ?</Title>

            <p>
              Je m’appelle Mikaël Freva, {" j'ai "}  26 ans et je vis à Cagnes-sur-Mer.
            </p>
            <p>
              Développeur Web, Web designer, Intégrateur Web, mes plus grandes
              forces sont ma polyvalence et ma réactivité.
            </p>
            <p>
              Après une réorientation je suis tombé dans la toile du web.{" "}
            </p>
            <p>
              Depuis je ne compte pas en sortir et je développe mes compétences
              sur divers langages.
            </p>
          </Column>
        </Row>
      </Container>
    </AboutWrapper> 


  
  );
};
