import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@components/Header";
import { Container, VStack } from "native-base";

const Home = () => {
  return (
    <SafeAreaView>
      <VStack paddingX={3}>
        <Header />
        <View>
          <Text>Home jaa</Text>
        </View>
      </VStack>
    </SafeAreaView>
  );
};

export default Home;
