import Home from "../views/Home";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewJob from "@views/NewJob";
import { RootStackParamList } from "@customTypes/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewJob" component={NewJob} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
