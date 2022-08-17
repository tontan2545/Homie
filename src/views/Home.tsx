import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import { Box, VStack } from "native-base";
import SearchAdd from "@components/views/Home/SearchAdd";
import JobPhase from "@components/views/Home/JobPhase";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Box height={3} />
      <VStack paddingX={8} space={5}>
        <SearchAdd />
        <VStack space={10}>
          <JobPhase phase={"DRAFT"} />
          <JobPhase phase={"ONGOING"} />
          <JobPhase phase={"COMPLETED"} />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default Home;
