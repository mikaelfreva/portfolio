/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { IServices } from "../../hooks/typings";
import Image from "next/image";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Container, Row, Title } from "../../styles/GlobalComponents";
import { subtle } from "crypto";
import { ServicesWrapper } from "./ServicesStyled";
import { FadeBottom, FadeIn } from "../../helpers/Fade";

interface IServicesProps {
  services: IServices[];
}

export const Services: NextPage<IServicesProps> = ({ services }) => {
  const [selected, setSelected] = useState<null>(null);

  return (
    <ServicesWrapper>
      <Row>
        <Container>
          <div className="services_box_container">
              <Title className="services_box_container_heading" align={"center"}>
              Mes domaines de compétence
            </Title>  
            <div className="services_box_container_row">
              {services?.map(({ name, subtitle, id, description, image }) => (
                <div key={id}>
                     <FadeIn  className="services" custom={1} >
                     <div className="flex items-center gap-20 mb-25">
                    <Image
                      width={50}
                      height={50}
                      src={image?.url}
                      unoptimized
                      alt={name}
                    />

                    <div>
                      <h2 className="mb-10">{name}</h2>
                    
                      <h4>{subtitle}</h4>
                    </div>
                  </div>
                  <div>
                    <p>{description}</p>
                  </div>
                    </FadeIn>
               
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Row>
    </ServicesWrapper>
  );
};
