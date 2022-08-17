import React from "react";
import { IconButton as IB, IIconButtonProps } from "native-base";

const IconButton: React.FC<IIconButtonProps> = (props) => {
  return (
    <IB
      borderRadius="full"
      _pressed={{
        bg: "gray.600:alpha.10",
      }}
      {...props}
    />
  );
};

export default IconButton;
