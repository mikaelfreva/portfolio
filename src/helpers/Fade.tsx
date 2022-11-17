import { ElementType, useEffect, useState } from "react";
import { item, variantsAnim } from "../hooks/variants";

import { useInView } from "react-intersection-observer";
import { motion, useTime, useTransform, useAnimation } from "framer-motion";

type Props = {
  children: React.ReactNode;
  custom?: number;
  classname?: string;
};
const Fade = ({ children, custom, classname }: Props) => {
    const controlsAnim = useAnimation();
    const [refAnim, inViewAnim, entry] = useInView({ threshold: 0 });
  
    
    useEffect(() => {
      const timer = setTimeout(() => {
        if (inViewAnim) {
          controlsAnim.start("visible");
        }
      }, 0);
  
      return () => clearTimeout(timer);
    }, [controlsAnim, inViewAnim]);
  return (
    <>
       <motion.div
        initial="hidden"
        custom={custom}
        style={{ opacity: "0", x: 0 }}
        className={classname}
        animate={controlsAnim}
        variants={item}
        ref={refAnim}
      >
        {children}
      </motion.div> 


  
    </>
  );
};
export default Fade;
