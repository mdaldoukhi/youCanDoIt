import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WelcomeScreen />
    </GestureHandlerRootView>
  );
};

export default App;
