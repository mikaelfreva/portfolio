import {useLayoutEffect, useEffect, useRef, useState} from 'react';

export const item = {
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
    hidden: { opacity: 0, x: -50 },
  };
  export const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }



 
  export const variantsAnim = {

    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2, duration: 0.3 },
    }),
    hidden: {
      x: -50,
      opacity: 0,
    },
}


