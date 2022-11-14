import React, { useRef, useState, useEffect } from "react";

import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["Développeur Web", "Web designer", "Intégrateur Web"];

const TextVertical = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition className="vertical_text" springConfig={presets.gentle}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </>
  );
};

export default TextVertical;
