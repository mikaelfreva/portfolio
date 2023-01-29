import { ElementType, useEffect, useState } from "react";
import { fadeBottom, item, variantsAnim } from "../hooks/variants";

import { useInView } from "react-intersection-observer";
import { motion, useTime, useTransform, useAnimation } from "framer-motion";

type Props = {
  children: React.ReactNode;
  custom?: number;
  className?: string;
};

export function FadeIn({ children, custom, className }: Props) {
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
        className={className}
        animate={controlsAnim}
        variants={item}
        ref={refAnim}
      >
        {children}
      </motion.div>
    </>
  );
}
export function FadeBottom({ children, custom, className }: Props) {
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
        className={className}
        animate={controlsAnim}
        variants={fadeBottom}
        ref={refAnim}
      >
        {children}
      </motion.div>
    </>
  );
}
