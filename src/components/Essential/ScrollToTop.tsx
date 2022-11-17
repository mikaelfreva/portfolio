import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { ElementType, FC, useEffect, useState } from "react";
import styled from "styled-components";
 import Eye from "../../../public/svg/rocket.svg";

export const AnchorScrollLink = (scroll: any) => {
  let hero = document.getElementById(scroll);

  hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState("", "/");
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for smoothly scrolling
  });
};

interface ButtonProps {
  completion: number,
}

const Button = styled(motion.div)<ButtonProps>`




  svg,
  button,
  path {
    cursor: pointer;
  }
  position: fixed;

  /* opacity :${(props) => (props.completion > 10 ? 1 : 0)}; */
  transition:all 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;
  bottom:-55px;
  right: 20px;


  z-index: 30;
 
  button {
    padding: 15px 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.lightWhite};
    transition: box-shadow 1s;

  }
  #rocket_svg__scrolltop{

width:30px ;

.rocket_svg__hublot{
  fill: ${({ theme }) => theme.rocketHublot};

}
.rocket_svg__body{
  fill: ${({ theme }) => theme.rocketBody};

}
.rocket_svg__line{
  fill:black;
  
}


.rocket_svg__speed{
  animation-duration: 0.9s;
  animation-iteration-count:infinite;
  animation-name:speed ; 
 
  &.rocket_svg__third{
    animation-delay:15s ;
  }
  &.rocket_svg__second{
    animation-delay:5s ;
  }
  &.rocket_svg__first{
    animation-delay:10s ;
  }

}
@keyframes speed{
0% {
  height:70px;
  opacity:0 ;
}
50% {
  height:20px;
  opacity:1 ;
}
100% {
  height:70px;
  opacity:0 ;
}
}




}
  svg {
    width: 20px;
  }
`;

const ScrollToTop = () => {

 


  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if(scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }

  }, []);

  // const pmp = `translateY(-` + completion + `px)`;
   const pmp = `translateY(-` + (completion * 7.5) + `px)`;

  return (
    <>
     
     <AnimatePresence>
    
               <>
           <Button
       
           style={{ transform: pmp}} 
           completion={completion}
      
             onClick={scrollToTop}
             
           >  <Eye/>
           </Button>
           </>
  
     </AnimatePresence>
        

            

           

       
          
        
      
    
    </>
  );
};
export default ScrollToTop;
