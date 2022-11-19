import type { NextPage } from "next";
import { Divider, DividerReverse, AboutWrapper } from "./About.styles";
import { Column, Container, Row, Title } from "../../styles/GlobalComponents";
import Image from "next/image";

import { useEffect, useRef } from "react";


import { Circle } from "./Moi";
export const About: NextPage = () => {

  return (
  
      <AboutWrapper id="hero">
      <Container>
        <Row>
         <Column  xs={12} sm={12} md={5} className="about_right">
           
           <Circle/>

     

          </Column> 
        
          <Column xs={12} sm={12} md={7} className="about_left">
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
