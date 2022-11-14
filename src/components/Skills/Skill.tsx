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
    <div className="skills_box_container">
      <p className="skills_box_container_heading">{skill}</p>

      <div className="skills_box_container_row">
        {skills?.map(({ id, url, image, skill }) => (
          <motion.div
            key={id}
            className={` skills_box_container_row_card ${
              selected === id && `active`
            }  `}
            onMouseOver={() => setSelected(id)}
            onMouseOut={() => setSelected("")}
            // onClick={() => window.open(url, "_blank")}
          >
            {/* <ContainerImage>
              <Image width="130px" height="130px" src={image?.url} alt="rrr" />
            </ContainerImage> */}

<img  width="130px" height="130px" src={image?.url} alt="rrr" />
            <span className="skill_title_bottom"> {skill} </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
