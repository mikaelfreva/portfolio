/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { IServices } from "../../hooks/typings";
import Image from "next/image";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { ServicesWrapper } from "./ServicesStyled";
import { Container, Row, Title } from "../../styles/GlobalComponents";

interface IServicesProps {
  services: IServices[];
}

export const Services: NextPage<IServicesProps> = ({  services }) => {

  const [selected, setSelected] = useState<null>(null);



  return ( 
     <ServicesWrapper>
      <Row>
        <Container>
           <div className="services_box_container">
      
      <Title
      className="services_box_container_heading"
      align={"left"}>Mes différents services</Title>
      <div className="services_box_container_row">
        {services?.map(({name, id, description, image }) => (
          <div
            key={id}
            className="services"
          >
           <p className="image_services">
<Image width={50}  height={50} src={image?.url} unoptimized  alt={name} />
           </p>
            
         
          <h3>{name}</h3>
          <p>{description}</p>
          </div>
        ))}

      </div>
    </div>  
        </Container>
      </Row>
 
    </ServicesWrapper>
  );
};
