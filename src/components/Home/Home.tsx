import type { NextPage } from "next";
import { IProjects, IProjectTypes } from "../../hooks/typings";
import React, { useState, useEffect, FC } from "react";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { HomeWrapper, POP } from "./Home.styles";
import { Column, Container, ContainerImage, Row } from "../../styles/GlobalComponents";
import { item, variantsAnim } from "../../hooks/variants";
import { AnchorScrollLink } from "../Essential/ScrollToTop";
import LOGO from "./test.svg";
import TextVertical from "../Animation/TextVertical";
import FadeInWhenVisible from "../../helpers/FadeIn";



 export default function Home() {


   return (
     <POP>
  <HomeWrapper>
    <Container>
      <Row>
        <Column xs={12} sm={12} md={6} className="home_left">
          <div className="flex ">
            <FadeInWhenVisible custom={1}>
              <h3> Hello, je suis</h3>
            </FadeInWhenVisible>
            <FadeInWhenVisible custom={2}>
              <h2> Mikael Freva</h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible custom={3}>
              <TextVertical />
            </FadeInWhenVisible>
          </div>
          


        </Column>
      
           <Column xs={12} sm={12} md={6} className="home_right">
              <FadeInWhenVisible custom={4} classname="image_home">
          
              <LOGO className="shape_home" />

              <div className="home_img_mee">

             
                <Image
                  src="/moii.png"
                  alt="ekj"
                  priority
                  width={200}
                  height={200}
              
                />
             
                
              </div>
                       

          
</FadeInWhenVisible>
        </Column>
       
       
      </Row>
    </Container>
  </HomeWrapper>
  {/* <div
    onClick={() => AnchorScrollLink("hero")}
    className="lottie_home"

  >
    <Player
      autoplay
      loop
      src="/lotties/scrolldown.json"
      style={{ height: "130px", width: "130px" }}
    ></Player> 

  </div>*/}

</POP> 
   );
 }


