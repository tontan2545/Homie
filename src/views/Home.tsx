import { Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
