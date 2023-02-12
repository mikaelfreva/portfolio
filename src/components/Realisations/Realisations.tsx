import type { NextPage } from "next";
import { IProjects, IRealisations } from "../../hooks/typings";
import Github from "../../assets/github.webp";
import Web from "../../assets/www.webp";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { RealisationsWrapper } from "./RealisationsStyled";
import { Container, ContainerImage, Row, Title } from "../../styles/GlobalComponents";

interface IRealisationsProps {
  realisations: IRealisations[];
}

export const Realisations: NextPage<IRealisationsProps> = ({
  realisations,
}) => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<IRealisations[]>([]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <RealisationsWrapper>
      <Row>
        <Container>
          <Title>Réalisations</Title>

          <div className="projects_filter">
            <div className="projects_filter_box">
              {realisations.map((home, index) => (
                <div
                  className={`projects_filter_box_item ${
                    activeTag === home.name ? "activeTag" : ""
                  }`}
                  key={index}
                >
                  <h2> {home.name}</h2>

                  <div
                    style={{ position: "relative" }}
                    className="projects_filter_cardsBox_card_links"
                  >
                   
                   
                      {home?.githubLink && (
                        <span className={`realisation_image_link ${home?.demoLink && "margin_left"} `}>
                             <Image
                          alt={home.name}
                          width={30}
                          height={30}
                          onClick={() =>
                            window.open(home?.githubLink, "_blank")
                          }
                         
                          src={Github.src}
                        />
                        </span>
                     
                      )}

           {home?.demoLink && (
                        <span className={`realisation_image_link ${home?.githubLink && "margin_right"} `}>
                        <Image
                            alt={home.name}
                            width={30}
                            height={30}
                            onClick={() =>
                              window.open(home?.demoLink, "_blank")
                            }
                            src={Web.src}
                          />
                        </span>
                      )}

               
                 
                  </div>
                  <div className="realisation_type_box">
                    {home?.realisationTypes.map((pop, i) => (
                      <span key={i}> {pop.name} </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Row>
    </RealisationsWrapper>
  );
};
