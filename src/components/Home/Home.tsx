import type { NextPage } from "next";
import { IProjects, IProjectTypes } from "../../hooks/typings";
import React, { useState, useEffect, FC, useRef } from "react";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { HomeWrapper, POP } from "./Home.styles";
import {
  Column,
  Container,
  ContainerImage,
  Row,
} from "../../styles/GlobalComponents";
import { item, variantsAnim } from "../../hooks/variants";
import { AnchorScrollLink } from "../Essential/ScrollToTop";
import LOGO from "./testt.svg";
import TextVertical from "../Essential/TextVertical";
import { FadeBottom, FadeIn } from "../../helpers/Fade";
import { FaceDimensions } from "@styled-icons/material/Face";
import Link from "next/link";

export default function Home() {
  return (
    <POP>
      <HomeWrapper>
        <Container>
          <Row className="grid">
            <Column className="home_left">
              <FadeBottom custom={1} >
                 <h3> Hello, je suis</h3>
              </FadeBottom>
         
              <FadeIn custom={2}>
                <h2> Mikael Freva</h2>
              </FadeIn>
              <FadeIn custom={3}>
                <TextVertical />
              </FadeIn>
            </Column>

            <Column className="home_right">
              <FadeIn className="image_home" custom={4}>
                <LOGO className="shape_home" />

                <div className="home_img_mee">
                  <Image
                    src="/moi.png"
                    alt="ekj"
                    priority
                    width={200}
                    height={200}
                  />
                </div>
              </FadeIn>
            </Column>

            <Column className="home_button">
              <div className="card_home">
                
  <FadeIn custom={5} className="bloc-card">
  <Link href="/cv_mikaelfreva.pdf" target="_blank">
                  <h2 className="product-card">cv</h2>
                  <div className="back-card"></div>
</Link>
                </FadeIn>
                
              
                <FadeIn custom={6} className="bloc-card">
                <Link href="/contact">
                   <h2 className="product-card">contact</h2>
                  <div className="back-card"></div>
                </Link>
                 
                </FadeIn>
              </div>
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
