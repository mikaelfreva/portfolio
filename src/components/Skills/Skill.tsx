/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { ISkills } from "../../hooks/typings";
import Image from "next/image";
import { SkillWrapper } from "./SkillStyled";
import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { ContainerImage } from "../../styles/GlobalComponents";

interface ISkillProps {
  skills: ISkills[];
  skill: string;
}

export const Skill: NextPage<ISkillProps> = ({ skills, skill }) => {
  const [selected, setSelected] = useState("");

  const hover = () => {
    setTimeout(() => {
      setSelected("");
    }, 1000);
  };

  return (
    <div className="w-full">
      <p className="center font-bold ">{skill}</p>

      <div className="skills_box_container_row">
        {skills?.map(({ id, url, image, skill }) => (
          <a
            key={id}
            rel="noreferrer"
            target="_blank"
            href={url}
            className=" skills_box_container_row_card skill_title_bottom"
          >
            {" "}
            <Image
              title={skill}
              width={60}
              height={60}
              src={image?.url}
              alt="rrr"
            />
            {skill}
          </a>
        ))}
      </div>
    </div>
  );
};
