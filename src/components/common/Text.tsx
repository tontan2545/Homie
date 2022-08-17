import React from "react";
import { Text as NativeText, TextProps } from "react-native";

const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <NativeText
      style={Object.assign(
        {
          fontFamily: "Kanit-Regular",
        },
        style
      )}
      {...props}
    >
      {children}
    </NativeText>
  );
};

export default Text;
