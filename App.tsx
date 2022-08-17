import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
