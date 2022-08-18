import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NewJobHeader from "@components/Header/NewJobHeader";
import Stepper from "@components/views/NewJob/Stepper";

const NewJob = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NewJobHeader />
      <Stepper />
    </SafeAreaView>
  );
};

export default NewJob;
