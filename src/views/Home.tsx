import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import { Box, VStack } from "native-base";
import SearchAdd from "@components/views/Home/SearchAdd";
import JobPhase from "@components/views/Home/JobPhase";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Box height={3} />
      <VStack paddingX={8} space={3}>
        <SearchAdd />
        <JobPhase />
      </VStack>
    </SafeAreaView>
  );
};

export default Home;
