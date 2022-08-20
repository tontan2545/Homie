import { Box } from "native-base";
import React from "react";
import StepIndicator from "react-native-step-indicator";
import { useNewJobStore } from "@hooks/useNewJobStore";

const Stepper = () => {
  const { step, visitedStep, setStep } = useNewJobStore();
  return (
    <Box paddingX={10}>
      <StepIndicator
        currentPosition={step}
        onPress={(position) => {
          setStep(Math.min(visitedStep, position));
        }}
        customStyles={{
          currentStepStrokeWidth: 3,
          stepStrokeFinishedColor: "#F87BB6",
          stepStrokeCurrentColor: "#F87BB6",
          stepStrokeUnFinishedColor: "#B4B4B4",
          stepStrokeWidth: 3,
          separatorUnFinishedColor: "#B4B4B4",
          separatorFinishedColor: "#F87BB6",
          separatorStrokeWidth: 3,
          stepIndicatorLabelCurrentColor: "transparent",
          stepIndicatorLabelFinishedColor: "transparent",
          stepIndicatorLabelUnFinishedColor: "transparent",
          stepIndicatorUnFinishedColor: "white",
          stepIndicatorFinishedColor: "#F87BB6",
          stepIndicatorSize: 35,
          currentStepIndicatorSize: 35,
        }}
      />
    </Box>
  );
};

export default Stepper;
