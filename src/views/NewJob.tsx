import { Box } from "native-base";
import NewJobHeader from "@components/Header/NewJobHeader";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectJobType from "@components/views/NewJob/SelectJobType";
import SetJobName from "@components/views/NewJob/SetJobName";
import Stepper from "@components/views/NewJob/Stepper";
import { useNewJobStore } from "@hooks/useNewJobStore";

const getStepComponent = (step: number) => {
  switch (step) {
    case 0:
      return <SetJobName />;
    case 1:
      return <SelectJobType />;
    default:
      return <></>;
  }
};

const NewJob = () => {
  const { step } = useNewJobStore();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NewJobHeader />
      <Stepper />
      <Box height={10} />
      {getStepComponent(step)}
    </SafeAreaView>
  );
};

export default NewJob;
