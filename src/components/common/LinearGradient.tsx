import React from "react";
import {
  LinearGradient as LG,
  LinearGradientProps,
} from "expo-linear-gradient";

type Props = {
  colors?: string[];
} & Omit<LinearGradientProps, "colors">;

const LinearGradient: React.FC<Props> = ({ children, ...props }) => {
  return (
    <LG
      colors={["#9666ff", "#F87BB6", "#ff3232"]}
      start={{
        x: 0,
        y: 1,
      }}
      end={{
        x: 1,
        y: 0,
      }}
      {...props}
    >
      {children}
    </LG>
  );
};

export default LinearGradient;
