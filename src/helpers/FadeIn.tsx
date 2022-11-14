import { motion } from "framer-motion";
import { ElementType } from "react";
import {  variantsAnim } from "../hooks/variants";

type Props = {
  children: React.ReactNode;
  custom?  : number;
classname? : string;



};
  const FadeInWhenVisible = ({children, custom, classname }: Props) => {
    return (
      <>
          <motion.div
        initial="hidden"
        custom={custom}
        className={classname}
        animate="visible"
 
        variants={variantsAnim}
      >
        {children}
      </motion.div>    
    

      </>

    );
  }
  export default FadeInWhenVisible;