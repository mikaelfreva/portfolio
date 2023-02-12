import type { NextPage } from "next";
import { IStacks } from "../../hooks/typings";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { log } from "console";
import {
  Button,
  Column,
  Container,
  Row,
  Title,
} from "../../styles/GlobalComponents";
import { StackWrapper } from "./SkillStackStyled";
import Link from "next/link";

interface IStackProps {
  stacks: IStacks[];
}

export const Stacks: NextPage<IStackProps> = ({ stacks }) => {
  return (
    <Container>
      <Row>
        <StackWrapper>
          <div className="grid_stack">
            {stacks?.map(({ name, url, image, id, color }) => (
              <a
                style={{ backgroundColor: color.hex }}
                className="w-full"
                key={id}
              >
                <Image
                  title={name}
                  width={80}
                  height={80}
                  src={image?.url}
                  alt="rrr"
                />
              </a>
            ))}
          </div>

          <Column xl={9} xs={12} sm={12} lg={9} md={9} className="list_stack">
            <Title>Mon stack technique</Title>
            <p>
              Vis à vis du front-end je travaille sous React et NextJs, alors
              que pour le back-end je suis adepte et Symfony 6 et bientôt un
              partisan de Laravel 9.
            </p>
            <p>Et bien sur HTML, CSS, PHP et Javascript.</p>
            
            <Link
         
          className="cta"
          href="/a-propos"
        >
          Voir mon stack
        </Link>
            <p>
            </p>
          </Column>
        </StackWrapper>
      </Row>
    </Container>
  );
};
