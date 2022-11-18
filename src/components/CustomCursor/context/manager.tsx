import React, { FC, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "./CustomCursorContext";
type TransitionProps = {
  children: React.ReactNode;
};
const CustomCursorManager: FC<TransitionProps> = ({ children }) => {

  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
