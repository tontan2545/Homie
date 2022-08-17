import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import NavigationStack from "./src/routes";

export default function App() {
  const [loadedFonts] = useFonts({
    "Kanit-Bold": require("./assets/fonts/kanit/Kanit-Bold.ttf"),
    "Kanit-Medium": require("./assets/fonts/kanit/Kanit-Medium.ttf"),
    "Kanit-Regular": require("./assets/fonts/kanit/Kanit-Regular.ttf"),
    "Kanit-Thin": require("./assets/fonts/kanit/Kanit-Thin.ttf"),
  });

  if (!loadedFonts) return <AppLoading />;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
