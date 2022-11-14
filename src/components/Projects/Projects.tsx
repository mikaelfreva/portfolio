import type { NextPage } from "next";
import { IProjects, IProjectTypes } from "../../hooks/typings";
import Github from "../../assets/github.webp";
import Web from "../../assets/www.webp";
import { useEffect, useRef, useState } from "react";
import { ProjectsWrapper } from "./ProjectsStyled";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Grid,
  Autoplay,
  EffectCube,
  EffectFade,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
interface IProjectsProps {
  projects: IProjects[];
  projectTypes: IProjectTypes[];
}

import styled from "styled-components";
import { Container, ContainerImage, Row, Title } from "../../styles/GlobalComponents";

export const Projects: NextPage<IProjectsProps> = ({
  projects,
  projectTypes,
}) => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (activeTag === "all") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects?.filter((project) =>
      project?.projectTypes?.some((tech) =>
        tech?.name
          //?.normalize("NFD")
          //.replace(/[\u0300-\u036f]/g, "")
          //.replace(" ", "")
          //.toLowerCase()
          //?.includes(activeTag?.toLowerCase())
          ?.includes(activeTag)
      )
    );

    setFilteredProjects(filtered);
  }, [activeTag, projects]);

  const removeCaracter = (str: any) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(" ", "")
      .toLowerCase();
  };
  const FilterTabs = (str: any) => {
    //setActiveTag(removeCaracter(str));
    setActiveTag(str);
  };

  return (
    <ProjectsWrapper>
      <Row>
        <Container>
          <Title className="projects_heading" align={"center"}>
            Projets
          </Title>
          <div className="projects_filter">
            <div className="projects_filter_box">
              <a
                onClick={() => setActiveTag("all")}
                className={`projects_filter_box_item ${
                  activeTag === "all" ? "activeTag" : ""
                }`}
              >
                Tout
              </a>

              {projectTypes.map((home, index) => (
                <a
                  className={`projects_filter_box_item ${
                    activeTag === home.name ? "activeTag" : ""
                  }`}
                  onClick={() => FilterTabs(home.name)}
                  key={index}
                >
                  {home.name}
                </a>
              ))}
            </div>

            <div className="projects_filter_cardsBoxa cardsa">
              <Swiper
                loop={true}
                navigation={{
                  prevEl: "#project_prev_slider",
                  nextEl: "#project_next_slider",
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                draggable="false"
                spaceBetween={15}
                breakpoints={{
                  1: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  699: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {filteredProjects?.map((project) => (
                  <SwiperSlide key={project?.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="projects_filter_cardsBox_card card"
                    >
                      <div className="image_project">
                      
                           <Image
                          src={project?.image?.url}
                         width={400}
                         priority
                         height={400}
                          alt={project?.title}
                          className="projects_filter_cardsBox_card_img"
                        />
                      
                       
                      </div>

                      <p className="projects_filter_cardsBox_card_title">
                        {project?.title}
                      </p>
                      <p className="projects_filter_cardsBox_card_description">
                        {project?.description}
                      </p>
                     
                      
                      <div className="projects_filter_cardsBox_card_links">
                        {project?.sourceCode && (
                          <Image
                          priority
                            src={Github.src}
                            width={20}
                            alt="ffff"
                            height={20}
                            onClick={() =>
                              window.open(project?.sourceCode, "_blank")
                            }
                            className={`${
                              project?.sourceCode && "margin_right"
                            }`}
                          />
                        )}

                        {project?.demo && (
                          <Image
                          priority
                            src={Web.src}
                            width={20}
                            alt="ffff"
                            height={20}
                            onClick={() => window.open(project?.demo, "_blank")}
                            className={`${project?.demo && "margin_right"}`}
                          />
                        )}
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
                <div className="slider_button_box">
                  <div id="project_prev_slider">Précedent</div>
                  <div id="project_next_slider">Suivant</div>
                </div>
              </Swiper>
            </div>
          </div>
        </Container>
      </Row>
    </ProjectsWrapper>
  );
};
