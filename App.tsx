import { NavigationContainer } from "@react-navigation/native";
import { loadAsync } from "expo-font";
import { NativeBaseProvider, View } from "native-base";
import NavigationStack from "./src/routes";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = React.useState(false);

  useEffect(() => {
    const preload = async () => {
      try {
        await loadAsync({
          "Kanit-Bold": require("./assets/fonts/kanit/Kanit-Bold.ttf"),
          "Kanit-Medium": require("./assets/fonts/kanit/Kanit-Medium.ttf"),
          "Kanit-Regular": require("./assets/fonts/kanit/Kanit-Regular.ttf"),
          "Kanit-Thin": require("./assets/fonts/kanit/Kanit-Thin.ttf"),
        });
        setAppReady(true);
      } catch (e) {
        console.error(e);
      }
    };

    preload();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
