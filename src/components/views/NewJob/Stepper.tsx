import { Box } from "native-base";
import React from "react";
import StepIndicator from "react-native-step-indicator";

const Stepper = () => {
  return (
    <Box paddingX={10}>
      <StepIndicator
        customStyles={{
          currentStepStrokeWidth: 3,
          stepStrokeCurrentColor: "#F87BB6",
          stepStrokeUnFinishedColor: "#B4B4B4",
          stepStrokeWidth: 3,
          separatorUnFinishedColor: "#B4B4B4",
          separatorStrokeWidth: 3,
          stepIndicatorLabelCurrentColor: "transparent",
          stepIndicatorLabelFinishedColor: "transparent",
          stepIndicatorLabelUnFinishedColor: "transparent",
          stepIndicatorUnFinishedColor: "white",
          stepIndicatorSize: 35,
          currentStepIndicatorSize: 35,
        }}
      />
    </Box>
  );
};

export default Stepper;
