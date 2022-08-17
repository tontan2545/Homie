import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import NavigationStack from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
